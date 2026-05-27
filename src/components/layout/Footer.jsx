/**
 * Footer.jsx — Layout component
 * Scroll-triggered reveal: brand, nav links, dan wellness quote
 * muncul saat footer masuk viewport.
 */
import Reveal from '../common/Reveal';

const footerLinks = [
  { href: '#fitur',      label: 'Fitur'      },
  { href: '#cara-kerja', label: 'Cara Kerja' },
  { href: '#evaluasi',   label: 'Evaluasi'   },
];

const wellnessQuotes = [
  'Perubahan kecil yang konsisten lebih berdampak daripada perubahan besar yang tidak bertahan.',
  'Mengenal diri sendiri adalah langkah pertama menuju kebiasaan yang lebih baik.',
  'Setiap hari adalah kesempatan baru untuk memilih kebiasaan yang lebih baik.',
];

const todayQuote = wellnessQuotes[new Date().getDay() % wellnessQuotes.length];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-10 pb-6 px-4">
      <div className="max-w-4xl mx-auto">

        {/* ── Main content — 3 kolom dengan stagger reveal ── */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">

          {/* Brand + tagline */}
          <Reveal variant="fadeUp" threshold={0.2}>
            <div className="flex-1 max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm shadow-green-200">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <span className="font-bold text-gray-900">
                  Sehat<span className="text-green-600">Ku</span>
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Refleksi kebiasaan harian untuk hidup yang lebih seimbang.
                Bukan penilaian, tapi cermin untuk mengenal diri sendiri.
              </p>
            </div>
          </Reveal>

          {/* Nav links */}
          <Reveal variant="fadeUp" delay={80} threshold={0.2}>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                Navigasi
              </p>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-green-600 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Wellness quote card */}
          <Reveal variant="fadeUp" delay={160} threshold={0.2}>
            <div className="flex-1 max-w-xs bg-green-50 border border-green-100 rounded-2xl p-4">
              <p className="text-xs font-semibold text-green-700 mb-1.5">🌿 Refleksi Hari Ini</p>
              <p className="text-xs text-green-800 leading-relaxed italic">
                "{todayQuote}"
              </p>
            </div>
          </Reveal>

        </div>

        {/* ── Divider + copyright ── */}
        <Reveal variant="fadeIn" delay={100} threshold={0.3}>
          <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-400">
              © 2026 SehatKu · Dibuat untuk mata kuliah APBO
            </p>
            <p className="text-xs text-gray-400">
              Hasil bersifat informatif, bukan penilaian medis 🌿
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}
