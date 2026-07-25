# 2. Multi-page build, not client-side routing

Date: 2026-07-25

## Status

Accepted

## Context

Each service gets its own page, and the reason is discoverability: the business
has no web presence beyond a Google listing, so each page is meant to rank for
its own search term ("Lombok airport transfer", "fast boat Gili", "Rinjani
trekking").

GitHub Pages serves static files with no server-side routing. The usual React
workarounds each undermine that goal:

- **`404.html` trick** — deploy `index.html` as `404.html` so unknown paths boot
  the SPA. Works for humans, but GitHub Pages serves that file with HTTP **404**.
  Crawlers hitting a service URL directly see an error status.
- **`HashRouter`** — always HTTP 200, zero config, but `/#/services/...` URLs are
  poor to share and historically weak for indexing.

## Decision

Build a multi-page app: Vite emits a real `index.html` per service via
`rollupOptions.input`. No client-side router.

## Consequences

- Every service URL is a real file returning HTTP 200, with its own `<title>`
  and meta description. This is the whole point of splitting the services out.
- No `react-router-dom` dependency, no `404.html` redirect dance. A `404.html`
  can now be an actual not-found page.
- Navigation between pages is a full reload rather than a soft transition.
  Acceptable for a brochure site; it would not be for an app.
- Build config grows: every new service page must be registered as a Vite input.
  Generating that list from the service data keeps it from drifting.
