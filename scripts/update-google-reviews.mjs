/**
 * Refreshes src/data/google-reviews.json from the Google Places API.
 *
 * Adapted from the same script in the izzy-surfschool repository. Run weekly by
 * .github/workflows/update-google-reviews.yml, or by hand:
 *
 *   GOOGLE_MAPS_API_KEY=... npm run reviews:update
 *
 * NOTE ON THE PLACE: the listing is still named "LAMPAK-LAMPAK LOMBOK TOUR AND
 * TRAVEL" on Google. The place ID is pinned below (DEFAULT_PLACE_ID) so the
 * lookup never depends on the name: a text search previously matched a
 * different company ("Lombok Lalu Travel") and published their reviews.
 * Override with the GOOGLE_PLACE_ID env var / repo variable if the listing
 * is ever recreated.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
// Pinned listing: Yumna Tour and Travel (formerly LAMPAK-LAMPAK LOMBOK TOUR AND
// TRAVEL), Ombe Baru, Kediri, Lombok.
const DEFAULT_PLACE_ID = 'ChIJeU9y9kK5zS0RXeKl5IS1_E8';
const configuredPlaceId = process.env.GOOGLE_PLACE_ID || DEFAULT_PLACE_ID;
const query =
  process.env.GOOGLE_PLACE_QUERY ||
  'Yumna Tour and Travel Lombok Ombe Baru Kediri';
const outputPath = process.env.GOOGLE_REVIEWS_OUTPUT || 'src/data/google-reviews.json';

if (!apiKey) {
  throw new Error('Missing GOOGLE_MAPS_API_KEY.');
}

const fields = ['id', 'displayName', 'rating', 'userRatingCount', 'googleMapsUri', 'reviews'].join(
  ','
);

const requestJson = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': options.fieldMask || fields,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Google Places request failed: ${response.status} ${body}`);
  }

  return response.json();
};

const findPlaceId = async () => {
  if (configuredPlaceId) return configuredPlaceId;

  const data = await requestJson('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    fieldMask: 'places.id,places.displayName,places.googleMapsUri',
    body: JSON.stringify({ textQuery: query, languageCode: 'en', maxResultCount: 1 }),
  });

  const place = data.places?.[0];
  if (!place?.id) {
    throw new Error(`No Google place found for query: ${query}`);
  }

  return place.id;
};

const normalizeReview = (review) => ({
  author: review?.authorAttribution?.displayName || 'Google reviewer',
  rating: review?.rating || 5,
  date: review?.relativePublishTimeDescription || '',
  text: review?.text?.text || review?.originalText?.text || '',
  uri: review?.authorAttribution?.uri || '',
});

const placeId = await findPlaceId();
const place = await requestJson(
  `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`
);

// Guard: never publish another company's reviews.
const displayName = place.displayName?.text || '';
if (displayName && !/lampak|yumna/i.test(displayName)) {
  throw new Error(
    `Refusing to write reviews: place "${displayName}" (${placeId}) does not look like our listing. ` +
      'Set GOOGLE_PLACE_ID to the correct place if the listing was renamed.'
  );
}

const reviews = (place.reviews || [])
  .map(normalizeReview)
  .filter((review) => review.text)
  .slice(0, 6);

// Unlike the surf version this does not throw when there are no review texts:
// the rating and review count are worth publishing on their own, and a listing
// can legitimately have ratings without written reviews.
const payload = {
  source: 'Google Maps',
  placeId,
  googleMapsUri:
    place.googleMapsUri ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
  rating: place.rating || 5,
  reviewCount: place.userRatingCount || reviews.length,
  updatedAt: new Date().toISOString(),
  reviews,
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

console.log(
  `Updated ${outputPath}: rating ${payload.rating} from ${payload.reviewCount} ratings, ` +
    `${reviews.length} review texts (${place.displayName?.text || placeId}).`
);
