/**
 * ResultCard.jsx — Evaluation component
 * Scroll-triggered reveal untuk setiap section hasil.
 * Progress bar di WellnessInsightCard fill saat terlihat.
 * ScoreCircle animasi saat masuk viewport.
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

import ScoreCircle          from './ScoreCircle';
import TipsList             from './TipsList';
import EncouragementBanner  from './EncouragementBanner';
import WellnessInsightCard  from './WellnessInsightCard';
import DailyTipCard         from './DailyTipCard';
import WellnessFactCard     from './WellnessFactCard';
import Reveal               from '../common/Reveal';

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
  const { categoryScores, totalScore, totalPercent } = calculateScore(answers);
  const result         = getResultLabel(totalPercent);
  const encouragement  = getEncouragement(totalPercent, totalScore);
  const dailyTips      = getDailyTips(answers, 2);
  const wellnessFact   = getWellnessFact(categoryScores);
  const strongCount    = countStrongCategories(categoryScores);
  const tips           = getTips(categoryScores);
  const needsAttention = Object.values(categoryScores).filter(c => c.percent < 65).length;

  return (
    <section className="py-10 sm:py-14 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">

        {/* ── 1. Page Header ── */}
        <Reveal variant="fadeUp">
          <div className="text-center mb-5">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Refleksi Harianmu</p>
            <h2 className="text-2xl font-bold text-gray-900">Ini Gambaranmu Hari Ini</h2>
          </div>
        </Reveal>

        {/* ── 2. Encouragement Banner ── */}
        <Reveal variant="fadeUp" delay={60}>
          <EncouragementBanner
            headline={encouragement.headline}
            body={encouragement.body}
            strongCount={strongCount}
          />
        </Reveal>

        {/* ── 3. Score + Stats ── */}
        <Reveal variant="scaleIn" delay={80}>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-4">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex-shrink-0">
                <ScoreCircle percent={totalPercent} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mb-2 ${resultBadgeMap[result.color]}`}>
                  <span>{result.emoji}</span>
                  <span>{result.label}</span>
                </div>
                <div className="flex justify-center sm:justify-start gap-4 mt-3 pt-3 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{strongCount}</div>
                    <div className="text-xs text-gray-400">Kategori kuat</div>
                  </div>
                  <div className="w-px bg-gray-100" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700">{needsAttention}</div>
                    <div className="text-xs text-gray-400">Perlu perhatian</div>
                  </div>
                  <div className="w-px bg-gray-100" />
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{totalPercent}%</div>
                    <div className="text-xs text-gray-400">Skor total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 4. Category Breakdown ── */}
        <Reveal variant="fadeUp" delay={40}>
          <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 text-sm">Gambaran Per Kebiasaan</h3>
              <span className="text-xs text-gray-400">Bukan kondisi medis</span>
            </div>
            <div className="space-y-2.5">
              {categories.map((cat, i) => {
                const score   = categoryScores[cat.id];
                const colors  = colorMap[cat.color];
                const label   = getResultLabel(score.percent);
                const insight = getCategoryWellnessInsight(cat.id, score.percent);

                return (
                  // Setiap insight card reveal dengan stagger
                  // threshold rendah karena ada di dalam container
                  <Reveal key={cat.id} variant="fadeUp" delay={i * 60} threshold={0.05}>
                    <WellnessInsightCard
                      categoryId={cat.id}
                      categoryLabel={cat.label}
                      categoryIcon={cat.icon}
                      percent={score.percent}
                      colorClass={colors.text}
                      barColorClass={colors.bar}
                      insight={insight}
                      resultEmoji={label.emoji}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* ── 5. Daily Tips ── */}
        <Reveal variant="fadeUp" delay={60}>
          <DailyTipCard tips={dailyTips} />
        </Reveal>

        {/* ── 6. Saran kategori rendah ── */}
        <Reveal variant="fadeUp" delay={80}>
          <TipsList tips={tips} />
        </Reveal>

        {/* ── 7. Wellness Fact ── */}
        <Reveal variant="slideRight" delay={40}>
          <WellnessFactCard fact={wellnessFact} />
        </Reveal>

        {/* ── 8. Disclaimer ── */}
        <Reveal variant="fadeIn" delay={60}>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-6">
            <div className="flex gap-2.5 items-start">
              <span className="text-base flex-shrink-0 mt-0.5">🌿</span>
              <p className="text-xs text-green-800 leading-relaxed">{DISCLAIMER_SHORT}</p>
            </div>
          </div>
        </Reveal>

        {/* ── 9. Reset ── */}
        <Reveal variant="fadeUp" delay={40}>
          <div className="text-center">
            <button
              onClick={onReset}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 cursor-pointer text-sm"
            >
              Coba Evaluasi Lagi
            </button>
            <p className="text-xs text-gray-400 mt-2">
              Refleksi rutin membantu kamu lebih mengenal pola harianmu sendiri
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
