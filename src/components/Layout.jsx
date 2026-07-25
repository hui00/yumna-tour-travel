import React from 'react';
import { services } from '../data/services.js';
import { site, ui, waLink } from '../data/site.js';
import { homeAnchor, homeUrl, otherLang, serviceUrl } from '../lib/urls.js';
import { ArrowIcon, GlobeIcon, PinIcon, WhatsAppIcon } from './Icons.jsx';

/**
 * The mobile menu is a <details> element on purpose: it opens and closes with
 * no JavaScript at all, which keeps the whole site zero-JS.
 */
function Header({ lang, page }) {
  const t = ui[lang];
  const other = otherLang(lang);
  const otherHref =
    page.type === 'home' ? homeUrl(other) : serviceUrl(other, page.slug);

  const navItems = [
    { href: homeAnchor(lang, 'services'), label: t.nav.services },
    { href: homeAnchor(lang, 'muslim-friendly'), label: t.nav.muslimFriendly },
    { href: homeAnchor(lang, 'about'), label: t.nav.about },
    { href: homeAnchor(lang, 'contact'), label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-forest-900/10 bg-sand-50/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href={homeUrl(lang)} className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold text-forest-800">Yumna</span>
          <span className="text-[0.62rem] uppercase tracking-[0.2em] text-clay-700">
            Tour and Travel
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label={t.nav.menu}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-forest-800/80 transition-colors hover:text-forest-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={otherHref}
            hrefLang={other}
            className="hidden items-center gap-1.5 rounded-full border border-forest-900/15 px-3 py-1.5 text-xs font-medium text-forest-800 transition-colors hover:bg-forest-700/5 sm:inline-flex"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
            {t.otherLangName}
          </a>

          <a
            href={waLink(t.cta.primary)}
            className="btn-primary hidden !px-5 !py-2.5 lg:inline-flex"
            rel="noopener"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.cta.short}
          </a>

          <details className="relative md:hidden">
            <summary className="btn-secondary cursor-pointer list-none !px-4 !py-2 [&::-webkit-details-marker]:hidden">
              {t.nav.menu}
            </summary>
            <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-forest-900/10 bg-white p-2 shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-forest-800 hover:bg-sand-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={otherHref}
                hrefLang={other}
                className="mt-1 block border-t border-forest-900/10 px-4 py-2.5 text-sm font-medium text-clay-700"
              >
                {t.otherLangName}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer({ lang }) {
  const t = ui[lang];

  return (
    <footer className="border-t border-forest-900/10 bg-forest-900 text-sand-100">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="font-display text-xl font-semibold text-sand-50">
            Yumna Tour and Travel
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand-200/80">
            {t.footer.tagline}
          </p>
          <a
            href={waLink(t.cta.primary)}
            className="btn mt-6 bg-clay-500 text-white hover:bg-clay-600"
            rel="noopener"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {t.cta.primary}
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-300/70">
            {t.footer.servicesTitle}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={serviceUrl(lang, service.slug)}
                  className="text-sm text-sand-200/85 transition-colors hover:text-white"
                >
                  {service[lang].name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-300/70">
            {t.footer.contactTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-sand-200/85">
            <li>{site.contactPerson}</li>
            <li>
              <a
                href={waLink(t.cta.primary)}
                className="transition-colors hover:text-white"
                rel="noopener"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2 pt-1">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand-300/70" />
              <span>
                {site.address.street}
                <br />
                {site.address.region}
                <br />
                {site.address.postalCode}, {site.address.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand-100/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-sand-300/60 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Yumna Tour and Travel. {t.footer.rights}
          </span>
          <a
            href={site.googleMapsUri}
            className="transition-colors hover:text-sand-100"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}

/** Fixed WhatsApp button — the site has exactly one conversion action. */
function FloatingWhatsApp({ lang }) {
  const t = ui[lang];
  return (
    <a
      href={waLink(t.cta.primary)}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-clay-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-clay-900/20 transition-colors hover:bg-clay-700 lg:hidden"
      rel="noopener"
    >
      <WhatsAppIcon className="h-5 w-5" />
      {t.cta.short}
    </a>
  );
}

export function CtaBand({ lang, message }) {
  const t = ui[lang];
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="overflow-hidden rounded-4xl bg-forest-800 px-6 py-14 text-center sm:px-14">
          <span className="eyebrow !text-sand-300">{t.contact.eyebrow}</span>
          <h2 className="font-display text-3xl font-semibold text-sand-50 sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-sand-200/85">{t.contact.lead}</p>
          <a
            href={waLink(message || t.cta.primary)}
            className="btn mt-8 bg-clay-500 text-white hover:bg-clay-600"
            rel="noopener"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.cta.primary}
            <ArrowIcon />
          </a>
          <p className="mt-5 text-xs text-sand-300/70">{t.contact.responseNote}</p>
        </div>
      </div>
    </section>
  );
}

export default function Layout({ lang, page, children }) {
  const t = ui[lang];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-2 focus:text-sand-50"
      >
        {t.skipToContent}
      </a>
      <Header lang={lang} page={page} />
      <main id="main">{children}</main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </>
  );
}
