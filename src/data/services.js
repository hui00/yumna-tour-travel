/**
 * The ten services, each of which becomes its own page per language.
 *
 * IMPORTANT — read docs/adr/0003-unverified-content-is-draft-until-approved.md
 * before editing. This copy is drafted against Lombok market norms, not dictated
 * by the operator. Every specific that Muhajir has not confirmed belongs in the
 * service's `approval` array, which generates LAUNCH-APPROVAL.md. There are no
 * prices anywhere: every service quotes on request.
 */

export const services = [
  {
    slug: 'airport-harbour-transfer',
    order: 1,
    pattern: 1,
    approval: [
      'Which airports and harbours are covered? (Lombok International Airport / Praya, Lembar, Bangsal, Kayangan)',
      'Which vehicle types and seat counts are available for transfers?',
      'Are child seats available on request?',
      'Does the driver track delayed flights, and how long does he wait?',
      'Is a 24-hour pick-up (very early / very late flights) actually possible?',
    ],
    en: {
      name: 'Airport & Harbour Transfer',
      tagline: 'Someone waiting for you when you land.',
      summary:
        'Private pick-up and drop-off from the airport and the harbours, at a price agreed before you travel.',
      intro:
        'Arrival is when a trip is most likely to go wrong. A delayed flight, an unfamiliar language, a driver who quoted one price at the kerb and wants another one at the hotel. Yumna meets you inside arrivals with your name on a sign, in a vehicle booked in advance, at a price agreed in advance.',
      highlights: [
        'Meet and greet at arrivals — no hunting for your driver in the car park',
        'Fixed price agreed before you travel, never renegotiated on the day',
        'Lombok International Airport, Lembar harbour and Bangsal harbour',
        'Bottled water, air conditioning and space for real luggage',
        'Onward drop-off anywhere on the island, including Kuta, Senggigi and Mataram',
      ],
      details: [
        {
          title: 'Where we pick up',
          body: 'The airport sits in Praya, in the south of the island, and most hotels are an hour or more from it — long enough that the drive matters. Lembar in the west is the ferry port for Bali; Bangsal in the north-west is where the fast boats to the Gili islands leave. We cover all three, in both directions.',
        },
        {
          title: 'Travelling as a family',
          body: 'Tell us how many of you there are and how much luggage you have, and we send a vehicle that actually fits. Families arriving with small children and a lot of bags are the most common reason a transfer goes badly, and the easiest thing to plan for.',
        },
      ],
      muslimNote:
        'If you land at prayer time, pray — the musholla is inside the terminal and the driver waits without being asked. And after a long flight, say the word and the first stop is a proper halal meal instead of a hotel minibar.',
      whatsapp:
        "Hi Yumna, I'd like to arrange an airport transfer. My flight arrives on [date] at [time], we are [number] people.",
      seo: {
        title: 'Lombok Airport Transfer — Private Pick-Up & Drop-Off | Yumna Tour and Travel',
        description:
          'Private airport and harbour transfers on Lombok. Meet and greet at arrivals, fixed price agreed in advance, Muslim-friendly service. Message Yumna on WhatsApp.',
      },
    },
    id: {
      name: 'Transfer Bandara & Pelabuhan',
      tagline: 'Ada yang menunggu Anda saat mendarat.',
      summary:
        'Antar-jemput pribadi dari bandara dan pelabuhan, dengan harga yang disepakati sebelum berangkat.',
      intro:
        'Kedatangan adalah saat perjalanan paling mudah berantakan. Pesawat terlambat, bahasa yang asing, sopir yang menyebut satu harga di pinggir jalan lalu meminta harga lain di hotel. Yumna menjemput Anda di area kedatangan dengan papan nama, memakai kendaraan yang sudah dipesan, dengan harga yang sudah disepakati.',
      highlights: [
        'Penjemputan langsung di area kedatangan — tidak perlu mencari sopir di parkiran',
        'Harga pasti disepakati sebelum berangkat, tidak berubah di hari H',
        'Bandara Internasional Lombok, Pelabuhan Lembar dan Pelabuhan Bangsal',
        'Air minum, AC, dan ruang muat untuk koper sungguhan',
        'Pengantaran ke seluruh Lombok, termasuk Kuta, Senggigi dan Mataram',
      ],
      details: [
        {
          title: 'Titik penjemputan',
          body: 'Bandara berada di Praya, di selatan pulau, dan sebagian besar hotel berjarak satu jam atau lebih — cukup jauh sehingga perjalanan itu sendiri penting. Lembar di barat adalah pelabuhan feri ke Bali; Bangsal di barat laut adalah titik keberangkatan fast boat ke Gili. Kami melayani ketiganya, pulang dan pergi.',
        },
        {
          title: 'Bepergian bersama keluarga',
          body: 'Beri tahu jumlah orang dan banyaknya bagasi, dan kami kirim kendaraan yang benar-benar muat. Keluarga yang datang dengan anak kecil dan banyak koper adalah penyebab paling umum transfer berjalan buruk — sekaligus yang paling mudah diantisipasi.',
        },
      ],
      muslimNote:
        'Bila Anda mendarat saat waktu salat, salatlah — musala ada di dalam terminal dan sopir menunggu tanpa perlu diminta. Dan setelah penerbangan panjang, bilang saja: pemberhentian pertama bisa berupa makanan halal yang layak, bukan minibar hotel.',
      whatsapp:
        'Halo Yumna, saya ingin memesan transfer bandara. Penerbangan saya tiba tanggal [tanggal] pukul [jam], kami [jumlah] orang.',
      seo: {
        title: 'Transfer Bandara Lombok — Antar Jemput Pribadi | Yumna Tour and Travel',
        description:
          'Antar-jemput bandara dan pelabuhan di Lombok. Penjemputan di area kedatangan, harga pasti di muka, layanan ramah Muslim. Hubungi Yumna via WhatsApp.',
      },
    },
  },

  {
    slug: 'daily-tours',
    order: 2,
    pattern: 2,
    approval: [
      'Confirm the four daily tours offered: Sasak cultural, waterfall, city, Gili islands.',
      'Confirm the villages and sites visited on the Sasak cultural tour (Sade? Ende? Sukarara? Banyumulek?).',
      'Which waterfalls are visited — Sendang Gile and Tiu Kelep, or others?',
      'What does the city tour cover in Mataram — Islamic Center, Mayura, Narmada, markets?',
      'Are these full-day or half-day tours, and what are typical start and finish times?',
      'Are entrance fees and lunch included in the quote, or paid separately?',
    ],
    en: {
      name: 'Daily Tours',
      tagline: 'One day, one driver, one part of the island properly seen.',
      summary:
        'Sasak culture, waterfalls, the city, and the Gili islands — day trips with a driver who knows the roads.',
      intro:
        'A day tour with Yumna is a private car, a driver who grew up here, and a route built around what you actually want to see rather than a fixed circuit run for coach groups. Four routes cover the parts of Lombok most visitors come for, and each can be shortened, lengthened or swapped around on the day.',
      highlights: [
        'Private vehicle — no shared minibus, no strangers, no waiting for other guests',
        'Pick-up and drop-off at your accommodation',
        'A driver who speaks the local language in the villages you visit',
        'Prayer times and a halal lunch stop planned into the route',
        'Flexible: if you want to stay somewhere longer, you stay longer',
      ],
      details: [
        {
          title: 'Sasak cultural tour',
          body: 'The Sasak are the people of Lombok, and their villages are the reason the island feels different from Bali. You see traditional houses and rice barns, hand-weaving on backstrap looms, and pottery worked the way it has been for generations. It is a working village, not a museum — which is exactly what makes it worth the day.',
        },
        {
          title: 'Waterfall tour',
          body: 'The waterfalls sit on Rinjani\'s northern slopes, in rainforest that is noticeably cooler than the coast. The walk in is short but uneven and often wet; sensible shoes matter more than anything else you bring.',
        },
        {
          title: 'City tour',
          body: 'Mataram is where Lombok is a working Indonesian city rather than a holiday coast: markets, mosques, the old royal sites, and food that is a great deal better and cheaper than anything on the tourist strip.',
        },
        {
          title: 'Gili islands tour',
          body: 'A day on the Gilis — white sand, clear water, no cars and no motorbikes. We arrange the boat, the timing and the pick-up on both sides so you are not stranded waiting for a return crossing.',
        },
      ],
      muslimNote:
        'Lombok is a Muslim-majority island, so halal is the default here, not a special request. What we add is judgement: the warungs locals actually queue at, ayam taliwang made the way it should be, and honest advice when a tourist restaurant is better skipped.',
      whatsapp:
        "Hi Yumna, I'm interested in a day tour on [date]. We are [number] people. We'd like to see [Sasak villages / waterfalls / the city / the Gili islands].",
      seo: {
        title: 'Lombok Day Tours — Sasak Villages, Waterfalls, Gili Islands | Yumna Tour and Travel',
        description:
          'Private day tours on Lombok with a local driver: Sasak cultural tour, waterfall tour, Mataram city tour and Gili islands. Halal lunch and prayer stops planned in.',
      },
    },
    id: {
      name: 'Tur Harian',
      tagline: 'Satu hari, satu sopir, satu bagian pulau yang benar-benar dinikmati.',
      summary:
        'Budaya Sasak, air terjun, kota, dan Gili — tur sehari bersama sopir yang hafal jalannya.',
      intro:
        'Tur harian bersama Yumna berarti mobil pribadi, sopir yang tumbuh di sini, dan rute yang disusun sesuai keinginan Anda — bukan lingkaran tetap untuk rombongan bus. Empat rute mencakup bagian Lombok yang paling dicari, dan masing-masing bisa dipersingkat, diperpanjang atau ditukar di hari itu juga.',
      highlights: [
        'Kendaraan pribadi — bukan minibus gabungan, tanpa menunggu tamu lain',
        'Penjemputan dan pengantaran di penginapan Anda',
        'Sopir yang berbicara bahasa setempat di desa yang Anda kunjungi',
        'Waktu salat dan makan siang halal sudah masuk rencana rute',
        'Fleksibel: bila ingin berlama-lama di satu tempat, silakan',
      ],
      details: [
        {
          title: 'Tur budaya Sasak',
          body: 'Suku Sasak adalah penduduk asli Lombok, dan desa merekalah alasan pulau ini terasa berbeda dari Bali. Anda melihat rumah adat dan lumbung, tenun tangan dengan alat gedogan, serta gerabah yang dikerjakan turun-temurun. Ini desa yang hidup, bukan museum — justru itu yang membuatnya layak dikunjungi.',
        },
        {
          title: 'Tur air terjun',
          body: 'Air terjunnya berada di lereng utara Rinjani, di hutan yang jauh lebih sejuk daripada pesisir. Jalan masuknya pendek tetapi tidak rata dan sering basah; alas kaki yang tepat lebih penting daripada apa pun yang Anda bawa.',
        },
        {
          title: 'Tur kota',
          body: 'Mataram memperlihatkan Lombok sebagai kota Indonesia yang bekerja, bukan sekadar pesisir wisata: pasar, masjid, situs kerajaan lama, dan makanan yang jauh lebih enak serta murah dibanding kawasan turis.',
        },
        {
          title: 'Tur Gili',
          body: 'Sehari di Gili — pasir putih, air jernih, tanpa mobil dan tanpa motor. Kami mengatur perahu, jadwal dan penjemputan di kedua sisi agar Anda tidak terlantar menunggu penyeberangan pulang.',
        },
      ],
      muslimNote:
        'Lombok adalah pulau berpenduduk mayoritas Muslim, jadi halal di sini adalah hal yang lumrah, bukan permintaan khusus. Yang kami tambahkan adalah pertimbangan: warung yang benar-benar diantre warga lokal, ayam taliwang yang dimasak semestinya, dan saran jujur bila sebuah restoran turis lebih baik dilewati.',
      whatsapp:
        'Halo Yumna, saya tertarik tur harian tanggal [tanggal]. Kami [jumlah] orang. Kami ingin ke [desa Sasak / air terjun / kota / Gili].',
      seo: {
        title: 'Tur Harian Lombok — Desa Sasak, Air Terjun, Gili | Yumna Tour and Travel',
        description:
          'Tur harian pribadi di Lombok bersama sopir lokal: tur budaya Sasak, air terjun, kota Mataram dan Gili. Makan siang halal dan waktu salat sudah diatur.',
      },
    },
  },

  {
    slug: 'islamic-heritage-tour',
    order: 3,
    pattern: 3,
    approval: [
      'NEW SERVICE — confirm Muhajir wants to offer this at all before anything else.',
      'Which mosques and sites would the route actually cover? (Islamic Center NTB in Mataram, Masjid Kuno Bayan Beleq, village mosques)',
      'Is the historic Bayan mosque reachable and open to visitors as a day trip from Mataram?',
      'Full day or half day?',
      'Is a guide who can explain the history available, or is this driver-only?',
    ],
    en: {
      name: 'Islamic Heritage Tour',
      tagline: 'Lombok is called the island of a thousand mosques. Here is why.',
      summary:
        'A route built around Lombok’s mosques and Islamic history — the modern landmark and the very old ones.',
      intro:
        'Lombok is known across Indonesia as the island of a thousand mosques, and the count is not far off. Islam arrived here centuries ago and layered itself over Sasak tradition rather than replacing it, which is why the island\'s religious architecture ranges from a vast modern landmark in the city to small wooden mosques in the north older than almost anything else standing. No other operator on Lombok offers this as a route. We think it is overdue.',
      highlights: [
        'The Islamic Center in Mataram — the island\'s modern landmark',
        'Historic village mosques in the north, centuries old and still in use',
        'Context on how Islam and Sasak tradition grew together here',
        'Timed so that you pray in the mosques you visit, not just look at them',
        'Suitable for families and for older travellers — little walking',
      ],
      details: [
        {
          title: 'Why this route exists',
          body: 'Most tours treat mosques as a photo stop on the way somewhere else. For a lot of our guests, they are the reason to come. This route takes them seriously: enough time at each, at the right time of day, with someone who can tell you what you are looking at.',
        },
        {
          title: 'What to wear',
          body: 'Modest dress for everyone, and a headscarf for women — bring your own or we can arrange one. Some mosques ask visitors to remove shoes well before the entrance, so slip-on shoes make the day easier.',
        },
      ],
      muslimNote:
        'This is the one tour where the prayer times are the schedule rather than something planned around it. We build the day so that you are at a mosque when the adhan is called.',
      whatsapp:
        "Hi Yumna, I'd like to ask about the Islamic heritage tour for [date]. We are [number] people.",
      seo: {
        title: 'Islamic Heritage Tour Lombok — Mosques & History | Yumna Tour and Travel',
        description:
          'A Muslim-friendly heritage tour of Lombok’s mosques, from the Islamic Center in Mataram to centuries-old village mosques. Timed around prayer, guided by a local.',
      },
    },
    id: {
      name: 'Tur Wisata Religi',
      tagline: 'Lombok disebut pulau seribu masjid. Inilah alasannya.',
      summary:
        'Rute yang disusun mengelilingi masjid dan sejarah Islam di Lombok — yang modern maupun yang tertua.',
      intro:
        'Lombok dikenal di seluruh Indonesia sebagai pulau seribu masjid, dan sebutan itu tidak berlebihan. Islam datang berabad-abad lalu dan berpadu dengan tradisi Sasak alih-alih menggantikannya. Karena itu arsitektur religinya membentang dari landmark modern yang megah di kota sampai masjid kayu kecil di utara yang lebih tua dari hampir semua bangunan lain di pulau ini. Belum ada operator lain di Lombok yang menawarkan ini sebagai satu rute. Menurut kami sudah waktunya.',
      highlights: [
        'Islamic Center di Mataram — landmark modern kebanggaan pulau ini',
        'Masjid kuno di utara, berusia ratusan tahun dan masih dipakai',
        'Penjelasan bagaimana Islam dan tradisi Sasak tumbuh bersama di sini',
        'Waktunya diatur agar Anda salat di masjid yang dikunjungi, bukan sekadar melihat',
        'Cocok untuk keluarga dan tamu lanjut usia — tidak banyak berjalan kaki',
      ],
      details: [
        {
          title: 'Kenapa rute ini ada',
          body: 'Kebanyakan tur menjadikan masjid sekadar tempat berfoto dalam perjalanan ke tempat lain. Bagi banyak tamu kami, justru masjid itulah tujuannya. Rute ini memperlakukannya dengan serius: waktu yang cukup di tiap tempat, pada jam yang tepat, ditemani orang yang bisa menjelaskan.',
        },
        {
          title: 'Pakaian',
          body: 'Pakaian sopan untuk semua, dan kerudung untuk perempuan — bawa sendiri atau kami bantu siapkan. Beberapa masjid meminta pengunjung melepas alas kaki jauh sebelum pintu masuk, jadi sandal atau sepatu yang mudah dilepas sangat membantu.',
        },
      ],
      muslimNote:
        'Inilah satu-satunya tur yang jadwalnya justru mengikuti waktu salat, bukan disusun mengelilinginya. Kami atur harinya agar Anda berada di masjid ketika azan berkumandang.',
      whatsapp:
        'Halo Yumna, saya ingin bertanya tentang tur wisata religi tanggal [tanggal]. Kami [jumlah] orang.',
      seo: {
        title: 'Tur Wisata Religi Lombok — Masjid & Sejarah | Yumna Tour and Travel',
        description:
          'Tur wisata religi di Lombok: Islamic Center Mataram hingga masjid kuno berusia ratusan tahun. Jadwal mengikuti waktu salat, dipandu orang lokal.',
      },
    },
  },

  {
    slug: 'scooter-car-rental',
    order: 4,
    pattern: 4,
    approval: [
      'Confirm scooter sizes offered (small / medium / large — which cc?).',
      'Confirm car options: 4-seat, 6–7 seat, minibus. With and without driver?',
      'Is a helmet included with every scooter?',
      'What documents does the renter need — international driving permit, passport as deposit?',
      'Is delivery to the guest’s accommodation possible?',
      'Is there insurance, and what happens in case of damage?',
    ],
    en: {
      name: 'Scooter & Car Rental',
      tagline: 'Your own wheels, or someone else’s hands on the wheel.',
      summary:
        'Scooters in three sizes, and cars from four seats to a minibus — with or without a driver.',
      intro:
        'Lombok rewards having your own transport. The good beaches are down side roads, the good food is not near the hotels, and the distances are longer than the map suggests. Rent a scooter if you are confident on one, a car if you are not, and a car with a driver if you would rather look out of the window than at the traffic.',
      highlights: [
        'Scooters in small, medium and large — matched to how confident you are',
        'Cars from four seats up to a minibus for a group',
        'With or without a driver, your choice',
        'Delivered to where you are staying',
        'Helmets provided; ask for extras like phone mounts or child seats',
      ],
      details: [
        {
          title: 'With a driver, or without',
          body: 'Driving yourself is cheaper and gives you complete freedom. A driver costs more and gives you something else: he knows which road is closed, where it is safe to leave the car, and what a fair price is at the other end. For a first visit, most guests are happier with a driver.',
        },
        {
          title: 'Before you ride',
          body: 'Traffic here follows its own rhythm and the roads outside the towns are unlit at night. If you have not ridden a scooter before, a Lombok holiday is not the place to learn — take the car. We would rather talk you out of a rental than visit you in hospital.',
        },
      ],
      muslimNote:
        'One thing worth knowing if you are driving yourself: on Friday around midday the roads near any larger mosque fill up and then empty again. Nothing to worry about — just do not plan a tight schedule through a town at that hour.',
      whatsapp:
        "Hi Yumna, I'd like to rent a [scooter / car] from [date] to [date]. [With / without] a driver.",
      seo: {
        title: 'Scooter & Car Rental Lombok — With or Without Driver | Yumna Tour and Travel',
        description:
          'Rent a scooter or car on Lombok: three scooter sizes, cars from 4 seats to minibus, with or without driver. Delivered to your accommodation.',
      },
    },
    id: {
      name: 'Sewa Motor & Mobil',
      tagline: 'Kendaraan sendiri, atau ada yang menyetir untuk Anda.',
      summary:
        'Motor tiga ukuran, dan mobil dari empat kursi sampai minibus — dengan atau tanpa sopir.',
      intro:
        'Lombok jauh lebih menyenangkan bila Anda punya kendaraan sendiri. Pantai terbaik ada di jalan-jalan kecil, makanan terbaik jauh dari hotel, dan jaraknya lebih panjang daripada yang terlihat di peta. Sewa motor bila Anda percaya diri, mobil bila tidak, dan mobil dengan sopir bila Anda lebih suka menikmati pemandangan daripada memperhatikan lalu lintas.',
      highlights: [
        'Motor ukuran kecil, sedang dan besar — sesuai tingkat kepercayaan diri Anda',
        'Mobil dari empat kursi sampai minibus untuk rombongan',
        'Dengan atau tanpa sopir, sesuai pilihan Anda',
        'Diantar ke tempat Anda menginap',
        'Helm disediakan; minta tambahan seperti dudukan HP atau kursi anak',
      ],
      details: [
        {
          title: 'Dengan sopir atau tanpa sopir',
          body: 'Menyetir sendiri lebih murah dan memberi kebebasan penuh. Sopir lebih mahal tetapi memberi hal lain: dia tahu jalan mana yang ditutup, di mana mobil aman diparkir, dan berapa harga yang wajar di tempat tujuan. Untuk kunjungan pertama, kebanyakan tamu lebih nyaman dengan sopir.',
        },
        {
          title: 'Sebelum berkendara',
          body: 'Lalu lintas di sini punya iramanya sendiri dan jalan di luar kota gelap pada malam hari. Bila Anda belum pernah mengendarai motor, liburan di Lombok bukan tempat untuk belajar — ambil mobil saja. Kami lebih rela membatalkan sewa daripada menjenguk Anda di rumah sakit.',
        },
      ],
      muslimNote:
        'Satu hal yang perlu diketahui bila Anda menyetir sendiri: pada Jumat menjelang tengah hari, jalan di sekitar masjid besar akan padat lalu lengang kembali. Bukan masalah — hanya jangan menyusun jadwal yang mepet melewati kota pada jam itu.',
      whatsapp:
        'Halo Yumna, saya ingin menyewa [motor / mobil] dari tanggal [tanggal] sampai [tanggal]. [Dengan / tanpa] sopir.',
      seo: {
        title: 'Sewa Motor & Mobil Lombok — Dengan atau Tanpa Sopir | Yumna Tour and Travel',
        description:
          'Sewa motor atau mobil di Lombok: tiga ukuran motor, mobil 4 kursi sampai minibus, dengan atau tanpa sopir. Diantar ke penginapan Anda.',
      },
    },
  },

  {
    slug: 'ferry-fast-boat-tickets',
    order: 5,
    pattern: 5,
    approval: [
      'Which fast boat operators does Yumna book with, Bali ⇄ Lombok?',
      'Which routes exactly — Padang Bai, Serangan, Amed? To Bangsal, Teluk Nare or the Gilis directly?',
      'Is the slow public ferry (Lembar ⇄ Padang Bai) also booked, or only fast boats?',
      'Is hotel-to-harbour transport included in a ticket booking or quoted separately?',
      'How far in advance should guests book in high season?',
    ],
    en: {
      name: 'Ferry & Fast Boat Tickets',
      tagline: 'Bali to Lombok, Lombok to the Gilis — booked and timed properly.',
      summary:
        'Crossings between Bali, Lombok and the Gili islands, with the transport at both ends arranged too.',
      intro:
        'Booking a boat is the easy part. Getting to the right harbour at the right time, with a driver who knows which of the several departure points your operator actually uses, is where people lose half a day. We book the crossing and arrange both ends of it, so the ticket is part of a plan rather than a loose piece of paper.',
      highlights: [
        'Bali ⇄ Lombok crossings, and Lombok ⇄ Gili islands',
        'Transport to and from the harbour arranged with the ticket',
        'We tell you honestly which crossings are rough and when',
        'Help if a crossing is cancelled — we rebook, you do not queue',
        'Luggage, surfboards and bulky bags accounted for in advance',
      ],
      details: [
        {
          title: 'Fast boat or ferry',
          body: 'The fast boats are the quick way between Bali and Lombok and the only sensible way to the Gilis. The public ferry from Lembar is slow and much cheaper, and it takes vehicles. They are different products for different trips, and we will tell you which one your plan actually needs.',
        },
        {
          title: 'Crossings and the weather',
          body: 'The strait between Bali and Lombok can be genuinely rough, particularly outside the calm months, and boats are sometimes cancelled at short notice. If you have a flight to catch the same day, plan a night on the right side of the water. We will say so when we book.',
        },
      ],
      muslimNote:
        'Crossings are the one part of a trip you cannot pause. We will tell you before you book if a departure runs through a prayer time, so you can take the sailing before or after it instead of praying on a moving boat.',
      whatsapp:
        "Hi Yumna, I'd like to book a boat from [origin] to [destination] on [date], for [number] people.",
      seo: {
        title: 'Fast Boat & Ferry Tickets Lombok — Bali & Gili Crossings | Yumna Tour and Travel',
        description:
          'Fast boat and ferry tickets between Bali, Lombok and the Gili islands, with harbour transfers arranged at both ends. Booked by a local operator.',
      },
    },
    id: {
      name: 'Tiket Feri & Fast Boat',
      tagline: 'Bali ke Lombok, Lombok ke Gili — dipesan dan dijadwalkan dengan benar.',
      summary:
        'Penyeberangan antara Bali, Lombok dan Gili, lengkap dengan transportasi di kedua ujungnya.',
      intro:
        'Memesan tiket kapal adalah bagian yang mudah. Yang membuat orang kehilangan setengah hari adalah sampai di pelabuhan yang tepat pada waktu yang tepat, dengan sopir yang tahu titik keberangkatan mana yang benar-benar dipakai operator Anda. Kami memesan penyeberangannya sekaligus mengatur kedua ujungnya, sehingga tiket menjadi bagian dari rencana, bukan sekadar selembar kertas.',
      highlights: [
        'Penyeberangan Bali ⇄ Lombok, dan Lombok ⇄ Gili',
        'Transportasi ke dan dari pelabuhan diatur bersama tiket',
        'Kami sampaikan terus terang penyeberangan mana yang bergelombang dan kapan',
        'Bantuan bila penyeberangan dibatalkan — kami yang mengurus penjadwalan ulang',
        'Bagasi, papan selancar dan barang besar diperhitungkan sejak awal',
      ],
      details: [
        {
          title: 'Fast boat atau feri',
          body: 'Fast boat adalah cara cepat antara Bali dan Lombok, dan satu-satunya cara masuk akal ke Gili. Feri umum dari Lembar jauh lebih lambat dan lebih murah, serta bisa mengangkut kendaraan. Keduanya produk berbeda untuk perjalanan berbeda, dan kami akan memberi tahu mana yang sesuai rencana Anda.',
        },
        {
          title: 'Penyeberangan dan cuaca',
          body: 'Selat antara Bali dan Lombok bisa benar-benar bergelombang, terutama di luar bulan-bulan tenang, dan kapal kadang dibatalkan mendadak. Bila Anda harus mengejar penerbangan di hari yang sama, menginaplah lebih dulu di sisi yang benar. Kami akan mengingatkan saat memesan.',
        },
      ],
      muslimNote:
        'Penyeberangan adalah satu-satunya bagian perjalanan yang tidak bisa dijeda. Kami beri tahu sebelum Anda memesan bila jadwal keberangkatan melewati waktu salat, sehingga Anda bisa memilih jadwal sebelum atau sesudahnya daripada salat di atas kapal yang bergoyang.',
      whatsapp:
        'Halo Yumna, saya ingin memesan kapal dari [asal] ke [tujuan] tanggal [tanggal], untuk [jumlah] orang.',
      seo: {
        title: 'Tiket Fast Boat & Feri Lombok — Bali & Gili | Yumna Tour and Travel',
        description:
          'Tiket fast boat dan feri antara Bali, Lombok dan Gili, lengkap dengan antar-jemput pelabuhan. Dipesan lewat operator lokal.',
      },
    },
  },

  {
    slug: 'villa-hotel-booking',
    order: 6,
    pattern: 6,
    approval: [
      'How does the booking actually work — does Yumna hold rooms, or negotiate with properties directly?',
      'Is the claim of better-than-online prices something we can state? If so, on which kinds of property?',
      'Which areas are covered — Senggigi, Kuta, Mataram, Gili, Sembalun?',
      'What exactly is checked for Muslim-friendly accommodation, and can it be verified per property?',
      'Is payment made to Yumna or directly to the property?',
    ],
    en: {
      name: 'Villa & Hotel Booking',
      tagline: 'A local asking on your behalf beats a search filter.',
      summary:
        'Help finding a villa or hotel that suits you — including whether it actually suits a Muslim family.',
      intro:
        'Booking sites show you photographs and a price. They do not tell you that the villa is beautiful but forty minutes from anything, that the "beachfront" hotel faces a working harbour, or that the resort with the great rate has a pool bar directly under the family rooms. We book on Lombok every week and we know which is which.',
      highlights: [
        'Villas, hotels and guest houses across the island',
        'We check what listings do not tell you: noise, access, what is nearby',
        'Muslim-friendly properties assessed on things that actually matter',
        'Rooms held while you decide, rather than a countdown timer',
        'One point of contact if something is wrong when you arrive',
      ],
      details: [
        {
          title: 'What we check for you',
          body: 'How far it really is from where you want to be. Whether the road in is passable in the rain. Whether breakfast is included and what it actually is. Whether the quiet-looking place is next to a mosque loudspeaker, a construction site or a beach club — none of which appear in the photographs.',
        },
        {
          title: 'Booking through us or directly',
          body: 'If a property is cheaper for you to book yourself, we will say so. What we add is judgement about whether it is the right place, and someone on the island to call if it turns out not to be.',
        },
      ],
      muslimNote:
        'This is where the details actually decide whether a stay works: is the kiblat marked in the room, is breakfast halal or just egg and toast, how present is the pool bar, and can women swim without an audience. We report what we find, not what sells the booking.',
      whatsapp:
        "Hi Yumna, I'm looking for accommodation on Lombok from [date] to [date], for [number] people, near [area].",
      seo: {
        title: 'Villa & Hotel Booking Lombok — Muslim-Friendly Stays | Yumna Tour and Travel',
        description:
          'Help finding villas and hotels on Lombok, checked by a local operator — including what makes a property genuinely Muslim-friendly.',
      },
    },
    id: {
      name: 'Pemesanan Vila & Hotel',
      tagline: 'Orang lokal yang menanyakan langsung lebih andal daripada filter pencarian.',
      summary:
        'Bantuan mencari vila atau hotel yang cocok — termasuk apakah benar-benar cocok untuk keluarga Muslim.',
      intro:
        'Situs pemesanan hanya menampilkan foto dan harga. Mereka tidak memberi tahu bahwa vilanya indah tetapi empat puluh menit dari mana-mana, bahwa hotel "tepi pantai" itu menghadap pelabuhan kerja, atau bahwa resor dengan tarif menarik itu punya bar kolam persis di bawah kamar keluarga. Kami memesan di Lombok setiap minggu dan kami tahu bedanya.',
      highlights: [
        'Vila, hotel dan guest house di seluruh pulau',
        'Kami periksa yang tidak tertulis di iklan: kebisingan, akses, apa yang ada di sekitar',
        'Penginapan ramah Muslim dinilai dari hal yang benar-benar penting',
        'Kamar ditahan selama Anda mempertimbangkan, bukan dikejar hitungan mundur',
        'Satu kontak bila ada yang tidak beres saat Anda tiba',
      ],
      details: [
        {
          title: 'Yang kami periksa untuk Anda',
          body: 'Seberapa jauh sebenarnya dari tempat yang Anda tuju. Apakah jalan masuknya bisa dilalui saat hujan. Apakah sarapan termasuk dan seperti apa isinya. Apakah tempat yang terlihat tenang itu bersebelahan dengan pengeras suara masjid, proyek bangunan atau beach club — hal yang tidak pernah muncul di foto.',
        },
        {
          title: 'Lewat kami atau langsung',
          body: 'Bila lebih murah Anda pesan sendiri, kami akan bilang begitu. Yang kami tambahkan adalah pertimbangan apakah tempat itu memang tepat, dan adanya orang di pulau ini yang bisa dihubungi bila ternyata tidak.',
        },
      ],
      muslimNote:
        'Di sinilah detail benar-benar menentukan nyaman atau tidaknya menginap: apakah arah kiblat ditandai di kamar, apakah sarapannya halal atau sekadar telur dan roti, seberapa menonjol bar kolam, dan apakah perempuan bisa berenang tanpa jadi tontonan. Kami laporkan apa adanya, bukan yang membuat pesanan cepat laku.',
      whatsapp:
        'Halo Yumna, saya mencari penginapan di Lombok dari tanggal [tanggal] sampai [tanggal], untuk [jumlah] orang, di daerah [daerah].',
      seo: {
        title: 'Pemesanan Vila & Hotel Lombok — Penginapan Ramah Muslim | Yumna Tour and Travel',
        description:
          'Bantuan mencari vila dan hotel di Lombok, diperiksa langsung oleh operator lokal — termasuk yang membuat sebuah properti benar-benar ramah Muslim.',
      },
    },
  },

  {
    slug: 'rinjani-trekking',
    order: 7,
    pattern: 7,
    approval: [
      'SAFETY-CRITICAL — nothing on this page goes live unconfirmed.',
      'Confirm the packages: 2 days / 1 night and 3 days / 2 nights. Which routes — Sembalun, Senaru, Torean?',
      'Which summit or crater rim does each package actually reach?',
      'Are national park permits included in the quote?',
      'What equipment is provided (tent, sleeping bag, mat, meals) and what must the guest bring?',
      'Guide and porter ratio per group?',
      'What is the minimum fitness level, and is there an age limit?',
      'Confirm the closed season — the park normally closes for part of the rainy season.',
      'Is there insurance, and what is the procedure if a trekker cannot continue?',
    ],
    en: {
      name: 'Rinjani Trekking',
      tagline: 'The hardest thing you will do on Lombok, and the one you will talk about.',
      summary:
        'Guided treks on Gunung Rinjani in two- and three-day packages, with experienced local guides.',
      intro:
        'Rinjani is an active volcano and the second-highest in Indonesia. The trek is genuinely demanding: long days, thin air, loose ground on the ascent, and nights cold enough to surprise people who came for a beach holiday. Done with the right guide and the right preparation it is the thing most guests remember about Lombok. Done casually it is how people get hurt.',
      highlights: [
        'Two-day / one-night and three-day / two-night packages',
        'Experienced local guides who climb this mountain for a living',
        'Porters, camp and meals on the mountain arranged',
        'Small groups — you are not following a flag up the ridge',
        'Honest advice on whether the trek is right for you before you book',
      ],
      details: [
        {
          title: 'How hard is it, really',
          body: 'Harder than most people expect. You are walking for eight hours or more a day with altitude gain, and the summit push starts in the dark on loose volcanic scree that gives back part of every step. You do not need to be an athlete, but you do need to be able to walk uphill for a full day without it ruining you.',
        },
        {
          title: 'Season and closures',
          body: 'The mountain is not open year round. The national park closes for part of the rainy season, and the route can shut at short notice for weather or volcanic activity. Build a spare day into your trip, and do not book a flight for the evening you come down.',
        },
        {
          title: 'What the mountain is like at night',
          body: 'Cold. Genuinely cold, in a way that catches out people who packed for the tropics. Camp is on exposed ground and the wind does not stop. Warm layers are not optional and we will tell you exactly what to bring before you commit.',
        },
      ],
      muslimNote:
        'Guides pray on the mountain themselves, so prayer on the trek is normal rather than something you have to ask for. Food carried up is halal. Tell us about fasting or any dietary needs when you book, because that changes how the days are planned.',
      whatsapp:
        "Hi Yumna, I'd like to ask about Rinjani trekking. We are [number] people, around [date], interested in the [2D1N / 3D2N] package.",
      seo: {
        title: 'Rinjani Trekking — 2D1N & 3D2N Guided Packages | Yumna Tour and Travel',
        description:
          'Guided Rinjani treks from Lombok: two-day and three-day packages with experienced local guides, porters and camp arranged. Halal meals, honest advice.',
      },
    },
    id: {
      name: 'Pendakian Rinjani',
      tagline: 'Hal tersulit yang akan Anda lakukan di Lombok — dan yang paling Anda ceritakan.',
      summary:
        'Pendakian Gunung Rinjani berpemandu, paket dua dan tiga hari, bersama pemandu lokal berpengalaman.',
      intro:
        'Rinjani adalah gunung berapi aktif dan tertinggi kedua di Indonesia. Pendakiannya benar-benar berat: hari yang panjang, udara tipis, medan berpasir yang labil saat menanjak, dan malam yang jauh lebih dingin daripada dugaan orang yang datang untuk liburan pantai. Dengan pemandu yang tepat dan persiapan yang benar, inilah yang paling diingat tamu kami tentang Lombok. Bila disepelekan, di sinilah orang celaka.',
      highlights: [
        'Paket 2 hari 1 malam dan 3 hari 2 malam',
        'Pemandu lokal berpengalaman yang mendaki gunung ini setiap minggu',
        'Porter, perkemahan dan konsumsi di gunung diatur',
        'Rombongan kecil — bukan barisan yang mengikuti bendera',
        'Saran jujur apakah pendakian ini cocok untuk Anda sebelum memesan',
      ],
      details: [
        {
          title: 'Seberapa berat sebenarnya',
          body: 'Lebih berat daripada dugaan kebanyakan orang. Anda berjalan delapan jam atau lebih per hari sambil terus menanjak, dan pendakian puncak dimulai dalam gelap di atas pasir vulkanik labil yang membuat setiap langkah melorot kembali. Anda tidak harus atlet, tetapi harus sanggup mendaki seharian penuh tanpa tumbang.',
        },
        {
          title: 'Musim dan penutupan',
          body: 'Gunung ini tidak buka sepanjang tahun. Taman nasional ditutup pada sebagian musim hujan, dan jalur bisa ditutup mendadak karena cuaca atau aktivitas vulkanik. Sediakan satu hari cadangan dalam rencana Anda, dan jangan memesan penerbangan di malam Anda turun.',
        },
        {
          title: 'Malam di gunung',
          body: 'Dingin. Benar-benar dingin, dan ini mengejutkan orang yang berkemas untuk daerah tropis. Perkemahan berada di lahan terbuka dan anginnya tidak berhenti. Pakaian hangat bukan pilihan tambahan — kami akan merinci apa yang harus dibawa sebelum Anda memutuskan.',
        },
      ],
      muslimNote:
        'Pemandu kami juga salat di gunung, jadi salat selama pendakian adalah hal biasa, bukan sesuatu yang harus Anda minta. Makanan yang dibawa naik halal. Beri tahu kami bila Anda berpuasa atau punya pantangan makanan saat memesan, karena itu mengubah cara harinya disusun.',
      whatsapp:
        'Halo Yumna, saya ingin bertanya tentang pendakian Rinjani. Kami [jumlah] orang, sekitar tanggal [tanggal], tertarik paket [2H1M / 3H2M].',
      seo: {
        title: 'Pendakian Rinjani — Paket 2H1M & 3H2M Berpemandu | Yumna Tour and Travel',
        description:
          'Pendakian Rinjani berpemandu dari Lombok: paket dua dan tiga hari dengan pemandu lokal berpengalaman, porter dan perkemahan. Konsumsi halal, saran jujur.',
      },
    },
  },

  {
    slug: 'multi-day-packages',
    order: 8,
    pattern: 8,
    approval: [
      'NEW SERVICE — confirm Muhajir wants to sell bundled multi-day packages.',
      'Which durations? 3D2N and 4D3N assumed here — correct?',
      'What is bundled: transport, tours, accommodation, meals, tickets?',
      'Does Yumna book and pay the accommodation, or does the guest?',
      'Is there a minimum group size?',
    ],
    en: {
      name: 'Multi-Day Packages',
      tagline: 'Hand us the whole trip, not just one day of it.',
      summary:
        'Several days planned as one: transport, tours, accommodation and tickets in a single arrangement.',
      intro:
        'Booking each day separately means negotiating five times, coordinating five pick-ups and hoping the pieces fit. A package is the same island, planned once. You tell us how many days you have and what matters to you; we come back with a route that works — including the travelling time between places, which is the part people underestimate on Lombok.',
      highlights: [
        'Three days, four days or longer — built around your dates',
        'Transport, tours, accommodation and boat tickets in one plan',
        'Realistic travel times, with the driving spread sensibly',
        'One price agreed up front for the whole trip',
        'Rest days and prayer times planned in, not squeezed around',
      ],
      details: [
        {
          title: 'How planning works',
          body: 'Send your dates, how many of you there are, and two or three things you definitely want to do. We send back a day-by-day outline. You change what you do not like, we adjust, and we agree a price once the plan is right — not before.',
        },
        {
          title: 'Why distance matters here',
          body: 'Lombok looks small and drives large. The road between the north coast and the south takes most of a morning, and a plan that ignores that turns a holiday into a series of car journeys. We build the route so you sleep in the right places.',
        },
      ],
        muslimNote:
        'Over several days the pattern matters more than any single stop. We keep Friday light enough for Jumu\'ah, avoid putting a long drive across the middle of a fasting day, and place the overnight stops where your family is comfortable — decided in the first draft, not patched in afterwards.',
      whatsapp:
        "Hi Yumna, I'd like a multi-day package. We arrive on [date] for [number] days, [number] people. We'd really like to see [ ... ].",
      seo: {
        title: 'Lombok Multi-Day Tour Packages — 3 & 4 Day Trips | Yumna Tour and Travel',
        description:
          'Multi-day Lombok packages combining transport, tours, accommodation and boat tickets in one plan. Muslim-friendly, planned by a local operator.',
      },
    },
    id: {
      name: 'Paket Beberapa Hari',
      tagline: 'Serahkan seluruh perjalanan, bukan cuma satu harinya.',
      summary:
        'Beberapa hari disusun sebagai satu rencana: transportasi, tur, penginapan dan tiket dalam satu paket.',
      intro:
        'Memesan hari demi hari berarti bernegosiasi lima kali, mengatur lima penjemputan, dan berharap semuanya nyambung. Paket adalah pulau yang sama, direncanakan sekali. Anda sampaikan berapa hari waktu Anda dan apa yang penting bagi Anda; kami kembali dengan rute yang masuk akal — termasuk waktu tempuh antar lokasi, bagian yang paling sering diremehkan orang di Lombok.',
      highlights: [
        'Tiga hari, empat hari atau lebih — disusun sesuai tanggal Anda',
        'Transportasi, tur, penginapan dan tiket kapal dalam satu rencana',
        'Waktu tempuh yang realistis, dengan pembagian perjalanan yang wajar',
        'Satu harga disepakati di muka untuk seluruh perjalanan',
        'Hari istirahat dan waktu salat direncanakan, bukan diselipkan',
      ],
      details: [
        {
          title: 'Cara penyusunannya',
          body: 'Kirim tanggal Anda, jumlah orang, dan dua tiga hal yang pasti ingin Anda lakukan. Kami balas dengan rencana harian. Anda ubah bagian yang kurang cocok, kami sesuaikan, dan harga disepakati setelah rencananya pas — bukan sebelumnya.',
        },
        {
          title: 'Kenapa jarak penting di sini',
          body: 'Lombok terlihat kecil tetapi terasa luas saat dikendarai. Perjalanan dari pesisir utara ke selatan menghabiskan hampir satu pagi, dan rencana yang mengabaikan itu mengubah liburan menjadi rangkaian perjalanan mobil. Kami susun rutenya agar Anda menginap di tempat yang tepat.',
        },
      ],
      muslimNote:
        'Dalam perjalanan beberapa hari, polanya lebih penting daripada satu titik pemberhentian. Kami menjaga hari Jumat tetap longgar untuk salat Jumat, menghindari perjalanan jauh di tengah hari saat berpuasa, dan menempatkan lokasi menginap di tempat yang nyaman bagi keluarga Anda — ditentukan sejak rancangan pertama, bukan ditambal belakangan.',
      whatsapp:
        'Halo Yumna, saya ingin paket beberapa hari. Kami tiba tanggal [tanggal] selama [jumlah] hari, [jumlah] orang. Kami ingin sekali mengunjungi [ ... ].',
      seo: {
        title: 'Paket Wisata Lombok Beberapa Hari — 3 & 4 Hari | Yumna Tour and Travel',
        description:
          'Paket wisata Lombok beberapa hari: transportasi, tur, penginapan dan tiket kapal dalam satu rencana. Ramah Muslim, disusun operator lokal.',
      },
    },
  },

  {
    slug: 'jet-ski-rental',
    order: 9,
    pattern: 9,
    approval: [
      'Where is the jet ski available — which beach or operator?',
      'Rental by the session, or by the hour?',
      'Is an instructor or safety briefing included? Life jacket?',
      'Minimum age or licence requirement?',
      'Is it available year round, or weather dependent?',
    ],
    en: {
      name: 'Jet Ski Rental',
      tagline: 'Half an hour that the children will talk about all week.',
      summary: 'Jet ski hire on the coast, with safety equipment and a briefing before you go out.',
      intro:
        'Not every part of a trip has to be cultural. Jet ski sessions are the easiest thing to add onto a beach day, they need no experience, and they are usually the part of the holiday the teenagers rate highest. Equipment, briefing and supervision are arranged with the rental.',
      highlights: [
        'No experience needed — a briefing comes first',
        'Life jacket and safety equipment provided',
        'Easy to combine with a beach day or a tour',
        'Weather dependent — we will tell you honestly if the sea is not right',
      ],
      details: [
        {
          title: 'Combining it with a tour day',
          body: 'Most guests add this to a day that is already planned, rather than travelling out for it alone. Tell us which day you are near the coast and we will fit it in where it makes sense.',
        },
      ],
      muslimNote:
        'Beaches differ a lot in how crowded and how relaxed they are. If you would rather ride somewhere quieter, or want the women in your group to have the water to themselves for half an hour, say so — that is a matter of picking the right beach and the right time of day, and we know both.',
      whatsapp:
        "Hi Yumna, I'd like to ask about jet ski rental around [date], for [number] people.",
      seo: {
        title: 'Jet Ski Rental Lombok | Yumna Tour and Travel',
        description:
          'Jet ski hire on Lombok with safety briefing and equipment included. Easy to combine with a beach day or a tour. Book through a local operator.',
      },
    },
    id: {
      name: 'Sewa Jet Ski',
      tagline: 'Setengah jam yang akan diceritakan anak-anak seminggu penuh.',
      summary:
        'Sewa jet ski di pesisir, lengkap dengan perlengkapan keselamatan dan pengarahan sebelum turun.',
      intro:
        'Tidak semua bagian perjalanan harus soal budaya. Jet ski adalah tambahan paling mudah untuk hari bermain di pantai, tidak butuh pengalaman, dan biasanya jadi bagian favorit anak remaja. Perlengkapan, pengarahan dan pengawasan sudah termasuk dalam penyewaan.',
      highlights: [
        'Tanpa pengalaman — ada pengarahan lebih dulu',
        'Pelampung dan perlengkapan keselamatan disediakan',
        'Mudah digabung dengan hari pantai atau tur',
        'Tergantung cuaca — kami akan berterus terang bila laut sedang tidak bersahabat',
      ],
      details: [
        {
          title: 'Digabung dengan hari tur',
          body: 'Sebagian besar tamu menambahkannya ke hari yang sudah direncanakan, bukan datang khusus untuk itu. Sampaikan hari apa Anda berada dekat pantai, dan kami sisipkan pada waktu yang pas.',
        },
      ],
      muslimNote:
        'Setiap pantai berbeda tingkat keramaian dan suasananya. Bila Anda lebih suka bermain di tempat yang lebih tenang, atau ingin anggota perempuan dalam rombongan punya waktu sendiri di air selama setengah jam, sampaikan saja — itu soal memilih pantai dan jam yang tepat, dan kami tahu keduanya.',
      whatsapp:
        'Halo Yumna, saya ingin bertanya tentang sewa jet ski sekitar tanggal [tanggal], untuk [jumlah] orang.',
      seo: {
        title: 'Sewa Jet Ski Lombok | Yumna Tour and Travel',
        description:
          'Sewa jet ski di Lombok dengan pengarahan dan perlengkapan keselamatan. Mudah digabung dengan hari pantai atau tur. Pesan lewat operator lokal.',
      },
    },
  },

  {
    slug: 'tailor-made-itinerary',
    order: 10,
    pattern: 10,
    approval: [
      'NEW SERVICE — confirm Muhajir is willing to plan fully custom itineraries.',
      'Is there a charge for the planning itself, or only for the services booked?',
      'How much notice is needed for a custom trip?',
    ],
    en: {
      name: 'Tailor-Made Itinerary',
      tagline: 'Tell us what you want. We will tell you if it is possible.',
      summary:
        'Nothing on this list quite right? Describe the trip you have in mind and we will build it.',
      intro:
        'Some trips do not fit a package. A family with very different ages and energy levels. A group with one day free and a long list. Someone who has been to Lombok before and wants the parts that are not on any tour. Describe what you have in mind and we will tell you honestly what is possible in the time you have — including when the answer is that it is not.',
      highlights: [
        'Any combination of the services on this site, and things that are not on it',
        'Honest answers about what fits in the time you have',
        'Built around fitness, ages and how much driving you can tolerate',
        'A written day-by-day plan before you commit to anything',
      ],
      details: [
        {
          title: 'What helps us plan',
          body: 'Your dates, how many of you there are and roughly how old, where you are staying if you have booked, two or three things you definitely want, and one thing you definitely do not. That is enough for a first draft.',
        },
      ],
      muslimNote:
        'Tell us at the start if you are travelling during Ramadan, if anyone is fasting, or if there are things about accommodation and dining that matter to your family. It is much easier to plan around from the beginning than to correct later.',
      whatsapp:
        "Hi Yumna, I'd like a custom itinerary. We're on Lombok from [date] to [date], [number] people. What we'd most like is [ ... ].",
      seo: {
        title: 'Tailor-Made Lombok Itinerary — Custom Trip Planning | Yumna Tour and Travel',
        description:
          'Custom Lombok itineraries planned by a local operator, built around your dates, your family and how you like to travel. Muslim-friendly by default.',
      },
    },
    id: {
      name: 'Rencana Perjalanan Khusus',
      tagline: 'Sampaikan keinginan Anda. Kami akan bilang apakah itu mungkin.',
      summary:
        'Tidak ada yang pas di daftar ini? Ceritakan perjalanan yang Anda bayangkan dan kami susun.',
      intro:
        'Ada perjalanan yang tidak muat dalam paket. Keluarga dengan rentang usia dan stamina yang berbeda jauh. Rombongan dengan satu hari kosong dan daftar panjang. Orang yang sudah pernah ke Lombok dan ingin bagian yang tidak masuk tur mana pun. Ceritakan rencana Anda dan kami akan menjawab jujur apa yang mungkin dilakukan dalam waktu yang Anda punya — termasuk bila jawabannya tidak mungkin.',
      highlights: [
        'Kombinasi bebas dari layanan di situs ini, dan hal-hal di luar itu',
        'Jawaban jujur tentang apa yang muat dalam waktu Anda',
        'Disusun sesuai kondisi fisik, usia, dan seberapa kuat Anda di perjalanan',
        'Rencana harian tertulis sebelum Anda memutuskan apa pun',
      ],
      details: [
        {
          title: 'Yang membantu kami menyusun',
          body: 'Tanggal Anda, jumlah orang dan kisaran usia, tempat menginap bila sudah dipesan, dua tiga hal yang pasti ingin dilakukan, dan satu hal yang pasti tidak. Itu sudah cukup untuk rancangan pertama.',
        },
      ],
      muslimNote:
        'Beri tahu sejak awal bila Anda bepergian saat Ramadan, bila ada yang berpuasa, atau bila ada hal soal penginapan dan makanan yang penting bagi keluarga Anda. Jauh lebih mudah direncanakan dari awal daripada diperbaiki belakangan.',
      whatsapp:
        'Halo Yumna, saya ingin rencana perjalanan khusus. Kami di Lombok dari tanggal [tanggal] sampai [tanggal], [jumlah] orang. Yang paling kami inginkan adalah [ ... ].',
      seo: {
        title: 'Rencana Perjalanan Lombok Khusus — Custom Itinerary | Yumna Tour and Travel',
        description:
          'Rencana perjalanan Lombok yang disusun khusus oleh operator lokal, sesuai tanggal, keluarga dan gaya perjalanan Anda. Ramah Muslim sejak awal.',
      },
    },
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
