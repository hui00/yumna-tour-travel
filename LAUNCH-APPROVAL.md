# Launch approval list

**The site does not go live until this list has been through Muhajir.**

The service copy on this site was drafted against Lombok market norms, not
dictated by the operator. Everything below is an assumption that has to be
confirmed, corrected or removed before publishing. See
`docs/adr/0003-unverified-content-is-draft-until-approved.md` for why.

There are no prices anywhere on the site — every service quotes on request.
That is deliberate and does not need approval.

> This file is generated. Edit the `approval` arrays in
> `src/data/services.js` and run `npm run approval`.

## Blocking — not about the copy

- [ ] **Rename the Google listing**
      The business is listed on Google as "LAMPAK-LAMPAK LOMBOK TOUR AND TRAVEL". The site says Yumna Tour and Travel. Muhajir owns the listing and can rename it; the 5.0 rating and all six reviews survive a rename. Until this is done, customers arriving from Google Maps land on a site with a different name.

- [ ] **Add the website to the Google listing**
      The listing has no website set — the "Add website" prompt is still empty. Google Maps is currently the only way anyone finds this business, so the site is close to invisible until the URL is filled in.

- [ ] **Add the GOOGLE_MAPS_API_KEY repository secret**
      Without it, the weekly review workflow cannot run and the reviews section stays empty. Optionally also set the GOOGLE_PLACE_ID repository variable so the lookup does not depend on the listing name.

- [ ] **Confirm the five photographs may be published**
      In use: the hero (woman and child by a pool at sunset, seen from behind), the about section (village at sunrise below Rinjani), Daily Tours (south coast bay), Ferry & Fast Boat (rocky shore with boats), Villa & Hotel Booking (view from a balcony). No individual is identifiable in any of them — deliberately so: publishing a recognisable person needs their consent, and for a child their guardian's. All five still need to be images Yumna is allowed to use commercially.

- [ ] **A photograph for the Islamic Heritage Tour is the biggest gap**
      This is the page that differentiates Yumna from every other operator on Lombok, and it currently shows a geometric pattern. It needs a photograph of an actual mosque — the Islamic Center in Mataram, or one of the historic village mosques. Higher priority than the other missing images.

- [ ] **Replace the remaining placeholder artwork**
      Seven service pages still render a geometric pattern: airport transfer, Islamic heritage, scooter and car rental, Rinjani trekking, jet ski, multi-day packages, tailor-made itineraries. Real photos from Muhajir would beat stock in every respect — he has years of them. Adding one is a single entry in `images.services` in src/data/site.js.

- [ ] **Confirm the "For Muslim guests" note on every service page**
      Each service page ends with a specific promise rather than a generic one — that the driver waits at the airport musholla, that Friday midday traffic is planned around, that a sailing overlapping a prayer time is flagged before booking, that the kiblat marking and pool-bar situation are checked before recommending a hotel, that a quieter beach and a quieter hour can be arranged, that Friday and fasting days shape a multi-day route. Each is a commitment Muhajir has to be willing to keep.

- [ ] **Confirm the contact channel**
      The site offers WhatsApp only, on +62 819-1721-6873. No email address appears anywhere. Confirm that is intended and that the number is correct.

## Per service

### Airport & Harbour Transfer

`src/data/services.js` → `airport-harbour-transfer`

- [ ] Which airports and harbours are covered? (Lombok International Airport / Praya, Lembar, Bangsal, Kayangan)
- [ ] Which vehicle types and seat counts are available for transfers?
- [ ] Are child seats available on request?
- [ ] Does the driver track delayed flights, and how long does he wait?
- [ ] Is a 24-hour pick-up (very early / very late flights) actually possible?

### Daily Tours

`src/data/services.js` → `daily-tours`

- [ ] Confirm the four daily tours offered: Sasak cultural, waterfall, city, Gili islands.
- [ ] Confirm the villages and sites visited on the Sasak cultural tour (Sade? Ende? Sukarara? Banyumulek?).
- [ ] Which waterfalls are visited — Sendang Gile and Tiu Kelep, or others?
- [ ] What does the city tour cover in Mataram — Islamic Center, Mayura, Narmada, markets?
- [ ] Are these full-day or half-day tours, and what are typical start and finish times?
- [ ] Are entrance fees and lunch included in the quote, or paid separately?

### Islamic Heritage Tour

`src/data/services.js` → `islamic-heritage-tour`

- [ ] NEW SERVICE — confirm Muhajir wants to offer this at all before anything else.
- [ ] Which mosques and sites would the route actually cover? (Islamic Center NTB in Mataram, Masjid Kuno Bayan Beleq, village mosques)
- [ ] Is the historic Bayan mosque reachable and open to visitors as a day trip from Mataram?
- [ ] Full day or half day?
- [ ] Is a guide who can explain the history available, or is this driver-only?

### Scooter & Car Rental

`src/data/services.js` → `scooter-car-rental`

- [ ] Confirm scooter sizes offered (small / medium / large — which cc?).
- [ ] Confirm car options: 4-seat, 6–7 seat, minibus. With and without driver?
- [ ] Is a helmet included with every scooter?
- [ ] What documents does the renter need — international driving permit, passport as deposit?
- [ ] Is delivery to the guest’s accommodation possible?
- [ ] Is there insurance, and what happens in case of damage?

### Ferry & Fast Boat Tickets

`src/data/services.js` → `ferry-fast-boat-tickets`

- [ ] Which fast boat operators does Yumna book with, Bali ⇄ Lombok?
- [ ] Which routes exactly — Padang Bai, Serangan, Amed? To Bangsal, Teluk Nare or the Gilis directly?
- [ ] Is the slow public ferry (Lembar ⇄ Padang Bai) also booked, or only fast boats?
- [ ] Is hotel-to-harbour transport included in a ticket booking or quoted separately?
- [ ] How far in advance should guests book in high season?

### Villa & Hotel Booking

`src/data/services.js` → `villa-hotel-booking`

- [ ] How does the booking actually work — does Yumna hold rooms, or negotiate with properties directly?
- [ ] Is the claim of better-than-online prices something we can state? If so, on which kinds of property?
- [ ] Which areas are covered — Senggigi, Kuta, Mataram, Gili, Sembalun?
- [ ] What exactly is checked for Muslim-friendly accommodation, and can it be verified per property?
- [ ] Is payment made to Yumna or directly to the property?

### Rinjani Trekking

`src/data/services.js` → `rinjani-trekking`

- [ ] SAFETY-CRITICAL — nothing on this page goes live unconfirmed.
- [ ] Confirm the packages: 2 days / 1 night and 3 days / 2 nights. Which routes — Sembalun, Senaru, Torean?
- [ ] Which summit or crater rim does each package actually reach?
- [ ] Are national park permits included in the quote?
- [ ] What equipment is provided (tent, sleeping bag, mat, meals) and what must the guest bring?
- [ ] Guide and porter ratio per group?
- [ ] What is the minimum fitness level, and is there an age limit?
- [ ] Confirm the closed season — the park normally closes for part of the rainy season.
- [ ] Is there insurance, and what is the procedure if a trekker cannot continue?

### Multi-Day Packages

`src/data/services.js` → `multi-day-packages`

- [ ] NEW SERVICE — confirm Muhajir wants to sell bundled multi-day packages.
- [ ] Which durations? 3D2N and 4D3N assumed here — correct?
- [ ] What is bundled: transport, tours, accommodation, meals, tickets?
- [ ] Does Yumna book and pay the accommodation, or does the guest?
- [ ] Is there a minimum group size?

### Jet Ski Rental

`src/data/services.js` → `jet-ski-rental`

- [ ] Where is the jet ski available — which beach or operator?
- [ ] Rental by the session, or by the hour?
- [ ] Is an instructor or safety briefing included? Life jacket?
- [ ] Minimum age or licence requirement?
- [ ] Is it available year round, or weather dependent?

### Tailor-Made Itinerary

`src/data/services.js` → `tailor-made-itinerary`

- [ ] NEW SERVICE — confirm Muhajir is willing to plan fully custom itineraries.
- [ ] Is there a charge for the planning itself, or only for the services booked?
- [ ] How much notice is needed for a custom trip?

---

62 items in total.
