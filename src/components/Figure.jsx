import React from 'react';

/**
 * A photograph where one exists, the geometric placeholder where one does not.
 *
 * `src` is written root-relative (`/img/...`) and Vite prepends the base path
 * itself, in dev and in the build. Do not prepend BASE here — it gets applied
 * twice.
 */
/**
 * `insideLink` MUST be set when the Figure sits inside an <a> (e.g. a card):
 * the credit is then rendered as plain text, because nesting an <a> inside an
 * <a> is invalid HTML — the parser splits the outer anchor and scrambles the
 * surrounding layout.
 */
export default function Figure({
  image,
  lang,
  className,
  patternClass,
  priority = false,
  insideLink = false,
}) {
  if (!image) {
    return <div className={`${className} ${patternClass}`} />;
  }

  const img = (
    <img
      src={image.src}
      alt={image.alt[lang]}
      // The hero image is the largest paintable element — never lazy-load it.
      loading={priority ? 'eager' : 'lazy'}
      // Lowercase on purpose: React 18 passes unknown lowercase attributes
      // through, but warns on the camelCase `fetchPriority`.
      {...(priority ? { fetchpriority: 'high' } : {})}
      decoding="async"
      className={`${className} object-cover`}
    />
  );

  if (!image.credit) return img;

  // Licences like CC BY require the credit to travel with the image, so it is
  // rendered next to it rather than hidden away on a separate page.
  const { author, authorUrl, title, sourceUrl, license, licenseUrl, modified } = image.credit;

  if (insideLink) {
    return (
      <figure className="w-full">
        {img}
        <figcaption className="px-6 pt-2 text-[0.65rem] leading-relaxed text-forest-800/45">
          {title} · {author} · {license}
          {modified ? ` · ${modified}` : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="w-full">
      {img}
      <figcaption className="mt-2.5 text-[0.7rem] leading-relaxed text-forest-800/50">
        <a href={sourceUrl} rel="noopener noreferrer" target="_blank" className="hover:underline">
          {title}
        </a>{' '}
        ·{' '}
        <a href={authorUrl} rel="noopener noreferrer" target="_blank" className="hover:underline">
          {author}
        </a>{' '}
        ·{' '}
        <a href={licenseUrl} rel="noopener noreferrer" target="_blank" className="hover:underline">
          {license}
        </a>
        {modified ? ` · ${modified}` : null}
      </figcaption>
    </figure>
  );
}
