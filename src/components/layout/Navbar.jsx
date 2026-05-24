/**
 * Navbar.jsx — Layout component
 * Compact sticky nav. h-14 di mobile, h-16 di desktop.
 */
import { useState } from 'react';

export default function Navbar({ onStartEval }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#fitur',      label: 'Fitur'      },
    { href: '#cara-kerja', label: 'Cara Kerja' },
    { href: '#evaluasi',   label: 'Evaluasi'   },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              Sehat<span className="text-green-600">Ku</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-green-600 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={onStartEval}
            className="hidden md:inline-flex items-center bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Mulai Refleksi
          </button>

          {/* Mobile: CTA kecil + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onStartEval}
              className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Mulai
            </button>
            <button
              className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {/* Hamburger icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-50 text-sm font-medium px-2 py-2 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
