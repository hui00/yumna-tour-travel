# 4. Per-language URLs, not runtime language switching

Date: 2026-07-25

## Status

Accepted

## Context

The site ships in English and Indonesian. English reaches international and Gulf
travellers; Indonesian reaches the domestic market and is largely understood in
Malaysia and Singapore, and Muhajir can maintain it himself so it will not rot.

The sibling project `izzy-surfschool` solves this with `i18next` and a runtime
language switcher: one set of URLs, strings swapped in the browser.

That approach conflicts with the reason this site is multi-page at all
(see ADR 0002). If both languages share a URL, only one of them can be indexed
for it. The Indonesian pages would be invisible to exactly the domestic search
traffic they exist to capture.

## Decision

Each language gets its own URLs: English at the root, Indonesian under `/id/`.
Every page is emitted as a static file per language, cross-linked with
`hreflang`.

## Consequences

- Both languages are independently indexable, shareable, and linkable. An
  Indonesian search result lands on Indonesian content.
- Page count doubles: ten services plus a home page, in two languages, is
  roughly twenty-two built pages. The build inputs must be generated from the
  service data rather than hand-listed, or they will drift.
- Translations are content, not runtime strings. A service added in English and
  not in Indonesian is a visibly missing page, which is the correct failure mode
  — a runtime switcher would silently show English instead.
- The `i18next` setup from `izzy-surfschool` is not reused. Deliberate.
