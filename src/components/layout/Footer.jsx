/**
 * Footer.jsx — Layout component
 * Ringan dan friendly, tidak terlalu gelap seperti SaaS footer.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-3 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="font-bold text-gray-800">
              Sehat<span className="text-green-600">Ku</span>
            </span>
          </div>

          <p className="text-sm text-gray-500">
            Refleksi kebiasaan harian untuk hidup yang lebih seimbang 🌿
          </p>

          <p className="text-xs text-gray-400">
            Hasil bersifat informatif, bukan penilaian medis
          </p>

          <div className="w-full border-t border-gray-200 mt-2 pt-4">
            <p className="text-xs text-gray-400">
              © 2025 SehatKu · Dibuat untuk mata kuliah APBO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
