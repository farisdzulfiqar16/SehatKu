/**
 * ResultCard.jsx — Evaluation component
 * Menampilkan refleksi kebiasaan harian secara personal dan supportif.
 * Tone: warm, informatif, tidak menghakimi, bukan diagnostik.
 */
import {
  calculateScore,
  getResultLabel,
  getResultMessage,
  getCategoryInsight,
  getTips,
  DISCLAIMER_SHORT,
} from '../../utils/scoreUtils';
import { categories } from '../../data/evaluationData';
import ScoreCircle from './ScoreCircle';
import TipsList from './TipsList';
import ProgressBar from '../common/ProgressBar';

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
  const { categoryScores, totalPercent } = calculateScore(answers);
  const result  = getResultLabel(totalPercent);
  const message = getResultMessage(totalPercent);
  const tips    = getTips(categoryScores);

  return (
    <section className="py-10 sm:py-14 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto">

        {/* ── Page Header ── */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Refleksi Harianmu</p>
          <h2 className="text-2xl font-bold text-gray-900">Ini Gambaranmu Hari Ini</h2>
        </div>

        {/* ── Score Card ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-4 text-center">
          <ScoreCircle percent={totalPercent} />

          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mt-3 ${resultBadgeMap[result.color]}`}>
            <span>{result.emoji}</span>
            <span>{result.label}</span>
          </div>

          <p className="text-gray-500 text-sm mt-2.5 max-w-xs mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        {/* ── Category Breakdown ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Gambaran Per Kebiasaan</h3>
          <p className="text-xs text-gray-400 mb-4">Setiap area mencerminkan kebiasaan harianmu, bukan kondisi medis.</p>

          <div className="space-y-4">
            {categories.map((cat) => {
              const score   = categoryScores[cat.id];
              const colors  = colorMap[cat.color];
              const label   = getResultLabel(score.percent);
              const insight = getCategoryInsight(score.percent, cat.id);

              return (
                <div key={cat.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">{cat.icon}</span>
                      <span className="text-xs font-medium text-gray-700">{cat.label}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">{label.emoji}</span>
                      <span className={`text-xs font-bold ${colors.text}`}>{score.percent}%</span>
                    </div>
                  </div>
                  <ProgressBar percent={score.percent} colorClass={colors.bar} height="h-2" />
                  {insight && (
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{insight}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Suggestions ── */}
        <TipsList tips={tips} />

        {/* ── Disclaimer ── */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-6">
          <div className="flex gap-2.5 items-start">
            <span className="text-base flex-shrink-0 mt-0.5">🌿</span>
            <p className="text-xs text-green-800 leading-relaxed">{DISCLAIMER_SHORT}</p>
          </div>
        </div>

        {/* ── Actions ── */}
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
