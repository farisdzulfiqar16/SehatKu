/**
 * HeroSection.jsx — Homepage section
 * Above the fold: animasi langsung jalan via CSS class (hero-*).
 * Preview card progress bars pakai animated ProgressBar.
 */
import Badge from '../components/common/Badge';
import ProgressBar from '../components/common/ProgressBar';

const previewBars = [
  { label: 'Pola Tidur',    icon: '🌙', percent: 75, color: 'bg-indigo-400' },
  { label: 'Aktivitas',     icon: '🚶', percent: 60, color: 'bg-green-500'  },
  { label: 'Pola Makan',    icon: '🥗', percent: 85, color: 'bg-orange-400' },
  { label: 'Kesejahteraan', icon: '🧘', percent: 50, color: 'bg-purple-400' },
  { label: 'Hidrasi',       icon: '💧', percent: 90, color: 'bg-blue-400'   },
];

const stats = [
  { value: '5',      label: 'Kategori',   icon: '🎯' },
  { value: '10',     label: 'Pertanyaan', icon: '📋' },
  { value: '<3 mnt', label: 'Selesai',    icon: '⚡' },
];

export default function HeroSection({ onStartEval }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50/60 pt-12 pb-16 px-4 sm:pt-16 sm:pb-24">

      {/* ── Background decorations ── */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-green-200/30 blob blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-200/40 blob blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #16a34a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Text Content — above fold, CSS animation langsung ── */}
          <div className="flex-1 text-center lg:text-left">
            <div className="hero-badge inline-block mb-5">
              <Badge icon="🌿" label="Wellness Reflection App" />
            </div>

            <h1 className="hero-text text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Refleksi Kebiasaan{' '}
              <span className="text-gradient-green">Harianmu</span>
            </h1>

            <p className="hero-text text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-sm mx-auto lg:mx-0"
               style={{ animationDelay: '0.3s' }}>
              Kenali pola harianmu sendiri — dari tidur, gerak, makan, hingga kesejahteraan mental.
              Bukan penilaian, tapi cermin untuk refleksi diri.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <button
                onClick={onStartEval}
                className="group bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold px-7 py-3 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:shadow-green-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  Mulai Refleksi Diri
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </span>
              </button>
              <a
                href="#cara-kerja"
                className="border border-gray-200 hover:border-green-300 hover:bg-green-50/50 text-gray-600 hover:text-green-700 font-medium px-7 py-3 rounded-xl text-sm transition-all duration-200 text-center"
              >
                Cara Kerja
              </a>
            </div>

            {/* Stats pill */}
            <div className="hero-stats inline-flex items-center gap-1 bg-white border border-gray-100 rounded-2xl px-2 py-2 shadow-sm">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-8 bg-gray-100 mx-1" />}
                  <div className="flex items-center gap-2 px-3 py-1">
                    <span className="text-base">{stat.icon}</span>
                    <div>
                      <div className="text-sm font-bold text-gray-900 leading-none">{stat.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Preview Card — above fold, CSS animation langsung ── */}
          <div className="hero-card w-full max-w-sm lg:max-w-md flex-shrink-0">
            <div className="relative">
              {/* Shadow glow */}
              <div className="absolute inset-0 bg-green-400/10 rounded-3xl blur-xl translate-y-4 scale-95" />

              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100/80 p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-lg shadow-sm shadow-green-200">
                      🌿
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Contoh Refleksi Harian</div>
                      <div className="text-xs text-gray-400">Gambaran hasil evaluasi</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-dot" />
                    <span className="text-xs text-green-700 font-medium">Live</span>
                  </div>
                </div>

                {/* Progress bars — animated saat card masuk view */}
                <div className="space-y-3">
                  {previewBars.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-gray-600 flex items-center gap-1.5">
                          <span>{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </span>
                        <span className="text-xs font-bold text-gray-700">{item.percent}%</span>
                      </div>
                      <ProgressBar percent={item.percent} colorClass={item.color} height="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Skor Keseluruhan</span>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-green-500 rounded-full" />
                    </div>
                    <span className="text-base font-bold text-green-600">72%</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-green-200/50 flex items-center gap-1">
                <span>🌱</span>
                <span>Kamu di jalur baik</span>
              </div>

              {/* Floating mini card */}
              <div className="absolute -bottom-8 -left-3 bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <span className="text-base">💧</span>
                <div>
                  <div className="text-xs font-semibold text-gray-800">Hidrasi</div>
                  <div className="text-xs text-green-600 font-bold">90%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
