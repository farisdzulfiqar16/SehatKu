import { calculateScore, getResultLabel, getTips, categories } from '../data/questions';

const colorMap = {
  indigo: { bar: 'bg-indigo-500', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  green: { bar: 'bg-green-500', bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  orange: { bar: 'bg-orange-500', bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  purple: { bar: 'bg-purple-500', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  blue: { bar: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
};

const resultColorMap = {
  green: 'bg-green-100 text-green-800 border-green-300',
  blue: 'bg-blue-100 text-blue-800 border-blue-300',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  red: 'bg-red-100 text-red-800 border-red-300',
};

export default function ResultCard({ answers, onReset }) {
  const { categoryScores, totalPercent } = calculateScore(answers);
  const result = getResultLabel(totalPercent);
  const tips = getTips(categoryScores);

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">{result.emoji}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hasil Evaluasimu</h2>
          <p className="text-gray-500 text-sm">Berikut ringkasan kebiasaan harianmu</p>
        </div>

        {/* Total Score Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-6 text-center">
          <div className="relative inline-flex items-center justify-center mb-4">
            {/* Circle Progress */}
            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#f1f5f9" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="50"
                fill="none"
                stroke="#16a34a"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - totalPercent / 100)}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute text-center">
              <div className="text-3xl font-bold text-gray-900">{totalPercent}%</div>
              <div className="text-xs text-gray-500">Skor Total</div>
            </div>
          </div>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${resultColorMap[result.color]}`}>
            <span>{result.emoji}</span>
            <span>{result.label}</span>
          </div>

          <p className="text-gray-500 text-sm mt-3 max-w-sm mx-auto">
            {totalPercent >= 80
              ? 'Luar biasa! Kebiasaan harianmu sudah sangat baik. Pertahankan terus!'
              : totalPercent >= 60
              ? 'Bagus! Kamu sudah di jalur yang benar. Ada beberapa area yang bisa ditingkatkan.'
              : totalPercent >= 40
              ? 'Beberapa kebiasaanmu perlu perhatian lebih. Yuk mulai perbaiki satu per satu!'
              : 'Saatnya mulai perubahan positif. Langkah kecil setiap hari akan membuat perbedaan besar.'}
          </p>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-5">Detail Per Kategori</h3>
          <div className="space-y-4">
            {categories.map((cat) => {
              const score = categoryScores[cat.id];
              const colors = colorMap[cat.color];
              const label = getResultLabel(score.percent);

              return (
                <div key={cat.id}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{cat.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{cat.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{label.emoji}</span>
                      <span className={`text-sm font-bold ${colors.text}`}>{score.percent}%</span>
                    </div>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colors.bar} rounded-full transition-all duration-700`}
                      style={{ width: `${score.percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips Section */}
        {tips.length > 0 && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Tips untuk Kamu</h3>
            <p className="text-xs text-gray-500 mb-5">Berdasarkan area yang perlu ditingkatkan</p>
            <div className="space-y-3">
              {tips.map((tip) => (
                <div
                  key={tip.category}
                  className="flex gap-3 p-4 bg-green-50 rounded-xl border border-green-100"
                >
                  <span className="text-xl flex-shrink-0">{tip.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-green-700 mb-1">{tip.category}</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{tip.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 text-center">
          <p className="text-amber-700 text-xs leading-relaxed">
            ⚠️ <strong>Catatan:</strong> Hasil ini bukan diagnosis medis. SehatKu hanya membantu kamu 
            merefleksikan kebiasaan harian. Untuk masalah kesehatan serius, konsultasikan dengan tenaga medis profesional.
          </p>
        </div>

        {/* Reset Button */}
        <div className="text-center">
          <button
            onClick={onReset}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg cursor-pointer"
          >
            Ulangi Evaluasi
          </button>
          <p className="text-xs text-gray-400 mt-3">Evaluasi ulang untuk memantau perkembanganmu</p>
        </div>
      </div>
    </section>
  );
}
