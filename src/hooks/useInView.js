/**
 * useInView.js
 * Custom hook berbasis IntersectionObserver.
 * Mendeteksi apakah sebuah elemen sudah masuk viewport.
 *
 * - Zero dependency, native browser API
 * - Performa ringan: observer di-disconnect setelah elemen terlihat (once)
 * - Mendukung threshold dan rootMargin yang bisa dikonfigurasi
 *
 * @param {Object} options
 * @param {number}  options.threshold  - 0–1, seberapa banyak elemen harus terlihat (default 0.15)
 * @param {string}  options.rootMargin - margin viewport (default '-40px')
 * @param {boolean} options.once       - hanya trigger sekali (default true)
 * @returns {[React.RefObject, boolean]}
 */
import { useRef, useState, useEffect } from 'react';

export function useInView({
  threshold  = 0.15,
  rootMargin = '-40px',
  once       = true,
} = {}) {
  const ref       = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback untuk browser yang tidak support IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
