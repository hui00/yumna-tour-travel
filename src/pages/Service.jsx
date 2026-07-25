import React from 'react';
import Layout, { CtaBand } from '../components/Layout.jsx';
import Figure from '../components/Figure.jsx';
import { ArrowIcon, CheckIcon, WhatsAppIcon } from '../components/Icons.jsx';
import { services } from '../data/services.js';
import { images, ui, waLink } from '../data/site.js';
import { homeUrl, serviceUrl } from '../lib/urls.js';

export default function Service({ lang, slug }) {
  const service = services.find((s) => s.slug === slug);
  const c = service[lang];
  const t = ui[lang];
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <Layout lang={lang} page={{ type: 'service', slug }}>
      <article>
        <section className="border-b border-forest-900/10 bg-sand-100">
          <div className="wrap py-14 sm:py-20">
            <a
              href={`${homeUrl(lang)}#services`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-700 hover:text-clay-800"
            >
              <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
              {t.cta.back}
            </a>

            <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h1 className="font-display text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
                  {c.name}
                </h1>
                <p className="mt-4 font-display text-xl text-clay-700">{c.tagline}</p>
                <p className="mt-6 max-w-prose leading-relaxed text-forest-800/85">{c.intro}</p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href={waLink(c.whatsapp)} className="btn-primary" rel="noopener">
                    <WhatsAppIcon className="h-5 w-5" />
                    {t.cta.ask}
                  </a>
                  <span className="text-sm text-forest-800/70">
                    <span className="font-semibold text-forest-900">{t.price.label}:</span>{' '}
                    {t.price.onRequest}
                  </span>
                </div>
              </div>

              <Figure
                image={images.services[slug]}
                lang={lang}
                priority
                className="aspect-[4/3] w-full rounded-4xl border border-forest-900/10"
                patternClass={service.order % 2 ? 'pattern-field-2' : 'pattern-field'}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-2xl font-semibold text-forest-900">
                {t.serviceMeta.highlights}
              </h2>
              <ul className="mt-6 space-y-3.5">
                {c.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" />
                    <span className="text-sm leading-relaxed text-forest-800/85">{highlight}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-2xl bg-sand-100 p-5 text-sm leading-relaxed text-forest-800/75">
                {t.price.note}
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-forest-900">
                {t.serviceMeta.details}
              </h2>
              <div className="mt-6 space-y-8">
                {c.details.map((detail) => (
                  <div key={detail.title}>
                    <h3 className="font-display text-lg font-semibold text-forest-900">
                      {detail.title}
                    </h3>
                    <p className="mt-2 max-w-prose leading-relaxed text-forest-800/80">
                      {detail.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-forest-900/10 bg-forest-50 p-7">
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  {t.serviceMeta.muslimNote}
                </h3>
                <p className="mt-3 max-w-prose leading-relaxed text-forest-800/85">
                  {c.muslimNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-forest-900/10 bg-sand-100 py-16">
          <div className="wrap">
            <h2 className="font-display text-2xl font-semibold text-forest-900">
              {t.serviceMeta.otherServices}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <a href={serviceUrl(lang, other.slug)} className="card group p-6">
                    <h3 className="font-display text-lg font-semibold text-forest-900">
                      {other[lang].name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/75">
                      {other[lang].summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-700">
                      {t.services.more}
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand lang={lang} message={c.whatsapp} />
      </article>
    </Layout>
  );
}
