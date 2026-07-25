/**
 * Single source of truth for URLs. Imported by the page generator, by the
 * components, and by vite.config.js — so the base path is only ever written
 * once.
 */

// Served from the custom domain yumnalombok.com, so the site lives at the
// root. (Was '/yumna-tour-travel/' while on the github.io project URL.)
export const BASE = '/';

export const homeUrl = (lang) => (lang === 'en' ? BASE : `${BASE}${lang}/`);

export const serviceUrl = (lang, slug) =>
  lang === 'en' ? `${BASE}services/${slug}/` : `${BASE}${lang}/services/${slug}/`;

/** Anchor on the home page, usable from any page. */
export const homeAnchor = (lang, anchor) => `${homeUrl(lang)}#${anchor}`;

export const otherLang = (lang) => (lang === 'en' ? 'id' : 'en');

/** Output path inside `pages/`, which becomes the path inside `dist/`. */
export const outputPath = (page) => {
  const prefix = page.lang === 'en' ? '' : `${page.lang}/`;
  if (page.type === 'home') return `${prefix}index.html`;
  return `${prefix}services/${page.slug}/index.html`;
};
