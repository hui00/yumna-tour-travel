import React from 'react';

/**
 * A photograph where one exists, the geometric placeholder where one does not.
 *
 * `src` is written root-relative (`/img/...`) and Vite prepends the base path
 * itself, in dev and in the build. Do not prepend BASE here — it gets applied
 * twice.
 */
export default function Figure({ image, lang, className, patternClass, priority = false }) {
  if (!image) {
    return <div className={`${className} ${patternClass}`} />;
  }

  return (
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
}
