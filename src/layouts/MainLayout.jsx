/**
 * MainLayout.jsx
 * Wrapper layout utama: Navbar + konten halaman + Footer.
 * Semua page dibungkus layout ini agar konsisten.
 */

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout({ children, onStartEval }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onStartEval={onStartEval} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
