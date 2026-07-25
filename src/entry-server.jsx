import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Service from './pages/Service.jsx';
import { services } from './data/services.js';
import { homeSeo, LANGS, site } from './data/site.js';
import { homeUrl, serviceUrl } from './lib/urls.js';

/**
 * Every page the site consists of. The generator turns each entry into a real
 * HTML file — see docs/adr/0002-multi-page-build-not-spa-routing.md.
 */
export function allPages() {
  const pages = [];

  for (const lang of LANGS) {
    pages.push({ type: 'home', lang });
    for (const service of services) {
      pages.push({ type: 'service', lang, slug: service.slug });
    }
  }

  pages.push({ type: 'notFound', lang: 'en' });
  return pages;
}

/**
 * Structured data. Deliberately without `aggregateRating`: the 5.0 rating comes
 * from Google, and marking up review data collected on another platform as your
 * own is against Google's structured-data guidelines. The rating is shown on
 * the page and linked to its source instead.
 */
function jsonLd(lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: site.name,
    description: homeSeo[lang].description,
    url: `${site.origin}${homeUrl(lang)}`,
    telephone: site.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: 'ID',
    },
    areaServed: { '@type': 'Place', name: 'Lombok, Indonesia' },
    availableLanguage: ['English', 'Indonesian'],
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service[lang].name,
        description: service[lang].summary,
      },
    })),
  };
}

export function renderPage(page) {
  const { lang } = page;

  if (page.type === 'home') {
    return {
      html: renderToStaticMarkup(<Home lang={lang} />),
      title: homeSeo[lang].title,
      description: homeSeo[lang].description,
      canonical: `${site.origin}${homeUrl(lang)}`,
      alternates: LANGS.map((l) => ({ lang: l, href: `${site.origin}${homeUrl(l)}` })),
      jsonLd: jsonLd(lang),
      noindex: false,
    };
  }

  if (page.type === 'service') {
    const service = services.find((s) => s.slug === page.slug);
    const c = service[lang];

    return {
      html: renderToStaticMarkup(<Service lang={lang} slug={page.slug} />),
      title: c.seo.title,
      description: c.seo.description,
      canonical: `${site.origin}${serviceUrl(lang, page.slug)}`,
      alternates: LANGS.map((l) => ({
        lang: l,
        href: `${site.origin}${serviceUrl(l, page.slug)}`,
      })),
      jsonLd: null,
      noindex: false,
    };
  }

  return {
    html: renderToStaticMarkup(<NotFound lang={lang} />),
    title: `Page not found — ${site.name}`,
    description: '',
    canonical: null,
    alternates: [],
    jsonLd: null,
    noindex: true,
  };
}
