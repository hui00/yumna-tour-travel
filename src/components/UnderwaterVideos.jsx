import React from 'react';
import { BASE } from '../lib/urls.js';

const clips = ['reef-fish', 'turtle-swim', 'turtle-close-up'];
const copy = {
  en: {
    heading: 'Snorkeling moments',
    lead: 'A closer look at tropical fish and sea turtles. Choose a video to watch.',
    titles: ['Among tropical fish', 'Swimming with a sea turtle', 'A turtle up close'],
    play: 'Play video',
    close: 'Close video',
    download: 'Download video',
  },
  id: {
    heading: 'Momen snorkeling',
    lead: 'Lihat ikan tropis dan penyu dari dekat. Pilih video untuk ditonton.',
    titles: ['Di antara ikan tropis', 'Berenang bersama penyu', 'Penyu dari dekat'],
    play: 'Putar video',
    close: 'Tutup video',
    download: 'Unduh video',
  },
};

function Player({ clip, title, download, className }) {
  return (
    <video controls playsInline preload="none" width="540" height="960"
      poster={`${BASE}videos/${clip}.jpg`} aria-label={title} className={className}>
      <source src={`${BASE}videos/${clip}.mp4`} type="video/mp4" />
      <a href={`${BASE}videos/${clip}.mp4`}>{download}: {title}</a>
    </video>
  );
}

export function UnderwaterPreview({ lang }) {
  const t = copy[lang];
  const clip = clips[0];
  return (
    <div id="underwater">
      <a href={`${BASE}videos/${clip}.mp4`} data-video-open="underwater-dialog"
        aria-label={`${t.play}: ${t.titles[0]}`}
        className="group relative block h-40 w-full overflow-hidden bg-forest-800">
        <img src={`${BASE}videos/${clip}.jpg`} alt="" loading="lazy" width="540" height="960"
          className="h-full w-full object-cover object-center" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-900 shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            {t.play}
          </span>
        </span>
      </a>
      <dialog id="underwater-dialog" className="video-dialog" aria-label={t.titles[0]}>
        <form method="dialog" className="flex justify-end p-3">
          <button className="rounded-full px-4 py-2 text-sm font-semibold text-white hover:bg-white/10" autoFocus>{t.close} ×</button>
        </form>
        <Player clip={clip} title={t.titles[0]} download={t.download} className="block max-h-[75vh] w-full object-contain" />
      </dialog>
      <script type="module" src={`${BASE}js/video-dialog.js`} />
    </div>
  );
}

export default function UnderwaterGallery({ lang }) {
  const t = copy[lang];
  return (
    <section id="videos" className="border-t border-forest-900/10 bg-forest-50 py-10 sm:py-14" aria-labelledby="videos-heading">
      <div className="wrap">
        <h2 id="videos-heading" className="font-display text-2xl font-semibold text-forest-900">{t.heading}</h2>
        <p className="mt-3 max-w-prose text-sm text-forest-800/75">{t.lead}</p>
        <ul className="mt-7 flex snap-x snap-proximity gap-4 overflow-x-auto pb-3 sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-6">
          {clips.map((clip, index) => (
            <li key={clip} className="w-48 shrink-0 snap-start overflow-hidden rounded-2xl border border-forest-900/10 bg-white sm:w-auto">
              <figure>
                <Player clip={clip} title={t.titles[index]} download={t.download} className="block aspect-[9/16] w-full bg-forest-900 object-contain" />
                <figcaption className="px-4 py-3 text-sm font-semibold text-forest-900">{t.titles[index]}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
