# 1. Vite + React stack, fresh project (not a fork of izzy-surfschool)

Date: 2026-07-25

## Status

Accepted

## Context

Yumna Tour and Travel needs a public marketing site. A closely related site already
exists in the same workspace: `~/dev/surf` (`hui00/izzy-surfschool`), a Lombok surf
school one-pager built with Vite 4 + React 18 + Tailwind 3 + shadcn/ui +
framer-motion, deployed to GitHub Pages by a GitHub Actions workflow.

Options considered:

1. **Same stack, fresh project** — copy the toolchain and the Pages workflow, start
   from an empty `src/`.
2. **Fork/copy izzy-surfschool** — fastest to a first visible result.
3. **Plain HTML/CSS, no build step** — maximum robustness, no toolchain.
4. **Astro** — arguably the better technical fit for a content/marketing site
   (zero-JS by default, strong SEO defaults, content collections).

## Decision

Same stack as `izzy-surfschool`, set up as a fresh project in `~/dev/travel-lombok`.

## Consequences

- The owner already knows this toolchain; shadcn/ui components and the Pages
  workflow can be lifted from `izzy-surfschool` verbatim.
- No surf-specific baggage is inherited: the Google Reviews updater script, the
  `fr` locale, and ~15 MB of surf photography stay behind. Nothing surf-related
  can leak into a live deploy by accident.
- We pay React's client-side-rendering cost on a site that is essentially static.
  Astro would have been technically better here; familiarity and reuse won.
- Reverting to Astro later means rewriting the components, not just the config.
