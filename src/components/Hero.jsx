export default function Hero({ onStartEval }) {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-16 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span>✨</span>
              <span>Evaluasi Kebiasaan Harian</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kenali Pola{' '}
              <span className="text-green-600">Kesehatanmu</span>{' '}
              Hari Ini
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              SehatKu membantu kamu mengevaluasi kebiasaan harian — dari pola tidur, aktivitas fisik, 
              hingga kesehatan mental. Bukan diagnosis, tapi cermin untuk refleksi diri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onStartEval}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Mulai Evaluasi Gratis →
              </button>
              <a
                href="#cara-kerja"
                className="border border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-700 font-semibold px-8 py-3.5 rounded-xl text-base transition-colors text-center"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center lg:justify-start">
              <div>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <div className="text-sm text-gray-500">Kategori</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10</div>
                <div className="text-sm text-gray-500">Pertanyaan</div>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900">&lt;3 mnt</div>
                <div className="text-sm text-gray-500">Waktu Pengerjaan</div>
              </div>
            </div>
          </div>

          {/* Illustration Card */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                    🌿
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Laporan Harianmu</div>
                    <div className="text-xs text-gray-500">Evaluasi hari ini</div>
                  </div>
                </div>

                {/* Progress Bars */}
                {[
                  { label: 'Pola Tidur', icon: '🌙', percent: 75, color: 'bg-indigo-500' },
                  { label: 'Aktivitas Fisik', icon: '🏃', percent: 60, color: 'bg-green-500' },
                  { label: 'Pola Makan', icon: '🥗', percent: 85, color: 'bg-orange-500' },
                  { label: 'Kesehatan Mental', icon: '🧠', percent: 50, color: 'bg-purple-500' },
                  { label: 'Hidrasi', icon: '💧', percent: 90, color: 'bg-blue-500' },
                ].map((item) => (
                  <div key={item.label} className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <span>{item.icon}</span> {item.label}
                      </span>
                      <span className="text-xs font-semibold text-gray-700">{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Skor Keseluruhan</span>
                  <span className="text-lg font-bold text-green-600">72%</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Cukup Baik 👍
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
