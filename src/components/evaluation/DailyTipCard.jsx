/**
 * DailyTipCard.jsx — Evaluation component
 * Menampilkan 1–2 tip harian ringan yang dipilih berdasarkan jawaban.
 * Bukan instruksi medis — hanya saran kebiasaan sederhana.
 *
 * Props:
 * - tips: Array<{ id, icon, category, text }>
 */
export default function DailyTipCard({ tips }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">🌿</span>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">Tips Hari Ini</h3>
          <p className="text-xs text-gray-400">Pilih satu yang paling mudah kamu coba sekarang</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {tips.map((tip, i) => (
          <div
            key={tip.id}
            className="flex gap-3 items-start p-3 rounded-xl bg-gray-50 border border-gray-100"
          >
            {/* Icon + nomor */}
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-base shadow-sm">
              {tip.icon}
            </div>

            <div className="flex-1 min-w-0">
              {/* Category label */}
              <span className="inline-block text-xs font-semibold text-gray-400 mb-0.5 uppercase tracking-wide">
                {tip.category}
              </span>
              {/* Tip text */}
              <p className="text-xs text-gray-700 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
