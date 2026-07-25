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
    title: 'Confirm the hero photograph may be published',
    body: 'The home page uses one real photograph: a woman in a headscarf and a child by a pool at sunset, both seen from behind. Nobody is identifiable, but it still needs to be an image Yumna is allowed to use commercially. Photographs in which people ARE identifiable need their consent, and for children their guardians\' — which is why none are used.',
  },
  {
    title: 'Replace the remaining placeholder artwork',
    body: 'The about section and all ten service pages render a geometric pattern instead of a photograph. Real photos from Muhajir would beat stock in every respect — he has years of them. Needed: one wide image for the about section and one per service. Adding one is a single entry in `images` in src/data/site.js.',
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
