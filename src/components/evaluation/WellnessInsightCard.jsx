/**
 * WellnessInsightCard.jsx — Evaluation component
 * Card insight per kategori yang muncul di dalam breakdown hasil.
 * Menampilkan headline, body, dan satu tip ringan.
 *
 * Props:
 * - categoryId: string
 * - categoryLabel: string
 * - categoryIcon: string
 * - percent: number
 * - colorClass: string — warna teks untuk persentase
 * - barColorClass: string — warna progress bar
 * - insight: { headline, body, tip } | null
 * - resultEmoji: string
 */
import ProgressBar from '../common/ProgressBar';

export default function WellnessInsightCard({
  categoryLabel,
  categoryIcon,
  percent,
  colorClass,
  barColorClass,
  insight,
  resultEmoji,
}) {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden">
      {/* ── Header row ── */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-base">{categoryIcon}</span>
          <span className="text-xs font-semibold text-gray-800">{categoryLabel}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs">{resultEmoji}</span>
          <span className={`text-xs font-bold ${colorClass}`}>{percent}%</span>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="px-3.5 pt-2.5 pb-1">
        <ProgressBar percent={percent} colorClass={barColorClass} height="h-1.5" />
      </div>

      {/* ── Insight content ── */}
      {insight && (
        <div className="px-3.5 pb-3 pt-2">
          {/* Headline insight */}
          <p className="text-xs font-semibold text-gray-700 mb-1 leading-snug">
            {insight.headline}
          </p>

          {/* Body insight */}
          <p className="text-xs text-gray-500 leading-relaxed mb-2.5">
            {insight.body}
          </p>

          {/* Tip pill */}
          {insight.tip && (
            <div className="flex gap-2 items-start bg-green-50 border border-green-100 rounded-lg px-3 py-2">
              <span className="text-green-500 text-xs mt-0.5 flex-shrink-0">💡</span>
              <p className="text-xs text-green-800 leading-relaxed">{insight.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
