/**
 * Navbar.jsx — Layout component
 * Polished: glass effect, active link indicator, smoother transitions.
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
    <nav className="glass border-b border-gray-100/80 sticky top-0 z-50 shadow-sm shadow-gray-100/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm shadow-green-200 transition-transform duration-200 group-hover:scale-105">
              <span className="text-white text-xs font-bold">S</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              Sehat<span className="text-green-600">Ku</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-green-600 hover:bg-green-50 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={onStartEval}
            className="hidden md:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-green-200 cursor-pointer"
          >
            <span>Mulai Refleksi</span>
            <span className="text-green-200">→</span>
          </button>

          {/* Mobile: CTA + hamburger */}
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
          <>
            <style>{`
              @keyframes menuSlideDown {
                from { opacity: 0; transform: translateY(-6px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <div
              className="md:hidden border-t border-gray-100 py-3 space-y-1"
              style={{ animation: 'menuSlideDown 0.2s cubic-bezier(0.4,0,0.2,1) both' }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center text-gray-600 hover:text-green-600 hover:bg-green-50 text-sm font-medium px-3 py-2.5 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

/* Inline keyframe untuk dropdown — tidak perlu library */
const style = document.createElement('style');
if (!document.querySelector('#navbar-anim')) {
  style.id = 'navbar-anim';
  style.textContent = `
    @keyframes menuSlideDown {
      from { opacity: 0; transform: translateY(-6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}
