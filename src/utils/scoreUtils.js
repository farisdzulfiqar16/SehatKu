/**
 * scoreUtils.js
 * Logic kalkulasi skor, label refleksi, pesan, dan saran kebiasaan.
 *
 * Catatan wording:
 * - Semua teks bersifat reflektif dan informatif, bukan diagnostik
 * - Hindari kata yang menghakimi atau terkesan medis
 * - Fokus pada awareness, apresiasi, dan dorongan positif
 */

import { categories, questions } from '../data/evaluationData';

/**
 * Hitung skor per kategori dan total dari jawaban pengguna.
 * @param {Object} answers - { [questionId]: value }
 * @returns {{ categoryScores, totalScore, maxTotal, totalPercent }}
 */
export function calculateScore(answers) {
  const categoryScores = {};

  categories.forEach((cat) => {
    const catQuestions = questions.filter((q) => q.category === cat.id);
    const score = catQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const max = catQuestions.length * 4;

    categoryScores[cat.id] = {
      score,
      max,
      percent: Math.round((score / max) * 100),
    };
  });

  const totalScore = Object.values(categoryScores).reduce((sum, c) => sum + c.score, 0);
  const maxTotal = questions.length * 4;
  const totalPercent = Math.round((totalScore / maxTotal) * 100);

  return { categoryScores, totalScore, maxTotal, totalPercent };
}

/**
 * Label refleksi berdasarkan persentase skor.
 * Wording sengaja dibuat positif dan tidak menghakimi.
 *
 * @param {number} percent
 * @returns {{ label: string, color: string, emoji: string }}
 */
export function getResultLabel(percent) {
  if (percent >= 80) return { label: 'Kebiasaanmu Sudah Oke Banget',  color: 'green',  emoji: '🌟' };
  if (percent >= 60) return { label: 'Kamu di Jalur yang Baik',        color: 'blue',   emoji: '🌱' };
  if (percent >= 40) return { label: 'Ada Ruang untuk Berkembang',     color: 'yellow', emoji: '✨' };
  return               { label: 'Yuk Mulai dari Langkah Kecil',   color: 'orange', emoji: '🌤️' };
}

/**
 * Pesan refleksi personal berdasarkan total persentase.
 * Tone: hangat, supportif, tidak menghakimi.
 *
 * @param {number} percent
 * @returns {string}
 */
export function getResultMessage(percent) {
  if (percent >= 80) {
    return 'Kamu sudah membangun kebiasaan harian yang cukup seimbang. Terus jaga ritme ini ya — konsistensi adalah kuncinya.';
  }
  if (percent >= 60) {
    return 'Secara keseluruhan kebiasaanmu sudah cukup baik. Ada beberapa area yang bisa kamu eksplorasi lebih lanjut untuk merasa lebih segar setiap hari.';
  }
  if (percent >= 40) {
    return 'Terima kasih sudah meluangkan waktu untuk refleksi. Ada beberapa kebiasaan yang mungkin bisa kamu coba sesuaikan sedikit demi sedikit.';
  }
  return 'Setiap orang punya titik awal yang berbeda, dan kamu sudah mengambil langkah pertama dengan refleksi ini. Perubahan kecil yang konsisten bisa membuat perbedaan besar.';
}

/**
 * Pesan refleksi singkat per kategori berdasarkan skor.
 * Digunakan sebagai insight di bawah progress bar kategori.
 *
 * @param {number} percent
 * @param {string} categoryId
 * @returns {string}
 */
export function getCategoryInsight(percent, categoryId) {
  const insights = {
    tidur: {
      high:   'Pola tidurmu terlihat cukup teratur. Pertahankan ritme ini.',
      mid:    'Tidurmu sudah lumayan — sedikit konsistensi bisa membuatnya lebih berkualitas.',
      low:    'Kualitas tidur sangat memengaruhi energi harian. Mungkin ada yang bisa disesuaikan.',
    },
    aktivitas: {
      high:   'Kamu cukup aktif bergerak. Tubuhmu pasti berterima kasih.',
      mid:    'Aktivitas fisikmu sudah ada, tinggal dijaga konsistensinya.',
      low:    'Gerakan ringan setiap hari bisa memberi dampak yang terasa nyata.',
    },
    nutrisi: {
      high:   'Pola makanmu terlihat cukup teratur dan beragam.',
      mid:    'Kebiasaan makanmu sudah oke, ada beberapa hal kecil yang bisa dicoba.',
      low:    'Pola makan yang lebih teratur bisa membantu energi dan fokusmu sepanjang hari.',
    },
    mental: {
      high:   'Kamu tampaknya cukup baik dalam mengelola ritme emosionalmu.',
      mid:    'Kesejahteraan mentalmu sudah terjaga — terus luangkan waktu untuk dirimu sendiri.',
      low:    'Meluangkan waktu untuk diri sendiri, sekecil apapun, bisa sangat berarti.',
    },
    hidrasi: {
      high:   'Asupan cairanmu sudah cukup baik. Tubuh yang terhidrasi = pikiran yang lebih jernih.',
      mid:    'Hidrasimu sudah lumayan — sedikit lebih konsisten bisa terasa bedanya.',
      low:    'Minum air yang cukup adalah salah satu kebiasaan paling sederhana yang berdampak besar.',
    },
  };

  const level = percent >= 70 ? 'high' : percent >= 45 ? 'mid' : 'low';
  return insights[categoryId]?.[level] ?? '';
}

/**
 * Saran kebiasaan ringan untuk kategori yang skornya di bawah threshold.
 * Tone: mengajak, bukan memerintah. Tidak menggunakan istilah medis.
 *
 * @param {Object} categoryScores - hasil dari calculateScore
 * @param {number} threshold - batas persentase (default 65)
 * @returns {Array<{ category, icon, suggestion, action }>}
 */
export function getTips(categoryScores, threshold = 65) {
  const suggestionData = {
    tidur: {
      category: 'Pola Tidur',
      icon: '🌙',
      suggestion: 'Tidur dan bangun di jam yang kurang lebih sama setiap hari bisa membantu tubuhmu merasa lebih segar secara alami.',
      action: 'Coba tetapkan satu jam tidur yang ingin kamu jaga minggu ini.',
    },
    aktivitas: {
      category: 'Aktivitas Fisik',
      icon: '🚶',
      suggestion: 'Tidak harus olahraga berat — jalan kaki 20–30 menit atau peregangan ringan sudah cukup untuk memulai.',
      action: 'Pilih satu aktivitas ringan yang kamu nikmati dan coba lakukan 3x minggu ini.',
    },
    nutrisi: {
      category: 'Pola Makan',
      icon: '🥗',
      suggestion: 'Sarapan ringan dan menambahkan satu porsi sayur atau buah setiap hari adalah langkah kecil yang berdampak nyata.',
      action: 'Coba tambahkan satu buah atau sayuran ke menu makanmu hari ini.',
    },
    mental: {
      category: 'Kesejahteraan Mental',
      icon: '🧘',
      suggestion: 'Meluangkan 10–15 menit sehari untuk aktivitas yang kamu nikmati — apapun itu — bisa membantu menjaga keseimbangan emosional.',
      action: 'Jadwalkan satu "me time" kecil hari ini, meski hanya 10 menit.',
    },
    hidrasi: {
      category: 'Hidrasi',
      icon: '💧',
      suggestion: 'Minum air putih yang cukup sepanjang hari bisa membantu konsentrasi dan energimu terasa lebih stabil.',
      action: 'Coba taruh segelas air di meja kerjamu sebagai pengingat visual.',
    },
  };

  return Object.entries(categoryScores)
    .filter(([, val]) => val.percent < threshold)
    .map(([key]) => suggestionData[key])
    .filter(Boolean);
}

/**
 * Teks disclaimer ringan yang konsisten digunakan di seluruh app.
 */
export const DISCLAIMER_TEXT =
  'Hasil ini bersifat informatif dan merupakan gambaran umum kebiasaan harianmu — bukan penilaian medis. ' +
  'Setiap orang unik, dan refleksi ini hanya salah satu cara untuk lebih mengenal diri sendiri. ' +
  'Jika kamu memiliki kekhawatiran kesehatan tertentu, berkonsultasi dengan tenaga kesehatan adalah langkah terbaik.';

export const DISCLAIMER_SHORT =
  'Hasil ini bersifat informatif, bukan penilaian medis. Untuk kekhawatiran kesehatan, konsultasikan dengan tenaga kesehatan.';
