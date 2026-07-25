import React from 'react';
import Layout from '../components/Layout.jsx';
import { ArrowIcon } from '../components/Icons.jsx';
import { ui } from '../data/site.js';
import { homeUrl } from '../lib/urls.js';

export default function NotFound({ lang }) {
  const t = ui[lang];

  return (
    <Layout lang={lang} page={{ type: 'home' }}>
      <section className="section">
        <div className="wrap max-w-prose py-16">
          <h1 className="font-display text-4xl font-semibold text-forest-900">
            {t.notFound.title}
          </h1>
          <p className="mt-4 text-forest-800/80">{t.notFound.body}</p>
          <a href={homeUrl(lang)} className="btn-primary mt-8">
            {t.cta.home}
            <ArrowIcon />
          </a>
        </div>
      </section>
    </Layout>
  );
}
