import { ServiceItem, FleetItem, TestimonialItem, FaqItem, CoverageArea } from '../types';

export const COMPANY_INFO = {
  name: 'Gilang Buang Puing',
  tagline: 'Jasa Buang Puing & Pembersihan Lahan Terpercaya di Jabodetabek',
  phone: '0812-8888-9999',
  phoneClean: '6281288889999',
  whatsappUrl: (msg: string) => `https://wa.me/6281288889999?text=${encodeURIComponent(msg)}`,
  address: 'Jl. Raya Cilandak KKO No. 45, Pasar Minggu, Jakarta Selatan (Melayani Seluruh Jabodetabek)',
  operatingHours: '06.00 - 22.00 WIB (Setiap Hari Termasuk Minggu & Hari Libur)',
  stats: [
    { label: 'Ritase Berhasil Dibuang', value: '1.850+' },
    { label: 'Armada Siap Jalan', value: '18 Unit' },
    { label: 'Pekerja Muat & Operator', value: '35+ Tim' },
    { label: 'Kepuasan Pelanggan', value: '99.4%' },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'buang-puing-bangunan',
    title: 'Jasa Buang Puing Bangunan',
    tagline: 'Pecahan tembok, bata merah, hebel, cor beton & keramik',
    description: 'Solusi cepat pembuangan sisa bongkaran dinding, semen, genteng, plesteran, dan puing konstruksi rumah maupun gedung komersial. Dikerjakan rapi hingga halaman kembali bersih siap dibangun.',
    image: '/src/assets/images/hero_dump_truck_worksite_1792120788969.jpg',
    recommendedFleet: 'Truk Engkel / Dump Truck Double',
    features: [
      'Penyediaan karung puing jika diperlukan',
      'Termasuk tenaga angkut (kuli panggul/muat)',
      'Pembuangan ke TPA & lokasi urug resmi',
      'Area kerja disapu bersih setelah muat selesai'
    ],
    materialsHandled: ['Pecahan Tembok & Bata', 'Puing Cor & Beton', 'Keramik & Granit', 'Semen Kering & Pasir'],
    startingPrice: 'Rp 350.000',
    unit: 'rit'
  },
  {
    id: 'buang-sampah-proyek',
    title: 'Jasa Buang Sampah Proyek / Renovasi',
    tagline: 'Sisa material kayu, gypsum, plafon, kardus & partisi',
    description: 'Pembersihan tuntas limbah non-struktural pasca renovasi interior, ruko, kantor, dan rumah tinggal. Tidak perlu pusing komplain tetangga atau satpam perumahan karena pengerjaan kami higienis dan gesit.',
    image: '/src/assets/images/fleet_truck_showcase_1792120791139.jpg',
    recommendedFleet: 'Pick-up Bak / Truk Engkel Box',
    features: [
      'Pemisahan sampah berbahaya & mudah terbakar',
      'Tutup terpal aman tidak berceceran di jalan raya',
      'Bisa dijadwalkan malam hari untuk mall / gedung kantor',
      'Tersedia sewa karung jumbo (jumbo bag)'
    ],
    materialsHandled: ['Gypsum & Plafon Runtuh', 'Kusen Kayu & Triplek', 'Kaca & Partisi Aluminium', 'Kardus & Plastik Material'],
    startingPrice: 'Rp 300.000',
    unit: 'rit'
  },
  {
    id: 'buang-tebangan-pohon',
    title: 'Jasa Buang Sampah Tebangan Pohon',
    tagline: 'Batang kayu besar, ranting, dahan, dan sisa pangkas taman',
    description: 'Evakuasi sampah organik hasil tebang pohon pekarangan atau pemangkasan taman estate. Kami memotong batang kayu besar menjadi ukuran ringkas dan mengangkut semuanya hingga pekarangan Anda lapang seketika.',
    image: '/src/assets/images/service_tree_debris_removal_1792120791189.jpg',
    recommendedFleet: 'Truk Engkel / Truk Dump',
    features: [
      'Bisa request bantuan potong chainsaw / gergaji mesin',
      'Pengangkutan dahan berduri, ranting lebat, & akar',
      'Disposal ke fasilitas pengolahan biomassa/taman',
      'Tidak meninggalkan daun berserakan'
    ],
    materialsHandled: ['Batang Gelondongan Kayu', 'Ranting & Dahan Pohon', 'Sampah Rumput & Bambu', 'Akar & Tunggul Tanaman'],
    startingPrice: 'Rp 400.000',
    unit: 'rit'
  },
  {
    id: 'pengurugan-puing-tanah',
    title: 'Jasa Pengurugan Puing & Tanah',
    tagline: 'Peninggian elevasi tanah, lantai dasar, dan pemadatan lahan',
    description: 'Pengadaan material urug puing bangunan super padat atau tanah merah/tanah campur berkualitas untuk meninggikan elevasi lahan bebas banjir. Menyediakan paket sekalian jasa sebar dan perataan manual maupun alat berat.',
    image: '/src/assets/images/service_excavation_clearing_1792120790487.jpg',
    recommendedFleet: 'Dump Truck Indeks 7-8 m³',
    features: [
      'Pilihan material: Puing murni, sirtu, makadam, tanah merah',
      'Material padat bebas sampah plastik dan limbah busuk',
      'Armada ready supply harian puluhan rit',
      'Tersedia opsi pemadatan dengan stamper / vibro'
    ],
    materialsHandled: ['Puing Cor Kasar & Halus', 'Tanah Merah Super', 'Batu Split & Makadam', 'Sirtu Peninggi Lantai'],
    startingPrice: 'Rp 500.000',
    unit: 'rit'
  },
  {
    id: 'pembersihan-lahan-kosong',
    title: 'Jasa Pembersihan Lahan Kosong (Land Clearing)',
    tagline: 'Babas semak belukar, ilalang lebat, & puing berserakan',
    description: 'Pembersihan menyeluruh kavling atau tanah kosong yang terbengkalai agar siap dijual, dipagar, atau mulai dibangun pondasi. Menggunakan kombinasi tenaga tebas profesional dan mini excavator untuk lahan berukuran luas.',
    image: '/src/assets/images/service_excavation_clearing_1792120790487.jpg',
    recommendedFleet: 'Mini Excavator + Dump Truck',
    features: [
      'Pembabatan rumput gajah liar, semak, dan perdu',
      'Pengupasan sampah liar yang tertimbun di lahan',
      'Perataan permukaan tanah kasar (rough grading)',
      'Dokumentasi progress foto & video sebelum-sesudah'
    ],
    materialsHandled: ['Lahan Kavling Perumahan', 'Tanah Proyek Komersial', 'Area Pinggir Jalan / Gudang', 'Pekarangan Rumah Kosong'],
    startingPrice: 'Rp 15.000',
    unit: 'm²'
  },
  {
    id: 'galian-tanah',
    title: 'Jasa Galian Tanah',
    tagline: 'Galian pondasi tapak, basement, saluran drainase, & kolam',
    description: 'Layanan penggalian tanah secara manual atau mekanis menggunakan alat berat mini backhoe/excavator. Kami mengurus sekaligus pembuangan (disposal) tanah galian ke luar proyek tanpa mengotori jalan umum.',
    image: '/src/assets/images/hero_dump_truck_worksite_1792120788969.jpg',
    recommendedFleet: 'Excavator PC50/PC75 + Dump Truck',
    features: [
      'Tenaga penggali manual berpengalaman & presisi',
      'Tersedia mini excavator untuk akses gang perumahan',
      'Pembuangan tanah sisa galian (soil disposal)',
      'Monitoring kedalaman dan elevasi galian sesuai gambar'
    ],
    materialsHandled: ['Galian Pondasi & Sloof', 'Galian Septic Tank & Kolam', 'Galian Parit & Drainase', 'Galian Basement & Turap'],
    startingPrice: 'Rp 95.000',
    unit: 'm³'
  }
];

export const FLEET_OPTIONS: FleetItem[] = [
  {
    id: 'pickup',
    name: 'Pick-up Bak (Gran Max / L300)',
    capacity: '1 - 1.5 m³ (~30-40 Karung)',
    volume: 'Muatan Maksimal 1.2 Ton',
    idealFor: 'Akses gang sempit, renovasi toilet/kamar tidur, sampah interior perumahan padat.',
    dimensions: 'Panjang 2.3m × Lebar 1.5m × Tinggi Bak 0.4m',
    image: '/src/assets/images/fleet_truck_showcase_1792120791139.jpg',
    ratePerRit: 'Mulai Rp 350.000 / rit'
  },
  {
    id: 'engkel',
    name: 'Truk Engkel 4 Roda (Canter / Dutro)',
    capacity: '3.5 - 4 m³ (~80-100 Karung)',
    volume: 'Muatan Maksimal 3.5 Ton',
    idealFor: 'Renovasi rumah 1-2 lantai, tebangan pohon halaman, buang partisi ruko.',
    dimensions: 'Panjang 3.1m × Lebar 1.7m × Tinggi Bak 0.7m',
    image: '/src/assets/images/fleet_truck_showcase_1792120791139.jpg',
    ratePerRit: 'Mulai Rp 650.000 / rit'
  },
  {
    id: 'dump-double',
    name: 'Truk Dump Double 6 Roda',
    capacity: '7 - 8 m³ (Indeks Standar)',
    volume: 'Muatan Maksimal 8-10 Ton',
    idealFor: 'Bongkaran gedung, pengurugan pondasi, disposal tanah proyek jalanan lebar.',
    dimensions: 'Panjang 4.2m × Lebar 2.0m × Tinggi Bak 1.0m (Hidrolik Tip)',
    image: '/src/assets/images/hero_dump_truck_worksite_1792120788969.jpg',
    ratePerRit: 'Mulai Rp 1.100.000 / rit'
  },
  {
    id: 'excavator',
    name: 'Mini Excavator (PC50 / PC75)',
    capacity: 'Bucket 0.2 - 0.3 m³',
    volume: 'Daya Gali Cepat & Presisi',
    idealFor: 'Pembersihan lahan luas, babas semak akar, galian parit dan pondasi basement.',
    dimensions: 'Sistem Rantai Karet (Aman untuk aspal perumahan)',
    image: '/src/assets/images/service_excavation_clearing_1792120790487.jpg',
    ratePerRit: 'Mulai Rp 1.500.000 / shift'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Kirim Foto',
    description: 'Kirimkan foto atau video tumpukan puing/lahan serta alamat lokasi via WhatsApp. Kami berikan rekomendasi armada dan taksiran ritase.',
  },
  {
    step: '02',
    title: 'Kesepakatan Biaya Transparan',
    description: 'Kami memberikan penawaran harga all-in (armada, bensin, kuli angkut, retribusi buang). Tanpa biaya siluman di lapangan.',
  },
  {
    step: '03',
    title: 'Armada & Tim Meluncur',
    description: 'Truk dan pekerja muat datang tepat waktu sesuai jadwal kesepakatan. Puing diangkut cepat, hati-hati, dan rapi.',
  },
  {
    step: '04',
    title: 'Lokasi Bersih & Pembayaran',
    description: 'Area kerja disapu bersih sebelum tim meninggalkan lokasi. Pembayaran dilakukan secara fleksibel (Transfer / Tunai) setelah Anda puas.',
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  {
    region: 'DKI Jakarta',
    cities: ['Jakarta Selatan (Cilandak, Jagakarsa, Kebayoran, Tebet, Pasar Minggu)', 'Jakarta Barat (Puri, Kebon Jeruk, Cengkareng)', 'Jakarta Timur (Cibubur, Duren Sawit, Cakung)', 'Jakarta Pusat & Utara'],
    deliveryTime: 'Siap kirim armada dalam 1-2 Jam'
  },
  {
    region: 'Tangerang & Tangsel',
    cities: ['BSD City & Serpong', 'Bintaro Jaya & Pondok Aren', 'Ciputat & Pamulang', 'Alam Sutera & Gading Serpong', 'Karawaci & Cikokol'],
    deliveryTime: 'Siap kirim armada dalam 1-2 Jam'
  },
  {
    region: 'Depok & Bekasi',
    cities: ['Margonda, Cinere, Sawangan, Cimanggis', 'Bekasi Barat, Bekasi Selatan, Summarecon, Harapan Indah', 'Jatiasih & Pondok Gede'],
    deliveryTime: 'Siap kirim armada dalam 2-3 Jam'
  },
  {
    region: 'Bogor & Sekitarnya',
    cities: ['Bogor Kota, Sentul City, Cibinong, Bojonggede, Parung'],
    deliveryTime: 'Penjadwalan hari yang sama (Same-day)'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'Bambang Sudibyo',
    role: 'Kontraktor Renovasi Hunian',
    projectType: 'Buang 8 Rit Puing Dinding & Cor',
    location: 'Bintaro Sektor 9, Tangerang Selatan',
    comment: 'Sangat puas dengan tim Gilang Buang Puing. Puing dinding bongkaran 2 lantai habis bersih dalam sehari. Tenaga angkutnya gesit, sopan, dan jalanan depan rumah disapu bersih. Rekomendasi utama!',
    rating: 5,
    date: 'Maret 2026'
  },
  {
    id: 'testi-2',
    clientName: 'Hj. Ratna Wulandari',
    role: 'Pemilik Rumah',
    projectType: 'Buang Sisa Tebang 2 Pohon Mangga Rindang',
    location: 'Cilandak Barat, Jakarta Selatan',
    comment: 'Pohon mangga tua tumbang dan menumpuk di garasi. Hubungi Mas Gilang jam 8 pagi, jam 10 truk engkel sudah datang dengan gergaji mesin. Ranting dan batang besar diangkut tuntas tanpa sisa.',
    rating: 5,
    date: 'Februari 2026'
  },
  {
    id: 'testi-3',
    clientName: 'Ir. Hendra Gunawan',
    role: 'Site Supervisor PT Cipta Bangun',
    projectType: 'Galian Parit & Land Clearing 800 m²',
    location: 'Sentul City, Bogor',
    comment: 'Sewa excavator mini sekalian buang tanah galian ke dump truck. Koordinasi di lapangan sangat profesional, operator handal dan ritase tercatat akurat. Pengerjaan rampung sesuai deadline proyek.',
    rating: 5,
    date: 'Januari 2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Berapa biaya jasa buang puing per rit di Gilang Buang Puing?',
    answer: 'Tarif buang puing mulai dari Rp 350.000 untuk armada Pick-up, Rp 650.000 untuk Truk Engkel 4 roda, dan Rp 1.100.000 untuk Dump Truck Double 6 roda. Harga sudah mencakup sewa armada, bensin driver, dan retribusi pembuangan resmi. Jika membutuhkan tenaga kuli angkut (muat), kami sediakan dengan tarif tambahan yang sangat terjangkau.'
  },
  {
    question: 'Apakah sampah puing harus sudah dimasukkan ke dalam karung?',
    answer: 'Tidak wajib! Kami menerima puing dalam kondisi curah (tumpukan bebas) maupun sudah berkarung. Jika puing masih curah di dalam rumah atau lorong, tim tenaga angkut kami siap memuat langsung dengan sekop, gerobak dorong, atau memasukkannya ke karung terlebih dahulu.'
  },
  {
    question: 'Kemana puing dan sampah renovasi dibuang?',
    answer: 'Kami membuang puing bangunan ke lokasi pematangan tanah resmi, penimbunan proyek yang membutuhkan urugan, atau Tempat Pembuangan Akhir (TPA) berizin. Kami tidak pernah membuang puing sembarangan di pinggir jalan umum atau lahan terlarang.'
  },
  {
    question: 'Apakah bisa melayani panggilan mendadak hari ini (Same-Day Service)?',
    answer: 'Bisa! Kami memiliki belasan unit armada yang siaga di beberapa pool strategis Jakarta, Tangerang, dan Depok. Untuk pemesanan mendadak, armada biasanya dapat tiba di lokasi dalam 1 hingga 2 jam setelah konfirmasi.'
  },
  {
    question: 'Bagaimana cara menghitung estimasi jumlah ritase yang dibutuhkan?',
    answer: 'Sebagai patokan kasar: 1 kubik puing (1 m³) setara dengan 1 pick-up bak penuh atau sekitar 30-40 karung semen. Untuk bongkaran dinding bata 3x3 meter umumnya menghasilkan sekitar 1 hingga 1.5 rit truk engkel. Anda juga cukup foto lokasi dan kirimkan ke WhatsApp kami untuk estimasi langsung.'
  },
  {
    question: 'Apakah melayani pekerjaan di hari libur atau malam hari?',
    answer: 'Ya, kami beroperasi setiap hari dari Senin sampai Minggu, termasuk tanggal merah. Untuk lokasi mall, ruko padat, atau gedung perkantoran yang hanya memperbolehkan buang puing di malam hari (loading dock malam), kami siap menjadwalkan shift malam.'
  }
];
