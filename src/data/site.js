/**
 * Brand-level facts and every string that is not service copy.
 *
 * Naming follows CONTEXT.md: the business is "Yumna Tour and Travel". The
 * Google listing name "Lampak-Lampak" is deliberately absent — see the glossary.
 */

export const LANGS = ['en', 'id'];
export const DEFAULT_LANG = 'en';

export const site = {
  name: 'Yumna Tour and Travel',
  shortName: 'Yumna',
  // Digits only, for wa.me links.
  whatsapp: '6281917216873',
  phoneDisplay: '+62 819-1721-6873',
  contactPerson: 'Muhajir',
  address: {
    street: 'Ombe Baru, Kediri',
    region: 'West Lombok Regency, West Nusa Tenggara',
    postalCode: '83362',
    country: 'Indonesia',
  },
  // Set once the repo is renamed and Pages is live. `origin` plus the paths
  // from src/lib/urls.js make up every absolute URL on the site.
  origin: 'https://hui00.github.io',
  googleMapsUri:
    'https://www.google.com/maps/search/?api=1&query=Lampak-Lampak+Lombok+Tour+and+Travel+Ombe+Baru+Kediri',
};

/**
 * Real photographs. Slots without an entry here fall back to the geometric
 * pattern placeholder — see LAUNCH-APPROVAL.md.
 *
 * Paths are root-relative; Vite prepends the base path. `services` is keyed by
 * service slug, so adding a photo for a service is a one-line change.
 */
export const images = {
  hero: {
    src: '/img/hero-sunset.jpg',
    alt: {
      en: 'A woman in a headscarf and a child sitting by a pool at sunset, looking out over the sea on Lombok.',
      id: 'Seorang perempuan berkerudung dan seorang anak duduk di tepi kolam saat matahari terbenam, memandang laut di Lombok.',
    },
  },
  about: {
    src: '/img/lombok-village-sunrise.jpg',
    alt: {
      en: 'A Lombok village at sunrise, mosque domes among the rooftops and Mount Rinjani rising through the cloud behind it.',
      id: 'Sebuah desa di Lombok saat matahari terbit, kubah masjid di antara atap rumah dan Gunung Rinjani menjulang di balik awan.',
    },
  },
  // Keyed by service slug. Services without an entry fall back to the
  // geometric placeholder, so adding a photo is a single entry here.
  services: {
    'daily-tours': {
      src: '/img/south-coast-bay.jpg',
      alt: {
        en: 'A bay on the south coast of Lombok seen from a headland, reef visible through clear water and green hills beyond.',
        id: 'Teluk di pesisir selatan Lombok dilihat dari tanjung, terumbu tampak melalui air jernih dengan perbukitan hijau di kejauhan.',
      },
    },
    'ferry-fast-boat-tickets': {
      src: '/img/south-coast-boats.jpg',
      alt: {
        en: 'Turquoise water over a rocky shore on Lombok, with boats moored off a green headland in the distance.',
        id: 'Air biru kehijauan di atas pantai berbatu di Lombok, dengan perahu bersandar di dekat tanjung hijau di kejauhan.',
      },
    },
    'scooter-car-rental': {
      // Licence plate pixelated before publishing.
      src: '/img/scooter-surf-rack.jpg',
      alt: {
        en: 'A rental scooter with a surfboard strapped to a side rack, parked on a paved street on Lombok.',
        id: 'Motor sewaan dengan papan selancar terpasang di rak samping, parkir di jalan berpaving di Lombok.',
      },
    },
    // The only image on the site that is not Yumna's own. CC BY 4.0 requires
    // creator, title, source, licence and a note that it was changed — all of
    // which the `credit` block renders next to the image. Do not drop it.
    'islamic-heritage-tour': {
      src: '/img/islamic-center-mataram.jpg',
      alt: {
        en: 'The Islamic Center in Mataram, Lombok: a patterned dome flanked by tall minarets against a cloudy sky.',
        id: 'Islamic Center di Mataram, Lombok: kubah bermotif diapit menara tinggi dengan langit berawan.',
      },
      credit: {
        title: 'Islamic Center Mataram, Lombok',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Islamic_Center_Mataram,_Lombok.jpg',
        author: 'Si Gam',
        authorUrl: 'https://commons.wikimedia.org/wiki/User:Si_Gam',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
        modified: 'resized',
      },
    },
    'villa-hotel-booking': {
      src: '/img/valley-sea-view.jpg',
      alt: {
        en: 'The view from a balcony on Lombok across coconut palms and rice fields to the sea and the hills.',
        id: 'Pemandangan dari balkon di Lombok melintasi pohon kelapa dan sawah menuju laut dan perbukitan.',
      },
    },
  },
};

export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const ui = {
  en: {
    langName: 'English',
    otherLangName: 'Bahasa Indonesia',
    skipToContent: 'Skip to content',
    nav: {
      services: 'Services',
      muslimFriendly: 'For Muslim guests',
      about: 'About',
      reviews: 'Reviews',
      contact: 'Contact',
      menu: 'Menu',
    },
    cta: {
      primary: 'Message us on WhatsApp',
      short: 'WhatsApp',
      ask: 'Ask about this service',
      allServices: 'All services',
      back: 'Back to all services',
      home: 'Home',
    },
    price: {
      label: 'Price',
      onRequest: 'On request',
      note: 'Prices depend on group size, season and route. Send us your dates on WhatsApp and you get a fixed quote before you book — no surprises on the day.',
    },
    hero: {
      eyebrow: 'Lombok, Indonesia',
      title: 'Travel with trust.',
      lead: '“Yumna” means the right hand — someone you can rely on. We help you explore the beauty of Lombok with comfort, honesty and care, with special attention to the needs of Muslim travellers.',
      pointA: 'Halal food and prayer stops planned into every tour',
      pointB: 'One person you deal with, start to finish',
      pointC: 'Fixed price agreed before you travel',
    },
    trust: {
      ratingLabel: 'on Google',
      reviewsLabel: 'reviews',
      localLabel: 'Based in West Lombok',
      localValue: 'Local operator, not a booking platform',
      contactLabel: 'You talk to',
      contactValue: 'Muhajir — directly, on WhatsApp',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services',
      lead: 'Everything you need for a trip to Lombok, arranged by one person who lives here.',
      more: 'Read more',
    },
    muslim: {
      eyebrow: 'For our Muslim guests',
      title: 'Travel without the compromises',
      lead: 'Most tours on Lombok are built around a schedule that quietly assumes you do not pray, and a lunch stop that quietly assumes you eat anything. Ours are not. This is what that means in practice.',
      items: [
        {
          title: 'Halal dining',
          body: 'We eat where we would take our own family. Restaurants are chosen for halal kitchens, and we tell you honestly when a place on a route is not suitable rather than hoping you do not notice.',
        },
        {
          title: 'Prayer stops in the schedule',
          body: 'Prayer times are part of the itinerary, not an interruption to it. Tours are timed so that Dhuhr and Asr fall near a mosque, and the driver plans around them without being asked.',
        },
        {
          title: 'Mosques along the way',
          body: 'We know where the mosques are on every route we drive, including the small village ones that are not on the map. If you need to stop between planned stops, you stop.',
        },
        {
          title: 'Muslim-friendly accommodation',
          body: 'When we help you book a villa or hotel, we check the things that matter: prayer direction in the room, halal breakfast, and how present alcohol is on the property.',
        },
      ],
      note: 'We arrange these things ourselves — we are not a certification body, and we do not claim to be. If something on a route is not suitable, we say so before you book.',
    },
    about: {
      eyebrow: 'Who you are travelling with',
      title: 'Yumna is Muhajir',
      body: [
        'Yumna Tour and Travel is a small operation in Ombe Baru, Kediri, in West Lombok. Small enough that the person answering your messages is the same person planning your route and, often, the person driving you.',
        'That is the whole idea. There is no call centre, no ticket number, no handover between departments. You have one contact from the first question to the last drop-off, and he is accountable for all of it.',
        'The name is deliberate. “Yumna” means the right hand — the one you rely on, the one you extend in greeting and in agreement. It is a high standard to name yourself after, and it is meant to be.',
      ],
    },
    reviews: {
      eyebrow: 'What guests say',
      title: 'Reviews',
      lead: 'Independently posted on Google, not collected by us.',
      viewOnGoogle: 'Read the reviews on Google',
      empty:
        'The review feed is not connected yet. Once the Google Places API key is set, guest reviews appear here automatically.',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: 'Tell us your dates',
      lead: 'WhatsApp is the fastest way to reach us and the one we check all day. Send your dates, how many of you there are and what you would like to see — you get a plan and a fixed price back.',
      responseNote: 'Messages are usually answered the same day, Lombok time (GMT+8).',
      addressLabel: 'Where we are',
      phoneLabel: 'WhatsApp',
    },
    footer: {
      tagline: 'Tours, transport and trekking on Lombok — with halal food, prayer stops and family-friendly service.',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },
    serviceMeta: {
      highlights: 'What is included',
      details: 'Good to know',
      muslimNote: 'For Muslim guests',
      otherServices: 'Other services',
    },
    notFound: {
      title: 'Page not found',
      body: 'That page does not exist. It may have moved, or the link may be mistyped.',
    },
  },

  id: {
    langName: 'Bahasa Indonesia',
    otherLangName: 'English',
    skipToContent: 'Lompat ke konten',
    nav: {
      services: 'Layanan',
      muslimFriendly: 'Untuk tamu Muslim',
      about: 'Tentang kami',
      reviews: 'Ulasan',
      contact: 'Kontak',
      menu: 'Menu',
    },
    cta: {
      primary: 'Hubungi kami di WhatsApp',
      short: 'WhatsApp',
      ask: 'Tanya tentang layanan ini',
      allServices: 'Semua layanan',
      back: 'Kembali ke semua layanan',
      home: 'Beranda',
    },
    price: {
      label: 'Harga',
      onRequest: 'Sesuai permintaan',
      note: 'Harga tergantung jumlah peserta, musim dan rute. Kirim tanggal Anda lewat WhatsApp dan Anda akan menerima harga pasti sebelum memesan — tanpa kejutan di hari H.',
    },
    hero: {
      eyebrow: 'Lombok, Indonesia',
      title: 'Perjalanan yang bisa dipercaya.',
      lead: '“Yumna” berarti tangan kanan — orang yang bisa Anda andalkan. Kami membantu Anda menikmati keindahan Lombok dengan nyaman, jujur dan penuh perhatian, khususnya bagi kebutuhan wisatawan Muslim.',
      pointA: 'Makanan halal dan waktu salat sudah masuk dalam setiap tur',
      pointB: 'Satu orang yang mengurus Anda dari awal sampai akhir',
      pointC: 'Harga disepakati sebelum perjalanan dimulai',
    },
    trust: {
      ratingLabel: 'di Google',
      reviewsLabel: 'ulasan',
      localLabel: 'Berbasis di Lombok Barat',
      localValue: 'Operator lokal, bukan platform pemesanan',
      contactLabel: 'Anda berbicara dengan',
      contactValue: 'Muhajir — langsung, lewat WhatsApp',
    },
    services: {
      eyebrow: 'Yang kami kerjakan',
      title: 'Layanan',
      lead: 'Semua kebutuhan perjalanan Anda di Lombok, diurus oleh satu orang yang tinggal di sini.',
      more: 'Selengkapnya',
    },
    muslim: {
      eyebrow: 'Untuk tamu Muslim kami',
      title: 'Berwisata tanpa kompromi',
      lead: 'Kebanyakan tur di Lombok disusun dengan jadwal yang diam-diam mengandaikan Anda tidak salat, dan makan siang yang mengandaikan Anda makan apa saja. Tur kami tidak begitu. Inilah artinya secara nyata.',
      items: [
        {
          title: 'Makanan halal',
          body: 'Kami makan di tempat yang juga kami pilih untuk keluarga sendiri. Rumah makan dipilih karena dapurnya halal, dan kami berterus terang bila ada tempat di rute yang kurang sesuai.',
        },
        {
          title: 'Waktu salat masuk jadwal',
          body: 'Waktu salat adalah bagian dari itinerary, bukan gangguan terhadapnya. Tur diatur agar Zuhur dan Asar jatuh di dekat masjid, dan sopir menyesuaikan tanpa perlu diminta.',
        },
        {
          title: 'Masjid di sepanjang rute',
          body: 'Kami tahu letak masjid di setiap rute yang kami lalui, termasuk masjid kampung yang tidak ada di peta. Bila Anda perlu berhenti di luar jadwal, kita berhenti.',
        },
        {
          title: 'Penginapan ramah Muslim',
          body: 'Saat membantu memesan vila atau hotel, kami memeriksa hal yang penting: arah kiblat di kamar, sarapan halal, dan seberapa menonjol alkohol di properti tersebut.',
        },
      ],
      note: 'Semua ini kami atur sendiri — kami bukan lembaga sertifikasi dan tidak mengaku demikian. Bila ada bagian rute yang kurang sesuai, kami sampaikan sebelum Anda memesan.',
    },
    about: {
      eyebrow: 'Dengan siapa Anda berwisata',
      title: 'Yumna adalah Muhajir',
      body: [
        'Yumna Tour and Travel adalah usaha kecil di Ombe Baru, Kediri, Lombok Barat. Cukup kecil sehingga orang yang membalas pesan Anda adalah orang yang sama yang menyusun rute Anda dan, sering kali, yang mengantar Anda.',
        'Justru itu maksudnya. Tidak ada call center, tidak ada nomor tiket, tidak ada operan antar bagian. Satu kontak dari pertanyaan pertama sampai antar terakhir, dan dia bertanggung jawab atas semuanya.',
        'Namanya dipilih dengan sengaja. “Yumna” berarti tangan kanan — tangan yang diandalkan, yang diulurkan untuk menyapa dan untuk bersepakat. Itu standar yang tinggi untuk dijadikan nama, dan memang disengaja.',
      ],
    },
    reviews: {
      eyebrow: 'Kata tamu kami',
      title: 'Ulasan',
      lead: 'Ditulis langsung di Google, bukan kami yang mengumpulkan.',
      viewOnGoogle: 'Baca ulasan di Google',
      empty:
        'Ulasan belum terhubung. Setelah kunci Google Places API dipasang, ulasan tamu muncul di sini secara otomatis.',
    },
    contact: {
      eyebrow: 'Hubungi kami',
      title: 'Kirim tanggal Anda',
      lead: 'WhatsApp adalah cara tercepat menghubungi kami dan yang kami pantau sepanjang hari. Kirim tanggal, jumlah orang dan tempat yang ingin Anda kunjungi — Anda akan menerima rencana dan harga pasti.',
      responseNote: 'Pesan biasanya dibalas di hari yang sama, waktu Lombok (GMT+8).',
      addressLabel: 'Lokasi kami',
      phoneLabel: 'WhatsApp',
    },
    footer: {
      tagline: 'Tur, transportasi dan pendakian di Lombok — dengan makanan halal, waktu salat dan layanan ramah keluarga.',
      servicesTitle: 'Layanan',
      contactTitle: 'Kontak',
      rights: 'Seluruh hak cipta dilindungi.',
    },
    serviceMeta: {
      highlights: 'Yang termasuk',
      details: 'Perlu diketahui',
      muslimNote: 'Untuk tamu Muslim',
      otherServices: 'Layanan lainnya',
    },
    notFound: {
      title: 'Halaman tidak ditemukan',
      body: 'Halaman itu tidak ada. Mungkin sudah dipindahkan, atau tautannya salah ketik.',
    },
  },
};

export const homeSeo = {
  en: {
    title: 'Yumna Tour and Travel — Muslim-Friendly Tours & Transport on Lombok',
    description:
      'Halal travel on Lombok: airport transfers, Sasak and waterfall tours, Gili fast boats, car and scooter rental, Rinjani trekking. Halal food and prayer stops planned in. Message Muhajir on WhatsApp.',
  },
  id: {
    title: 'Yumna Tour and Travel — Tur & Transportasi Ramah Muslim di Lombok',
    description:
      'Wisata halal di Lombok: transfer bandara, tur Sasak dan air terjun, fast boat Gili, sewa mobil dan motor, pendakian Rinjani. Makanan halal dan waktu salat sudah diatur. Hubungi Muhajir di WhatsApp.',
  },
};
