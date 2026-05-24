/**
 * TipsList.jsx — Evaluation component
 * Saran kebiasaan ringan — bukan instruksi medis.
 * Setiap saran punya "action" kecil yang konkret dan mudah dicoba.
 */
export default function TipsList({ tips }) {
  if (tips.length === 0) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-4 flex gap-2.5 items-start">
        <span className="text-base flex-shrink-0">🎉</span>
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
      <div className="flex items-center gap-2 mb-1">
        <span className="text-base">💡</span>
        <h3 className="font-semibold text-gray-900 text-sm">Saran Ringan untuk Dicoba</h3>
      </div>
      <p className="text-xs text-gray-400 mb-3 ml-6">
        Pilih satu yang paling terasa relevan untukmu hari ini.
      </p>

      <div className="space-y-3">
        {tips.map((tip) => (
          <div
            key={tip.category}
            className="rounded-xl border border-gray-100 overflow-hidden"
          >
            {/* Tip header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-100">
              <span className="text-sm">{tip.icon}</span>
              <span className="text-xs font-semibold text-gray-700">{tip.category}</span>
            </div>

            {/* Suggestion */}
            <div className="px-3 py-2.5">
              <p className="text-xs text-gray-600 leading-relaxed mb-2">{tip.suggestion}</p>

              {/* Action pill */}
              {tip.action && (
                <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-lg border border-green-100">
                  <span>→</span>
                  <span>{tip.action}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3 text-center leading-relaxed">
        Saran ini bersifat umum dan tidak menggantikan panduan dari tenaga kesehatan.
      </p>
    </div>
  );
}
