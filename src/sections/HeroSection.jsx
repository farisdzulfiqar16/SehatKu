/**
 * HeroSection.jsx — Homepage section
 * Mobile-first: teks lebih compact, preview card lebih kecil,
 * stats lebih ringkas, spacing lebih personal.
 */
import Badge from '../components/common/Badge';
import ProgressBar from '../components/common/ProgressBar';

const previewBars = [
  { label: 'Pola Tidur',       icon: '🌙', percent: 75, color: 'bg-indigo-400' },
  { label: 'Aktivitas Fisik',  icon: '🏃', percent: 60, color: 'bg-green-500'  },
  { label: 'Pola Makan',       icon: '🥗', percent: 85, color: 'bg-orange-400' },
  { label: 'Kesehatan Mental', icon: '🧠', percent: 50, color: 'bg-purple-400' },
  { label: 'Hidrasi',          icon: '💧', percent: 90, color: 'bg-blue-400'   },
];

const stats = [
  { value: '5',      label: 'Kategori'   },
  { value: '10',     label: 'Pertanyaan' },
  { value: '<3 mnt', label: 'Selesai'    },
];

export default function HeroSection({ onStartEval }) {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white pt-10 pb-14 px-4 sm:pt-14 sm:pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Text Content ── */}
          <div className="flex-1 text-center lg:text-left">
            <Badge icon="🌿" label="Evaluasi Kebiasaan Harian" className="mb-4" />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Refleksi Kebiasaan{' '}
              <span className="text-green-600">Harianmu</span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
              SehatKu membantu kamu mengenal pola harianmu sendiri — dari tidur, gerak, makan,
              hingga kesejahteraan mental. Bukan penilaian, tapi cermin untuk refleksi diri.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <button
                onClick={onStartEval}
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all hover:shadow-md cursor-pointer"
              >
                Mulai Refleksi Diri →
              </button>
              <a
                href="#cara-kerja"
                className="border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-700 font-medium px-6 py-3 rounded-xl text-sm transition-colors text-center"
              >
                Cara Kerja
              </a>
            </div>

            {/* Stats — compact row */}
            <div className="inline-flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-3 shadow-sm">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {i > 0 && <div className="w-px h-6 bg-gray-200" />}
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900 leading-none">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Preview Card ── */}
          <div className="w-full max-w-xs lg:max-w-sm flex-shrink-0">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5">
                {/* Card header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-base flex-shrink-0">
                    🌿
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm leading-tight">Contoh Refleksi Harian</div>
                    <div className="text-xs text-gray-400">Gambaran hasil evaluasi</div>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-2.5">
                  {previewBars.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </span>
                        <span className="text-xs font-semibold text-gray-600">{item.percent}%</span>
                      </div>
                      <ProgressBar percent={item.percent} colorClass={item.color} />
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Skor Keseluruhan</span>
                  <span className="text-base font-bold text-green-600">72%</span>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -top-2.5 -right-2.5 bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                Kamu di jalur baik 🌱
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
