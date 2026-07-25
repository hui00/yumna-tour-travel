# Yumna Tour and Travel

Marketing site for Yumna Tour and Travel, a tour and travel operator on Lombok,
Indonesia, positioned for Muslim travellers. Static site, hosted on GitHub Pages.

**Before publishing, work through [LAUNCH-APPROVAL.md](./LAUNCH-APPROVAL.md).**
The service copy is drafted, not confirmed by the operator.

## How it works

React is used as a build-time template engine only. `scripts/generate-html.mjs`
renders every page with `renderToStaticMarkup` into `pages/`, and Vite then
processes the CSS and emits the same directory structure into `dist/`.

The result is plain static HTML with **no client-side JavaScript at all** — the
mobile menu is a `<details>` element. Every page is a real file returning HTTP
200 with its own title, meta description and `hreflang` links.

- `src/data/services.js` — the ten services, English and Indonesian. One page
  per service per language.
- `src/data/site.js` — brand facts and every non-service string.
- `src/lib/urls.js` — the base path and URL shapes, shared with `vite.config.js`.
- `docs/adr/` — why the project is built this way.
- `CONTEXT.md` — the domain glossary. Read it before writing customer-facing
  copy; the naming rules there are not arbitrary.

Adding a service means adding one entry to `services.js`. The page, both
languages, the footer links, the sitemap, the Vite inputs and the approval list
all follow from it.

## Development

```bash
npm install
npm run dev        # generates pages/, then serves on http://localhost:8080
```

`pages/`, `.ssr/` and `dist/` are generated and git-ignored. After editing
components or content, restart `npm run dev` — the generator runs on start, not
on change.

```bash
npm run build      # generate + build into dist/
npm run preview    # serve dist/
npm run approval   # regenerate LAUNCH-APPROVAL.md from the service data
```

## Deployment

Pushing to `main` (or `master`) builds and publishes to GitHub Pages via
`.github/workflows/deploy-pages.yml`.

One-time setup in the repository settings:

1. Rename the repository to `yumna-tour-travel`. The base path in
   `src/lib/urls.js` assumes that name.
2. Settings → Pages → set **Build and deployment** to **GitHub Actions**.

For a custom domain later: set `BASE` in `src/lib/urls.js` to `/`, update
`site.origin` in `src/data/site.js` and the `Sitemap:` line in
`public/robots.txt`, and add a `public/CNAME` file.

## Google reviews

The reviews section reads `src/data/google-reviews.json`. It currently holds the
rating and review count from the live listing and an empty `reviews` array —
guest review texts are written by real people and are not invented here.

To fill it, add a repository secret:

```text
GOOGLE_MAPS_API_KEY
```

Optional repository variables: `GOOGLE_PLACE_ID` (preferred — survives a listing
rename) or `GOOGLE_PLACE_QUERY`.

`.github/workflows/update-google-reviews.yml` runs every Monday, commits the
file when it changes, and that commit triggers a redeploy. Manually:

```bash
GOOGLE_MAPS_API_KEY=your_key npm run reviews:update
```

The rating is shown on the page and linked to Google, but it is deliberately
**not** in the JSON-LD: marking up another platform's review data as your own
breaks Google's structured-data guidelines.
