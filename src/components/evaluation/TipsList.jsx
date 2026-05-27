/**
 * TipsList.jsx — Evaluation component
 * Polished: card lebih clean, action pill lebih prominent,
 * empty state lebih celebratory.
 */
export default function TipsList({ tips }) {
  if (tips.length === 0) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 border border-green-100 rounded-2xl p-4 mb-4 flex gap-3 items-start">
        <div className="w-9 h-9 bg-white border border-green-100 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
          🎉
        </div>
        <div>
          <p className="text-xs font-semibold text-green-800 mb-0.5">Kebiasaanmu sudah cukup seimbang!</p>
          <p className="text-xs text-green-700 leading-relaxed">
            Tidak ada saran khusus saat ini. Terus jaga ritme yang sudah kamu bangun ya.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-base flex-shrink-0">
          💡
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">Saran Ringan untuk Dicoba</h3>
          <p className="text-xs text-gray-400">Pilih satu yang paling terasa relevan untukmu</p>
        </div>
      </div>

      <div className="space-y-2.5 mt-3">
        {tips.map((tip) => (
          <div
            key={tip.category}
            className="rounded-xl border border-gray-100 overflow-hidden transition-all duration-150 hover:border-gray-200 hover:shadow-sm"
          >
            {/* Tip header */}
            <div className="flex items-center gap-2 px-3.5 py-2 bg-gray-50 border-b border-gray-100">
              <span className="text-sm">{tip.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{tip.category}</span>
            </div>

            {/* Content */}
            <div className="px-3.5 py-3 bg-white">
              <p className="text-xs text-gray-600 leading-relaxed mb-2.5">{tip.suggestion}</p>
              {tip.action && (
                <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-green-100">
                  <span className="text-green-500">→</span>
                  <span>{tip.action}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center">
        Saran ini bersifat umum dan tidak menggantikan panduan dari tenaga kesehatan.
      </p>
    </div>
  );
}
