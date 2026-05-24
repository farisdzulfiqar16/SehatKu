// Data pertanyaan evaluasi kebiasaan harian
// Setiap pertanyaan punya bobot skor untuk kalkulasi hasil

export const categories = [
  {
    id: 'tidur',
    label: 'Pola Tidur',
    icon: '🌙',
    color: 'indigo',
  },
  {
    id: 'aktivitas',
    label: 'Aktivitas Fisik',
    icon: '🏃',
    color: 'green',
  },
  {
    id: 'nutrisi',
    label: 'Pola Makan',
    icon: '🥗',
    color: 'orange',
  },
  {
    id: 'mental',
    label: 'Kesehatan Mental',
    icon: '🧠',
    color: 'purple',
  },
  {
    id: 'hidrasi',
    label: 'Hidrasi',
    icon: '💧',
    color: 'blue',
  },
];

export const questions = [
  // Pola Tidur
  {
    id: 'q1',
    category: 'tidur',
    text: 'Berapa jam kamu tidur rata-rata per malam?',
    type: 'choice',
    options: [
      { label: 'Kurang dari 5 jam', value: 1 },
      { label: '5–6 jam', value: 2 },
      { label: '7–8 jam', value: 4 },
      { label: 'Lebih dari 9 jam', value: 3 },
    ],
  },
  {
    id: 'q2',
    category: 'tidur',
    text: 'Seberapa sering kamu tidur dan bangun di waktu yang sama?',
    type: 'choice',
    options: [
      { label: 'Hampir tidak pernah', value: 1 },
      { label: 'Kadang-kadang', value: 2 },
      { label: 'Sering', value: 3 },
      { label: 'Selalu konsisten', value: 4 },
    ],
  },
  // Aktivitas Fisik
  {
    id: 'q3',
    category: 'aktivitas',
    text: 'Berapa hari dalam seminggu kamu berolahraga atau bergerak aktif?',
    type: 'choice',
    options: [
      { label: 'Tidak pernah', value: 1 },
      { label: '1–2 hari', value: 2 },
      { label: '3–4 hari', value: 3 },
      { label: '5 hari atau lebih', value: 4 },
    ],
  },
  {
    id: 'q4',
    category: 'aktivitas',
    text: 'Seberapa sering kamu duduk lebih dari 6 jam berturut-turut tanpa bergerak?',
    type: 'choice',
    options: [
      { label: 'Hampir setiap hari', value: 1 },
      { label: 'Beberapa kali seminggu', value: 2 },
      { label: 'Jarang', value: 3 },
      { label: 'Hampir tidak pernah', value: 4 },
    ],
  },
  // Pola Makan
  {
    id: 'q5',
    category: 'nutrisi',
    text: 'Seberapa sering kamu makan sayur dan buah dalam sehari?',
    type: 'choice',
    options: [
      { label: 'Hampir tidak pernah', value: 1 },
      { label: 'Sekali sehari', value: 2 },
      { label: '2–3 kali sehari', value: 3 },
      { label: 'Setiap makan', value: 4 },
    ],
  },
  {
    id: 'q6',
    category: 'nutrisi',
    text: 'Seberapa sering kamu melewatkan sarapan?',
    type: 'choice',
    options: [
      { label: 'Hampir setiap hari', value: 1 },
      { label: 'Beberapa kali seminggu', value: 2 },
      { label: 'Jarang', value: 3 },
      { label: 'Hampir tidak pernah', value: 4 },
    ],
  },
  // Kesehatan Mental
  {
    id: 'q7',
    category: 'mental',
    text: 'Bagaimana tingkat stres kamu dalam seminggu terakhir?',
    type: 'choice',
    options: [
      { label: 'Sangat tinggi, sulit dikendalikan', value: 1 },
      { label: 'Cukup tinggi', value: 2 },
      { label: 'Sedang, masih bisa diatasi', value: 3 },
      { label: 'Rendah, merasa tenang', value: 4 },
    ],
  },
  {
    id: 'q8',
    category: 'mental',
    text: 'Seberapa sering kamu meluangkan waktu untuk relaksasi atau hobi?',
    type: 'choice',
    options: [
      { label: 'Hampir tidak pernah', value: 1 },
      { label: 'Sekali seminggu', value: 2 },
      { label: 'Beberapa kali seminggu', value: 3 },
      { label: 'Setiap hari', value: 4 },
    ],
  },
  // Hidrasi
  {
    id: 'q9',
    category: 'hidrasi',
    text: 'Berapa gelas air putih yang kamu minum per hari?',
    type: 'choice',
    options: [
      { label: 'Kurang dari 4 gelas', value: 1 },
      { label: '4–5 gelas', value: 2 },
      { label: '6–7 gelas', value: 3 },
      { label: '8 gelas atau lebih', value: 4 },
    ],
  },
  {
    id: 'q10',
    category: 'hidrasi',
    text: 'Seberapa sering kamu mengonsumsi minuman manis (soda, teh manis, dll)?',
    type: 'choice',
    options: [
      { label: 'Setiap hari, lebih dari sekali', value: 1 },
      { label: 'Setiap hari', value: 2 },
      { label: 'Beberapa kali seminggu', value: 3 },
      { label: 'Jarang atau tidak pernah', value: 4 },
    ],
  },
];

// Hitung skor per kategori dan total
export function calculateScore(answers) {
  const categoryScores = {};

  categories.forEach((cat) => {
    const catQuestions = questions.filter((q) => q.category === cat.id);
    const total = catQuestions.reduce((sum, q) => {
      return sum + (answers[q.id] ?? 0);
    }, 0);
    const maxScore = catQuestions.length * 4;
    categoryScores[cat.id] = {
      score: total,
      max: maxScore,
      percent: Math.round((total / maxScore) * 100),
    };
  });

  const totalScore = Object.values(categoryScores).reduce(
    (sum, c) => sum + c.score,
    0
  );
  const maxTotal = questions.length * 4;
  const totalPercent = Math.round((totalScore / maxTotal) * 100);

  return { categoryScores, totalScore, maxTotal, totalPercent };
}

// Tentukan label hasil berdasarkan persentase
export function getResultLabel(percent) {
  if (percent >= 80) return { label: 'Sangat Baik', color: 'green', emoji: '🌟' };
  if (percent >= 60) return { label: 'Cukup Baik', color: 'blue', emoji: '👍' };
  if (percent >= 40) return { label: 'Perlu Perhatian', color: 'yellow', emoji: '⚠️' };
  return { label: 'Perlu Perbaikan', color: 'red', emoji: '🔴' };
}

// Tips per kategori berdasarkan skor
export function getTips(categoryScores) {
  const tips = [];

  if (categoryScores.tidur?.percent < 60) {
    tips.push({
      category: 'Pola Tidur',
      icon: '🌙',
      tip: 'Coba tetapkan jadwal tidur yang konsisten. Tidur 7–8 jam per malam sangat penting untuk pemulihan tubuh.',
    });
  }
  if (categoryScores.aktivitas?.percent < 60) {
    tips.push({
      category: 'Aktivitas Fisik',
      icon: '🏃',
      tip: 'Mulai dengan 30 menit jalan kaki setiap hari. Aktivitas ringan pun sudah sangat bermanfaat.',
    });
  }
  if (categoryScores.nutrisi?.percent < 60) {
    tips.push({
      category: 'Pola Makan',
      icon: '🥗',
      tip: 'Usahakan makan sayur dan buah setiap hari. Jangan lewatkan sarapan untuk menjaga energi sepanjang hari.',
    });
  }
  if (categoryScores.mental?.percent < 60) {
    tips.push({
      category: 'Kesehatan Mental',
      icon: '🧠',
      tip: 'Luangkan waktu 15–20 menit sehari untuk aktivitas yang kamu nikmati. Kelola stres dengan teknik pernapasan atau meditasi ringan.',
    });
  }
  if (categoryScores.hidrasi?.percent < 60) {
    tips.push({
      category: 'Hidrasi',
      icon: '💧',
      tip: 'Targetkan 8 gelas air putih per hari. Kurangi konsumsi minuman manis dan ganti dengan air putih atau infused water.',
    });
  }

  return tips;
}
