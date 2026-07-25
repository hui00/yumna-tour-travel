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
    body: 'Rinjani Trekking (village at sunrise below the mountain), Daily Tours (south coast bay), Ferry & Fast Boat (rocky shore with boats), Villa & Hotel Booking (view from a balcony), Scooter & Car Rental (rental scooter with a surfboard rack, licence plate pixelated). No individual is identifiable in any of these. All still need to be images Yumna is allowed to use commercially.',
  },
  {
    title: 'Do not strip the credit under the Islamic Heritage Tour or Airport Transfer photos',
    body: 'Two images are not Yumna\'s own: "Islamic Center Mataram, Lombok" by Si Gam (CC BY 4.0) and "Lombok International Airport" by Ezagren (Wikimedia\'s Attribution licence). Both licences permit commercial use and cost nothing, but only as long as the credit line stays visible next to each image: title, author, licence, and the note that it was resized. Removing either caption turns a legal use into an infringement. Replacing either with a photo of Muhajir\'s own would remove the obligation entirely — the airport photo is also a decade old (2012) and shows dated ground equipment, so a current photo of the actual arrivals area would be a real improvement, not just a licensing nicety.',
  },
  {
    title: 'Replace the remaining placeholder artwork',
    body: 'Every service page now has a photo. Two of the last three are landscape stock (Unsplash, no attribution required) standing in for a place rather than the actual service: Multi-Day Packages and Tailor-Made Itinerary show Rinjani-area valley views because those pages are about the whole island, not one fixed spot. The Jet Ski Rental photo is the weakest fit — it shows Gili boats, not a jet ski at all, because no such photo exists yet. Replace it first when Muhajir has one.',
  },
  {
    title: 'Confirm the "For Muslim guests" note on every service page',
    body: 'Each service page ends with a specific promise rather than a generic one — that the driver waits at the airport musholla, that Friday midday traffic is planned around, that a sailing overlapping a prayer time is flagged before booking, that the kiblat marking and pool-bar situation are checked before recommending a hotel, that a quieter beach and a quieter hour can be arranged, that Friday and fasting days shape a multi-day route. Each is a commitment Muhajir has to be willing to keep.',
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
