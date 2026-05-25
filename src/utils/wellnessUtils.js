/**
 * wellnessUtils.js
 * Logic ringan untuk memilih konten wellness yang tepat
 * berdasarkan skor dan jawaban pengguna.
 *
 * Semua fungsi pure — tidak ada side effect, mudah ditest.
 */

import {
  categoryInsights,
  dailyTips,
  encouragements,
  wellnessFacts,
} from '../data/wellnessContent';

/**
 * Tentukan level (high/mid/low) dari persentase skor.
 * @param {number} percent
 * @returns {'high' | 'mid' | 'low'}
 */
export function getLevel(percent) {
  if (percent >= 70) return 'high';
  if (percent >= 45) return 'mid';
  return 'low';
}

/**
 * Ambil insight untuk satu kategori berdasarkan skornya.
 * @param {string} categoryId
 * @param {number} percent
 * @returns {{ headline, body, tip } | null}
 */
export function getCategoryWellnessInsight(categoryId, percent) {
  const level = getLevel(percent);
  return categoryInsights[categoryId]?.[level] ?? null;
}

/**
 * Pilih encouragement berdasarkan total skor.
 * Dipilih secara deterministik dari pool agar tidak random setiap render.
 * @param {number} totalPercent
 * @param {number} seed - angka untuk memilih dari pool (misal: totalScore)
 * @returns {{ headline, body }}
 */
export function getEncouragement(totalPercent, seed = 0) {
  const level = getLevel(totalPercent);
  const pool  = encouragements[level];
  return pool[seed % pool.length];
}

/**
 * Pilih daily tip berdasarkan hash sederhana dari jawaban.
 * Deterministik: jawaban yang sama selalu menghasilkan tip yang sama.
 * @param {Object} answers - { [questionId]: value }
 * @param {number} count - jumlah tip yang diambil (default 2)
 * @returns {Array}
 */
export function getDailyTips(answers, count = 2) {
  // Buat hash sederhana dari total nilai jawaban
  const total = Object.values(answers).reduce((sum, v) => sum + v, 0);

  // Ambil tip dengan offset berbeda agar tidak selalu tip pertama
  const result = [];
  for (let i = 0; i < count; i++) {
    const index = (total + i * 3) % dailyTips.length;
    result.push(dailyTips[index]);
  }
  return result;
}

/**
 * Pilih satu wellness fact berdasarkan kategori dengan skor terendah.
 * @param {Object} categoryScores - { [categoryId]: { percent } }
 * @returns {{ icon, fact }}
 */
export function getWellnessFact(categoryScores) {
  // Temukan kategori dengan skor terendah
  const lowestEntry = Object.entries(categoryScores).reduce(
    (min, [, val]) => (val.percent < min.percent ? val : min),
    { percent: 101 }
  );

  // Gunakan percent terendah sebagai seed untuk memilih fact
  const seed = Math.round(lowestEntry.percent / 10);
  return wellnessFacts[seed % wellnessFacts.length];
}

/**
 * Tentukan kategori mana yang paling perlu perhatian (skor terendah).
 * @param {Object} categoryScores
 * @returns {string} categoryId
 */
export function getWeakestCategory(categoryScores) {
  return Object.entries(categoryScores).reduce(
    (min, [id, val]) => (val.percent < min.percent ? { id, percent: val.percent } : min),
    { id: null, percent: 101 }
  ).id;
}

/**
 * Hitung berapa kategori yang sudah di level 'high'.
 * Digunakan untuk pesan apresiasi.
 * @param {Object} categoryScores
 * @returns {number}
 */
export function countStrongCategories(categoryScores) {
  return Object.values(categoryScores).filter((c) => c.percent >= 70).length;
}
