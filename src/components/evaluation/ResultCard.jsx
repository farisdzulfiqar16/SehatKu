/**
 * ResultCard.jsx — Evaluation component
 * Halaman hasil evaluasi yang personal, informatif, dan supportif.
 *
 * Urutan konten:
 * 1. Page header
 * 2. EncouragementBanner — pesan personal berdasarkan skor total
 * 3. ScoreCircle + label
 * 4. Category breakdown dengan WellnessInsightCard per kategori
 * 5. DailyTipCard — 2 tip harian deterministik
 * 6. TipsList — saran spesifik untuk kategori skor rendah
 * 7. WellnessFactCard — satu fakta wellness ringan
 * 8. Disclaimer
 * 9. Reset button
 */
import {
  calculateScore,
  getResultLabel,
  getTips,
  DISCLAIMER_SHORT,
} from '../../utils/scoreUtils';
import {
  getEncouragement,
  getDailyTips,
  getWellnessFact,
  getCategoryWellnessInsight,
  countStrongCategories,
} from '../../utils/wellnessUtils';
import { categories } from '../../data/evaluationData';

import ScoreCircle        from './ScoreCircle';
import TipsList           from './TipsList';
import EncouragementBanner from './EncouragementBanner';
import WellnessInsightCard from './WellnessInsightCard';
import DailyTipCard       from './DailyTipCard';
import WellnessFactCard   from './WellnessFactCard';

// Mapping warna Tailwind per kategori
const colorMap = {
  indigo: { bar: 'bg-indigo-400', text: 'text-indigo-600' },
  green:  { bar: 'bg-green-500',  text: 'text-green-600'  },
  orange: { bar: 'bg-orange-400', text: 'text-orange-600' },
  purple: { bar: 'bg-purple-400', text: 'text-purple-600' },
  blue:   { bar: 'bg-blue-400',   text: 'text-blue-600'   },
};

const resultBadgeMap = {
  green:  'bg-green-100 text-green-800 border-green-200',
  blue:   'bg-blue-100 text-blue-800 border-blue-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  red:    'bg-red-100 text-red-800 border-red-200',
};

export default function ResultCard({ answers, onReset }) {
  // ── Kalkulasi skor ──
  const { categoryScores, totalScore, totalPercent } = calculateScore(answers);
  const result       = getResultLabel(totalPercent);

  // ── Wellness content ──
  const encouragement  = getEncouragement(totalPercent, totalScore);
  const dailyTips      = getDailyTips(answers, 2);
  const wellnessFact   = getWellnessFact(categoryScores);
  const strongCount    = countStrongCategories(categoryScores);

  // ── Tips untuk kategori skor rendah (dari scoreUtils) ──
  const tips = getTips(categoryScores);

  return (
    <section className="py-10 sm:py-14 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto">

        {/* ── 1. Page Header ── */}
        <div className="text-center mb-5">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Refleksi Harianmu</p>
          <h2 className="text-2xl font-bold text-gray-900">Ini Gambaranmu Hari Ini</h2>
        </div>

        {/* ── 2. Encouragement Banner ── */}
        <EncouragementBanner
          headline={encouragement.headline}
          body={encouragement.body}
          strongCount={strongCount}
        />

        {/* ── 3. Score Circle + Label ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-4 text-center">
          <ScoreCircle percent={totalPercent} />

          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mt-3 ${resultBadgeMap[result.color]}`}>
            <span>{result.emoji}</span>
            <span>{result.label}</span>
          </div>

          {/* Mini stat row */}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-sm font-bold text-gray-900">{strongCount}/5</div>
              <div className="text-xs text-gray-400">Kategori kuat</div>
            </div>
            <div className="w-px bg-gray-100" />
            <div className="text-center">
              <div className="text-sm font-bold text-gray-900">
                {Object.values(categoryScores).filter(c => c.percent < 65).length}
              </div>
              <div className="text-xs text-gray-400">Perlu perhatian</div>
            </div>
            <div className="w-px bg-gray-100" />
            <div className="text-center">
              <div className="text-sm font-bold text-green-600">{totalPercent}%</div>
              <div className="text-xs text-gray-400">Skor total</div>
            </div>
          </div>
        </div>

        {/* ── 4. Category Breakdown dengan Wellness Insight ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Gambaran Per Kebiasaan</h3>
          <p className="text-xs text-gray-400 mb-3">
            Setiap area mencerminkan kebiasaan harianmu, bukan kondisi medis.
          </p>

          <div className="space-y-3">
            {categories.map((cat) => {
              const score   = categoryScores[cat.id];
              const colors  = colorMap[cat.color];
              const label   = getResultLabel(score.percent);
              const insight = getCategoryWellnessInsight(cat.id, score.percent);

              return (
                <WellnessInsightCard
                  key={cat.id}
                  categoryId={cat.id}
                  categoryLabel={cat.label}
                  categoryIcon={cat.icon}
                  percent={score.percent}
                  colorClass={colors.text}
                  barColorClass={colors.bar}
                  insight={insight}
                  resultEmoji={label.emoji}
                />
              );
            })}
          </div>
        </div>

        {/* ── 5. Daily Tips ── */}
        <DailyTipCard tips={dailyTips} />

        {/* ── 6. Saran untuk kategori skor rendah ── */}
        <TipsList tips={tips} />

        {/* ── 7. Wellness Fact ── */}
        <WellnessFactCard fact={wellnessFact} />

        {/* ── 8. Disclaimer ── */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-6">
          <div className="flex gap-2.5 items-start">
            <span className="text-base flex-shrink-0 mt-0.5">🌿</span>
            <p className="text-xs text-green-800 leading-relaxed">{DISCLAIMER_SHORT}</p>
          </div>
        </div>

        {/* ── 9. Reset ── */}
        <div className="text-center">
          <button
            onClick={onReset}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-8 py-3 rounded-xl transition-all hover:shadow-md cursor-pointer text-sm"
          >
            Coba Evaluasi Lagi
          </button>
          <p className="text-xs text-gray-400 mt-2">
            Refleksi rutin membantu kamu lebih mengenal pola harianmu sendiri
          </p>
        </div>

      </div>
    </section>
  );
}
