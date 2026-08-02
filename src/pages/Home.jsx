import React from 'react';
import Layout, { CtaBand } from '../components/Layout.jsx';
import { ArrowIcon, CheckIcon, StarIcon, WhatsAppIcon } from '../components/Icons.jsx';
import reviewData from '../data/google-reviews.json';
import { services } from '../data/services.js';
import Figure from '../components/Figure.jsx';
import { images, site, ui, waLink } from '../data/site.js';
import { serviceUrl } from '../lib/urls.js';

function Hero({ lang }) {
  const t = ui[lang];
  const points = [t.hero.pointA, t.hero.pointB, t.hero.pointC];

  return (
    <section className="relative overflow-hidden border-b border-forest-900/10 bg-sand-100">
      <div className="pattern-field absolute inset-y-0 right-0 hidden w-1/3 opacity-60 lg:block" />
      <div className="wrap relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-forest-900 sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-forest-800/85">
            {t.hero.lead}
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-forest-800">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={waLink(t.cta.primary)} className="btn-primary" rel="noopener">
              <WhatsAppIcon className="h-5 w-5" />
              {t.cta.primary}
            </a>
            <a href="#services" className="btn-secondary">
              {t.cta.allServices}
              <ArrowIcon />
            </a>
          </div>
        </div>

        <Figure
          image={images.hero}
          lang={lang}
          priority
          className="aspect-[4/3] w-full rounded-4xl border border-forest-900/10 lg:aspect-square"
          patternClass="pattern-field-2"
        />
      </div>
    </section>
  );
}

function TrustBar({ lang }) {
  const t = ui[lang];

  const cells = [
    {
      key: 'rating',
      href: '#reviews',
      value: (
        <span className="flex items-center gap-1.5">
          {reviewData.rating.toFixed(1)}
          <StarIcon className="h-5 w-5 text-clay-500" />
        </span>
      ),
      label: (
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>
            {reviewData.reviewCount} {t.trust.reviewsLabel} {t.trust.ratingLabel}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-clay-700 group-hover:underline">
            {t.trust.reviewCta}
            <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </span>
      ),
    },
    { key: 'local', value: t.trust.localValue, label: t.trust.localLabel },
    { key: 'contact', value: t.trust.contactValue, label: t.trust.contactLabel },
  ];

  return (
    <section className="border-b border-forest-900/10 bg-white">
      <div className="wrap grid gap-8 py-10 sm:grid-cols-3">
        {cells.map((cell) => (
          <div key={cell.key}>
            {cell.href ? (
              <a
                href={cell.href}
                className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-500 focus-visible:ring-offset-4"
              >
                <div className="font-display text-xl font-semibold text-forest-900">
                  {cell.value}
                </div>
                <div className="mt-1 text-sm text-forest-800/60">{cell.label}</div>
              </a>
            ) : (
              <>
                <div className="font-display text-xl font-semibold text-forest-900">{cell.value}</div>
                <div className="mt-1 text-sm text-forest-800/60">{cell.label}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Services({ lang }) {
  const t = ui[lang];

  return (
    <section className="section" id="services">
      <div className="wrap">
        <span className="eyebrow">{t.services.eyebrow}</span>
        <h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
          {t.services.title}
        </h2>
        <p className="mt-4 max-w-prose text-forest-800/80">{t.services.lead}</p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const c = service[lang];
            return (
              <li key={service.slug}>
                <a href={serviceUrl(lang, service.slug)} className="card group">
                  <Figure
                    image={images.services[service.slug]}
                    lang={lang}
                    insideLink
                    className="h-32 w-full"
                    patternClass={service.order % 2 ? 'pattern-field' : 'pattern-field-3'}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-forest-900">
                      {c.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-800/75">
                      {c.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-700">
                      {t.services.more}
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function MuslimFriendly({ lang }) {
  const t = ui[lang];

  return (
    <section className="section bg-forest-50" id="muslim-friendly">
      <div className="wrap">
        <div className="max-w-3xl">
          <span className="eyebrow">{t.muslim.eyebrow}</span>
          <h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t.muslim.title}
          </h2>
          <p className="mt-4 text-forest-800/80">{t.muslim.lead}</p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {t.muslim.items.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-forest-900/10 bg-white p-7"
            >
              <h3 className="font-display text-lg font-semibold text-forest-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-800/80">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-prose border-l-2 border-clay-400 pl-5 text-sm italic leading-relaxed text-forest-800/70">
          {t.muslim.note}
        </p>
      </div>
    </section>
  );
}

function About({ lang }) {
  const t = ui[lang];

  return (
    <section className="section" id="about">
      <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <Figure
          image={images.about}
          lang={lang}
          // Wide crop: the photo is a panorama, and a tall frame throws away
          // the mountain on one side and the mosques on the other.
          className="aspect-[16/10] w-full rounded-4xl border border-forest-900/10"
          patternClass="pattern-field-3"
        />
        <div>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="prose-body mt-5 max-w-prose leading-relaxed text-forest-800/85">
            {t.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews({ lang }) {
  const t = ui[lang];
  const hasReviews = reviewData.reviews.length > 0;

  return (
    <section className="section bg-sand-100" id="reviews">
      <div className="wrap">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.reviews.eyebrow}</span>
          <h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
            {t.reviews.title}
          </h2>
          <p className="mt-4 text-forest-800/80">{t.reviews.lead}</p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="flex" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="h-5 w-5 text-clay-500" />
            ))}
          </span>
          <span className="text-sm font-semibold text-forest-900">
            {reviewData.rating.toFixed(1)} · {reviewData.reviewCount} {t.trust.reviewsLabel}
          </span>
        </div>

        {hasReviews ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewData.reviews.map((review) => (
              <li
                key={`${review.author}-${review.date}`}
                className="rounded-3xl border border-forest-900/10 bg-white p-7"
              >
                <p className="text-sm leading-relaxed text-forest-800/85">“{review.text}”</p>
                <p className="mt-5 text-sm font-semibold text-forest-900">{review.author}</p>
                <p className="text-xs text-forest-800/55">{review.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 max-w-prose rounded-3xl border border-dashed border-forest-900/20 bg-white/60 p-6 text-sm text-forest-800/70">
            {t.reviews.empty}
          </p>
        )}

        <a
          href={reviewData.googleMapsUri || site.googleMapsUri}
          className="link-underline mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-700"
          rel="noopener noreferrer"
          target="_blank"
        >
          {t.reviews.viewOnGoogle}
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

export default function Home({ lang }) {
  return (
    <Layout lang={lang} page={{ type: 'home' }}>
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <Services lang={lang} />
      <MuslimFriendly lang={lang} />
      <About lang={lang} />
      <Reviews lang={lang} />
      <CtaBand lang={lang} />
    </Layout>
  );
}
