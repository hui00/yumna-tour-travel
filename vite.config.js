import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import { BASE } from './src/lib/urls.js';

const PAGES_ROOT = path.resolve(process.cwd(), 'pages');

/**
 * Every page is a real HTML file generated into `pages/` by
 * scripts/generate-html.mjs before the build runs. Collecting them here keeps
 * the Rollup inputs in sync with the service data automatically — see
 * docs/adr/0002-multi-page-build-not-spa-routing.md.
 */
function collectHtmlInputs(dir = PAGES_ROOT, found = {}) {
  if (!existsSync(dir)) {
    throw new Error(
      'pages/ does not exist. Run `node scripts/generate-html.mjs` first — ' +
        '`npm run build` and `npm run dev` do this for you.'
    );
  }

  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);

    if (statSync(full).isDirectory()) {
      collectHtmlInputs(full, found);
      continue;
    }

    if (entry.endsWith('.html')) {
      const name = path.relative(PAGES_ROOT, full).replace(/[/\\.]/g, '-');
      found[name] = full;
    }
  }

  return found;
}

export default defineConfig({
  root: 'pages',
  publicDir: '../public',
  // Defined once in src/lib/urls.js, shared with the page generator.
  base: BASE,
  server: {
    port: 8080,
    // The generated pages live in `pages/`, the components they reference in `src/`.
    fs: { allow: ['..'] },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: collectHtmlInputs(),
    },
  },
});
