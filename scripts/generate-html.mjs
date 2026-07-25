/**
 * Renders every page to a complete HTML file before Vite runs.
 *
 * React is used as a build-time template engine only: pages are rendered with
 * renderToStaticMarkup and shipped as static HTML with no client bundle. The
 * mobile menu is a <details> element, so the site needs no JavaScript at all.
 *
 * Output lands in `pages/`, which is Vite's root. Vite then processes the CSS
 * link in each file, hashes the asset and emits the same directory structure
 * into `dist/`. See docs/adr/0002-multi-page-build-not-spa-routing.md.
 */
import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import esbuild from 'esbuild';

const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'pages');
const SSR_DIR = path.join(ROOT, '.ssr');
const SSR_FILE = path.join(SSR_DIR, 'entry-server.mjs');
const CSS_SOURCE = path.join(ROOT, 'src', 'styles.css');
// Vite's root is `pages/`, and it will not serve or bundle a stylesheet that
// sits outside it. The entry file is copied in; Tailwind still scans `src/`.
const CSS_ENTRY = path.join(PAGES_DIR, 'styles.css');

await rm(PAGES_DIR, { recursive: true, force: true });
await rm(SSR_DIR, { recursive: true, force: true });

await esbuild.build({
  entryPoints: [path.join(ROOT, 'src', 'entry-server.jsx')],
  outfile: SSR_FILE,
  bundle: true,
  format: 'esm',
  platform: 'node',
  jsx: 'automatic',
  // React and friends resolve from node_modules at run time.
  packages: 'external',
  logLevel: 'warning',
});

const { allPages, renderPage } = await import(pathToFileURL(SSR_FILE).href);
const { BASE, outputPath } = await import(
  pathToFileURL(path.join(ROOT, 'src', 'lib', 'urls.js')).href
);
const { site } = await import(pathToFileURL(path.join(ROOT, 'src', 'data', 'site.js')).href);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function document(page, rendered, cssHref) {
  const alternates = rendered.alternates
    .map(
      (alt) =>
        `    <link rel="alternate" hreflang="${alt.lang}" href="${escapeHtml(alt.href)}" />`
    )
    .concat(
      rendered.alternates.length
        ? [
            `    <link rel="alternate" hreflang="x-default" href="${escapeHtml(
              rendered.alternates[0].href
            )}" />`,
          ]
        : []
    )
    .join('\n');

  return `<!doctype html>
<html lang="${page.lang}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(rendered.title)}</title>
    <meta name="description" content="${escapeHtml(rendered.description)}" />
${rendered.noindex ? '    <meta name="robots" content="noindex" />\n' : ''}${
    rendered.canonical
      ? `    <link rel="canonical" href="${escapeHtml(rendered.canonical)}" />\n`
      : ''
  }${alternates ? `${alternates}\n` : ''}    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escapeHtml(site.name)}" />
    <meta property="og:title" content="${escapeHtml(rendered.title)}" />
    <meta property="og:description" content="${escapeHtml(rendered.description)}" />
${
  rendered.canonical
    ? `    <meta property="og:url" content="${escapeHtml(rendered.canonical)}" />\n`
    : ''
}    <meta name="twitter:card" content="summary" />
    <meta name="theme-color" content="#28513e" />
    <link rel="icon" href="${BASE}favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="${cssHref}" />
${
  rendered.jsonLd
    ? `    <script type="application/ld+json">${JSON.stringify(rendered.jsonLd)}</script>\n`
    : ''
}  </head>
  <body>
${rendered.html}
  </body>
</html>
`;
}

await mkdir(PAGES_DIR, { recursive: true });
await copyFile(CSS_SOURCE, CSS_ENTRY);

const pages = allPages();
const written = [];

for (const page of pages) {
  const relative = page.type === 'notFound' ? '404.html' : outputPath(page);
  const file = path.join(PAGES_DIR, relative);

  await mkdir(path.dirname(file), { recursive: true });

  const cssHref =
    path.relative(path.dirname(file), CSS_ENTRY).split(path.sep).join('/') || 'styles.css';

  const rendered = renderPage(page);
  await writeFile(file, document(page, rendered, cssHref));
  written.push(relative);
}

// Sitemap: indexable pages only, so the 404 stays out.
const sitemapEntries = pages
  .filter((page) => page.type !== 'notFound')
  .map((page) => {
    const rendered = renderPage(page);
    return `  <url><loc>${escapeHtml(rendered.canonical)}</loc></url>`;
  })
  .join('\n');

await mkdir(path.join(ROOT, 'public'), { recursive: true });
await writeFile(
  path.join(ROOT, 'public', 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`
);

console.log(`Generated ${written.length} pages into pages/ and a sitemap with ${
  pages.length - 1
} URLs.`);
