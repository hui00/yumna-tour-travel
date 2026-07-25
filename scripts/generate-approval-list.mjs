/**
 * Generates LAUNCH-APPROVAL.md from the `approval` arrays in the service data.
 *
 * This is the gate described in
 * docs/adr/0003-unverified-content-is-draft-until-approved.md. The site does not
 * go live until Muhajir has been through this list. Adding a service adds its
 * questions here automatically — run `npm run approval` after editing content.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const { services } = await import(
  pathToFileURL(path.join(ROOT, 'src', 'data', 'services.js')).href
);

const blocking = [
  {
    title: 'Rename the Google listing',
    body: 'The business is listed on Google as "LAMPAK-LAMPAK LOMBOK TOUR AND TRAVEL". The site says Yumna Tour and Travel. Muhajir owns the listing and can rename it; the 5.0 rating and all six reviews survive a rename. Until this is done, customers arriving from Google Maps land on a site with a different name.',
  },
  {
    title: 'Add the website to the Google listing',
    body: 'The listing has no website set — the "Add website" prompt is still empty. Google Maps is currently the only way anyone finds this business, so the site is close to invisible until the URL is filled in.',
  },
  {
    title: 'Add the GOOGLE_MAPS_API_KEY repository secret',
    body: 'Without it, the weekly review workflow cannot run and the reviews section stays empty. Optionally also set the GOOGLE_PLACE_ID repository variable so the lookup does not depend on the listing name.',
  },
  {
    title: 'Confirm the five photographs may be published',
    body: 'In use: the hero (woman and child by a pool at sunset, seen from behind), the about section (village at sunrise below Rinjani), Daily Tours (south coast bay), Ferry & Fast Boat (rocky shore with boats), Villa & Hotel Booking (view from a balcony). No individual is identifiable in any of them — deliberately so: publishing a recognisable person needs their consent, and for a child their guardian\'s. All five still need to be images Yumna is allowed to use commercially.',
  },
  {
    title: 'A photograph for the Islamic Heritage Tour is the biggest gap',
    body: 'This is the page that differentiates Yumna from every other operator on Lombok, and it currently shows a geometric pattern. It needs a photograph of an actual mosque — the Islamic Center in Mataram, or one of the historic village mosques. Higher priority than the other missing images.',
  },
  {
    title: 'Replace the remaining placeholder artwork',
    body: 'Seven service pages still render a geometric pattern: airport transfer, Islamic heritage, scooter and car rental, Rinjani trekking, jet ski, multi-day packages, tailor-made itineraries. Real photos from Muhajir would beat stock in every respect — he has years of them. Adding one is a single entry in `images.services` in src/data/site.js.',
  },
  {
    title: 'Confirm the contact channel',
    body: 'The site offers WhatsApp only, on +62 819-1721-6873. No email address appears anywhere. Confirm that is intended and that the number is correct.',
  },
];

const lines = [
  '# Launch approval list',
  '',
  '**The site does not go live until this list has been through Muhajir.**',
  '',
  'The service copy on this site was drafted against Lombok market norms, not',
  'dictated by the operator. Everything below is an assumption that has to be',
  'confirmed, corrected or removed before publishing. See',
  '`docs/adr/0003-unverified-content-is-draft-until-approved.md` for why.',
  '',
  'There are no prices anywhere on the site — every service quotes on request.',
  'That is deliberate and does not need approval.',
  '',
  '> This file is generated. Edit the `approval` arrays in',
  '> `src/data/services.js` and run `npm run approval`.',
  '',
  '## Blocking — not about the copy',
  '',
];

for (const item of blocking) {
  lines.push(`- [ ] **${item.title}**`, `      ${item.body}`, '');
}

lines.push('## Per service', '');

for (const service of [...services].sort((a, b) => a.order - b.order)) {
  lines.push(`### ${service.en.name}`, '');
  lines.push(`\`src/data/services.js\` → \`${service.slug}\``, '');
  for (const question of service.approval) {
    lines.push(`- [ ] ${question}`);
  }
  lines.push('');
}

const total = services.reduce((sum, s) => sum + s.approval.length, 0) + blocking.length;
lines.push('---', '', `${total} items in total.`, '');

await writeFile(path.join(ROOT, 'LAUNCH-APPROVAL.md'), lines.join('\n'));
console.log(`Wrote LAUNCH-APPROVAL.md with ${total} items.`);
