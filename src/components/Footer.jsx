export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-white font-bold text-lg">
              Sehat<span className="text-green-400">Ku</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-center">
            Evaluasi kebiasaan harian untuk hidup yang lebih sehat 🌿
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 text-center md:text-right">
            Bukan pengganti konsultasi medis
          </p>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          © 2025 SehatKu — Dibuat untuk mata kuliah APBO
        </div>
      </div>
    </footer>
  );
}
