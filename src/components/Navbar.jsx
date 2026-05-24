import { useState } from 'react';

export default function Navbar({ onStartEval }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Sehat<span className="text-green-600">Ku</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
              Fitur
            </a>
            <a href="#cara-kerja" className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
              Cara Kerja
            </a>
            <a href="#evaluasi" className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
              Evaluasi
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onStartEval}
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Mulai Evaluasi
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all"></div>
            <div className="w-5 h-0.5 bg-current mb-1 transition-all"></div>
            <div className="w-5 h-0.5 bg-current transition-all"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
            <a href="#fitur" className="block text-gray-600 hover:text-green-600 text-sm font-medium py-1" onClick={() => setMenuOpen(false)}>
              Fitur
            </a>
            <a href="#cara-kerja" className="block text-gray-600 hover:text-green-600 text-sm font-medium py-1" onClick={() => setMenuOpen(false)}>
              Cara Kerja
            </a>
            <a href="#evaluasi" className="block text-gray-600 hover:text-green-600 text-sm font-medium py-1" onClick={() => setMenuOpen(false)}>
              Evaluasi
            </a>
            <button
              onClick={() => { onStartEval(); setMenuOpen(false); }}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Mulai Evaluasi
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
