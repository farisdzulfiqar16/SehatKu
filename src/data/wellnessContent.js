/**
 * wellnessContent.js
 * Semua konten wellness statis: insight per kategori, daily tips,
 * encouragement, dan fun facts.
 *
 * Prinsip wording:
 * - Observasi, bukan penilaian
 * - Mengajak, bukan memerintah
 * - Spesifik dan realistis, bukan generik
 * - Tidak menyebut penyakit atau istilah medis
 */

// ─────────────────────────────────────────────
// WELLNESS INSIGHTS — per kategori, per level
// level: 'high' (≥70%), 'mid' (45–69%), 'low' (<45%)
// ─────────────────────────────────────────────
export const categoryInsights = {
  tidur: {
    high: {
      headline: 'Tidurmu cukup teratur 🌙',
      body: 'Pola tidur yang konsisten membantu tubuh dan pikiran pulih dengan lebih baik. Pertahankan ritme ini — bahkan di akhir pekan jika bisa.',
      tip: 'Coba hindari layar 30 menit sebelum tidur untuk kualitas istirahat yang lebih dalam.',
    },
    mid: {
      headline: 'Tidurmu sudah lumayan 😴',
      body: 'Kamu sudah punya kebiasaan tidur yang cukup, tapi ada ruang untuk membuatnya lebih konsisten. Pola tidur yang teratur bisa memengaruhi energi sepanjang hari.',
      tip: 'Coba tetapkan satu jam tidur yang sama setiap malam, mulai dari selisih 30 menit saja.',
    },
    low: {
      headline: 'Tidurmu mungkin bisa lebih teratur 🌤️',
      body: 'Pola tidur yang kurang teratur dapat memengaruhi energi, fokus, dan suasana hati harianmu. Tidak perlu langsung sempurna — mulai dari langkah kecil.',
      tip: 'Coba buat rutinitas malam sederhana: matikan lampu, jauhkan ponsel, dan tarik napas dalam beberapa kali.',
    },
  },

  aktivitas: {
    high: {
      headline: 'Kamu cukup aktif bergerak 🏃',
      body: 'Kebiasaan bergerak aktif yang kamu bangun sudah bagus. Tubuh yang bergerak secara teratur cenderung terasa lebih ringan dan berenergi.',
      tip: 'Variasikan jenis gerakanmu sesekali — coba aktivitas baru yang menyenangkan agar tidak monoton.',
    },
    mid: {
      headline: 'Aktivitasmu sudah ada, tinggal dijaga 🚶',
      body: 'Kamu sudah bergerak, tapi mungkin belum terlalu konsisten. Tidak perlu olahraga berat — gerakan ringan yang rutin sudah sangat berarti.',
      tip: 'Cobalah peregangan ringan setiap 1–2 jam saat duduk lama. Cukup 5 menit, tapi terasa bedanya.',
    },
    low: {
      headline: 'Yuk mulai bergerak sedikit lebih banyak 🌱',
      body: 'Duduk terlalu lama tanpa jeda bisa membuat tubuh terasa kaku dan energi menurun. Kabar baiknya, gerakan kecil pun sudah cukup untuk memulai.',
      tip: 'Mulai dari yang paling mudah: jalan kaki 10 menit setelah makan siang. Tidak perlu pakaian olahraga.',
    },
  },

  nutrisi: {
    high: {
      headline: 'Pola makanmu cukup teratur 🥗',
      body: 'Kebiasaan makan yang teratur dan beragam membantu tubuh mendapat energi yang stabil sepanjang hari. Kamu sudah di jalur yang baik.',
      tip: 'Sesekali coba eksplorasi sayuran atau buah baru — variasi warna di piring biasanya berarti variasi nutrisi.',
    },
    mid: {
      headline: 'Pola makanmu sudah oke 🍱',
      body: 'Kebiasaan makanmu sudah cukup baik, ada beberapa hal kecil yang mungkin bisa disesuaikan untuk merasa lebih berenergi sepanjang hari.',
      tip: 'Sarapan ringan — bahkan sepotong buah atau segelas susu — sudah cukup untuk membantu fokus di pagi hari.',
    },
    low: {
      headline: 'Pola makan yang lebih teratur bisa terasa bedanya ✨',
      body: 'Melewatkan makan atau kurang sayur-buah bisa membuat energi dan fokus terasa naik-turun. Tidak perlu diet ketat — cukup mulai dari satu kebiasaan kecil.',
      tip: 'Coba tambahkan satu buah ke rutinitas harianmu. Simpan di tempat yang mudah terlihat agar tidak terlupa.',
    },
  },

  mental: {
    high: {
      headline: 'Kamu tampak cukup seimbang secara emosional 🧘',
      body: 'Meluangkan waktu untuk diri sendiri dan mengelola ritme emosional adalah kebiasaan yang sering diremehkan tapi sangat berdampak.',
      tip: 'Terus jaga kebiasaan ini. Sesekali coba tulis satu hal yang kamu syukuri hari ini — sederhana tapi efektif.',
    },
    mid: {
      headline: 'Kesejahteraan mentalmu sudah terjaga 🌿',
      body: 'Kamu sudah cukup baik dalam menjaga keseimbangan emosional, meski mungkin ada hari-hari yang lebih berat. Itu wajar.',
      tip: 'Coba luangkan 10 menit sehari untuk aktivitas yang benar-benar kamu nikmati — tanpa layar, tanpa agenda.',
    },
    low: {
      headline: 'Dirimu layak mendapat perhatian lebih 💛',
      body: 'Stres yang menumpuk tanpa jeda bisa memengaruhi banyak aspek kehidupan sehari-hari. Meluangkan waktu untuk diri sendiri bukan kemewahan — itu kebutuhan.',
      tip: 'Coba teknik pernapasan sederhana: tarik napas 4 hitungan, tahan 4, hembuskan 6. Ulangi 3–5 kali saat merasa overwhelmed.',
    },
  },

  hidrasi: {
    high: {
      headline: 'Hidrasimu sudah cukup baik 💧',
      body: 'Tubuh yang terhidrasi dengan baik cenderung lebih mudah fokus dan tidak mudah lelah. Kamu sudah membangun kebiasaan yang bagus.',
      tip: 'Kalau sering lupa minum, coba kaitkan dengan kebiasaan lain — misalnya minum segelas air setiap kali buka aplikasi tertentu.',
    },
    mid: {
      headline: 'Hidrasimu sudah lumayan 🫗',
      body: 'Kamu sudah cukup minum, tapi mungkin belum terlalu konsisten sepanjang hari. Dehidrasi ringan sering tidak terasa tapi bisa memengaruhi konsentrasi.',
      tip: 'Taruh botol air di meja kerjamu sebagai pengingat visual. Tidak perlu hitung gelas — cukup pastikan botol habis sebelum sore.',
    },
    low: {
      headline: 'Mungkin tubuhmu butuh lebih banyak air 💦',
      body: 'Kurang minum air putih adalah salah satu kebiasaan yang paling mudah diperbaiki tapi sering diabaikan. Dampaknya terasa di energi, fokus, dan suasana hati.',
      tip: 'Mulai hari dengan segelas air putih sebelum kopi atau teh. Kebiasaan kecil ini lebih mudah dijaga daripada mengejar target di sore hari.',
    },
  },
};

// ─────────────────────────────────────────────
// DAILY TIPS — pool tips ringan harian
// Dipilih secara deterministik berdasarkan hash jawaban
// ─────────────────────────────────────────────
export const dailyTips = [
  {
    id: 'dt1',
    icon: '🚶',
    category: 'Gerak',
    text: 'Cobalah peregangan ringan setiap 1 jam saat duduk lama. Cukup berdiri dan gerakkan leher serta bahu selama 2 menit.',
  },
  {
    id: 'dt2',
    icon: '💧',
    category: 'Hidrasi',
    text: 'Mulai pagi dengan segelas air putih sebelum minum apapun. Tubuh kehilangan cairan saat tidur dan butuh diisi ulang.',
  },
  {
    id: 'dt3',
    icon: '🌙',
    category: 'Tidur',
    text: 'Coba redupkan lampu 30 menit sebelum tidur. Cahaya redup membantu tubuh bersiap untuk istirahat secara alami.',
  },
  {
    id: 'dt4',
    icon: '🍎',
    category: 'Makan',
    text: 'Simpan buah di tempat yang mudah terlihat. Kita cenderung makan apa yang mudah dijangkau — manfaatkan ini untuk kebiasaan baik.',
  },
  {
    id: 'dt5',
    icon: '🧘',
    category: 'Mental',
    text: 'Coba tarik napas dalam 3 kali sebelum membuka ponsel di pagi hari. Memberi jeda kecil sebelum "terhubung" bisa memengaruhi tone harianmu.',
  },
  {
    id: 'dt6',
    icon: '🌿',
    category: 'Kebiasaan',
    text: 'Perubahan kecil yang konsisten lebih berdampak daripada perubahan besar yang tidak bertahan. Pilih satu kebiasaan kecil dan jaga selama 7 hari.',
  },
  {
    id: 'dt7',
    icon: '☀️',
    category: 'Pagi',
    text: 'Paparan cahaya matahari pagi selama 10–15 menit bisa membantu ritme tubuhmu terasa lebih teratur sepanjang hari.',
  },
  {
    id: 'dt8',
    icon: '📵',
    category: 'Istirahat',
    text: 'Coba buat satu zona bebas layar di rumahmu — misalnya meja makan atau kamar tidur. Istirahat dari layar juga bentuk istirahat.',
  },
  {
    id: 'dt9',
    icon: '🥗',
    category: 'Makan',
    text: 'Makan perlahan dan tanpa distraksi sesekali. Kita cenderung makan lebih sedikit dan merasa lebih kenyang saat benar-benar memperhatikan makanan.',
  },
  {
    id: 'dt10',
    icon: '💬',
    category: 'Sosial',
    text: 'Ngobrol singkat dengan seseorang yang kamu percaya bisa jadi "reset" emosional yang sederhana tapi efektif.',
  },
  {
    id: 'dt11',
    icon: '📓',
    category: 'Refleksi',
    text: 'Coba tulis satu hal yang berjalan baik hari ini, sekecil apapun. Otak kita cenderung lebih mudah mengingat yang negatif — ini cara menyeimbangkannya.',
  },
  {
    id: 'dt12',
    icon: '🎵',
    category: 'Mood',
    text: 'Musik favoritmu bisa jadi mood booster instan. Buat playlist pendek untuk momen-momen tertentu — pagi, kerja, atau saat butuh semangat.',
  },
];

// ─────────────────────────────────────────────
// ENCOURAGEMENT — berdasarkan total skor
// ─────────────────────────────────────────────
export const encouragements = {
  high: [
    {
      headline: 'Kamu sudah membangun ritme yang bagus ✨',
      body: 'Kebiasaan baik tidak terbentuk dalam semalam — dan kamu sudah ada di sana. Yang paling penting sekarang adalah menjaganya tetap terasa menyenangkan, bukan membebani.',
    },
    {
      headline: 'Konsistensi adalah kuncinya 🌟',
      body: 'Tidak perlu sempurna setiap hari. Yang kamu lakukan secara konsisten, meski kecil, jauh lebih berdampak daripada yang dilakukan sesekali dengan sempurna.',
    },
  ],
  mid: [
    {
      headline: 'Kamu sudah di jalur yang baik 🌱',
      body: 'Ada fondasi yang sudah kamu bangun. Dari sini, satu atau dua penyesuaian kecil bisa membuat perbedaan yang terasa nyata dalam energi dan suasana harianmu.',
    },
    {
      headline: 'Setiap langkah kecil itu berarti 🚶',
      body: 'Tidak perlu mengubah segalanya sekaligus. Pilih satu area yang paling terasa relevan hari ini, dan mulai dari sana.',
    },
  ],
  low: [
    {
      headline: 'Kamu sudah mengambil langkah pertama 💛',
      body: 'Meluangkan waktu untuk refleksi seperti ini sudah berarti. Setiap orang punya titik awal yang berbeda — yang penting bukan di mana kamu mulai, tapi ke mana kamu melangkah.',
    },
    {
      headline: 'Perubahan kecil juga berarti 🌤️',
      body: 'Tidak perlu langsung mengubah semua kebiasaan. Pilih satu hal paling kecil yang bisa kamu coba hari ini — dan itu sudah cukup untuk memulai.',
    },
  ],
};

// ─────────────────────────────────────────────
// WELLNESS FACTS — fakta ringan, bukan klaim medis
// ─────────────────────────────────────────────
export const wellnessFacts = [
  {
    icon: '🧠',
    fact: 'Otak kita menggunakan sekitar 20% energi tubuh — itulah kenapa pola makan dan tidur yang baik sangat memengaruhi fokus dan suasana hati.',
  },
  {
    icon: '💧',
    fact: 'Rasa haus muncul saat tubuh sudah sedikit kekurangan cairan. Minum air secara teratur sepanjang hari lebih efektif daripada menunggu haus.',
  },
  {
    icon: '🚶',
    fact: 'Berjalan kaki 10 menit sudah cukup untuk meningkatkan suasana hati secara sementara. Tidak perlu gym untuk merasakan manfaat bergerak.',
  },
  {
    icon: '🌙',
    fact: 'Tidur bukan hanya istirahat — saat tidur, otak memproses memori dan tubuh memperbaiki sel-selnya. Kualitas tidur memengaruhi hampir semua aspek kesehatan.',
  },
  {
    icon: '🌿',
    fact: 'Kebiasaan baru rata-rata butuh 21–66 hari untuk terbentuk, tergantung kompleksitasnya. Konsistensi lebih penting daripada kesempurnaan.',
  },
  {
    icon: '😮‍💨',
    fact: 'Pernapasan dalam mengaktifkan sistem saraf parasimpatik — bagian yang bertanggung jawab atas respons "tenang". Itulah kenapa tarik napas dalam terasa menenangkan.',
  },
];
