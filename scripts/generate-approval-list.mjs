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
    body: 'The listing has no website set — the "Add website" prompt is still empty. Google Maps is currently the only way anyone finds this business, so the site is close to invisible until the URL is filled in. Use https://yumnalombok.com — not the github.io address.',
  },
  {
    title: 'Add the GOOGLE_MAPS_API_KEY repository secret',
    body: 'Without it, the weekly review workflow cannot run and the reviews section stays empty. Optionally also set the GOOGLE_PLACE_ID repository variable so the lookup does not depend on the listing name.',
  },
  {
    title: 'CONSENT — the about-section photo shows four identifiable children',
    body: 'The about section now uses a photo of Muhajir laughing in a pool with four children, all clearly recognisable, in swimwear. This was a deliberate decision by the site owner to publish it without prior consent — a crop that removed the children was tried and did not work, since they are physically draped on Muhajir on both sides. Publishing an identifiable minor on a commercial website needs their guardian\'s consent. Get that in writing from all four children\'s parents, or replace the photo with one of Muhajir alone or with adults only, before this page is treated as final. This is the single highest-priority item on this list.',
  },
  {
    title: 'Confirm the remaining photographs may be published',
    body: 'Rinjani Trekking (village at sunrise below the mountain), Daily Tours (waterfall, two people visible but not close up), Islamic Heritage Tour (Islamic Center Mataram), Multi-Day Packages and Tailor-Made Itinerary (Sembalun valley and fields), Airport & Harbour Transfer (coast road), Ferry & Fast Boat (rocky shore with boats), Villa & Hotel Booking (view from a balcony), Scooter & Car Rental (rental scooter with a surfboard rack, licence plate pixelated), Beaches & Water Sports (a wide empty bay on the south coast). All still need to be images Yumna is allowed to use commercially.',
  },
  {
    title: 'Every published photo is now Muhajir\'s own',
    body: 'No stock image is used anywhere on the site, so no credit line appears anywhere. The one Unsplash file still in the repository (public/img/gili-boats.jpg, fransisca-zagita) is unused. If a stock image is ever added under a CC BY or Wikimedia Attribution licence, its credit block has to travel with it.',
  },
  {
    title: 'Replace the remaining placeholder artwork',
    body: 'Every service page now has one of Muhajir\'s own photos. Airport & Harbour Transfer shows the coast road rather than a terminal building; a photo of the actual arrivals pick-up would be better. Beaches & Water Sports shows a south-coast bay; a photo of guests snorkelling or on a board would sell it harder.',
  },
  {
    title: 'Confirm the "For Muslim guests" note on every service page',
    body: 'Each service page ends with a specific promise rather than a generic one — that the driver waits at the airport musholla, that Friday midday traffic is planned around, that a sailing overlapping a prayer time is flagged before booking, that the kiblat marking and pool-bar situation are checked before recommending a hotel, that a quieter beach and a quieter hour can be arranged on a beach day, that Friday and fasting days shape a multi-day route. Each is a commitment Muhajir has to be willing to keep.',
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
