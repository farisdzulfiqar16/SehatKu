/**
 * Reveal.jsx — Reusable scroll-triggered animation wrapper
 *
 * Membungkus children dengan animasi yang baru aktif
 * saat elemen masuk viewport. Sebelum terlihat, elemen
 * dalam keadaan invisible (opacity-0) sehingga tidak
 * ada layout shift.
 *
 * Props:
 * @param {string}  variant   - jenis animasi: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideRight'
 * @param {number}  delay     - delay dalam ms sebelum animasi mulai (default 0)
 * @param {number}  threshold - seberapa banyak elemen harus terlihat 0–1 (default 0.12)
 * @param {string}  className - class tambahan untuk wrapper div
 * @param {string}  as        - HTML tag yang digunakan (default 'div')
 *
 * Contoh penggunaan:
 *   <Reveal variant="fadeUp" delay={100}>
 *     <FeatureCard />
 *   </Reveal>
 */
import { useInView } from '../../hooks/useInView';

const variants = {
  fadeUp:     'translate-y-6 opacity-0',
  fadeIn:     'opacity-0',
  scaleIn:    'scale-95 opacity-0',
  slideRight: 'translate-x-5 opacity-0',
};

const activeClass = 'translate-y-0 translate-x-0 scale-100 opacity-100';

export default function Reveal({
  children,
  variant   = 'fadeUp',
  delay     = 0,
  threshold = 0.12,
  className = '',
  as: Tag   = 'div',
}) {
  const [ref, inView] = useInView({ threshold, rootMargin: '-32px' });

  const baseTransition = 'transition-all duration-700 ease-out';
  const initialClass   = variants[variant] ?? variants.fadeUp;

  return (
    <Tag
      ref={ref}
      className={`${baseTransition} ${inView ? activeClass : initialClass} ${className}`}
      style={delay ? { transitionDelay: inView ? `${delay}ms` : '0ms' } : undefined}
    >
      {children}
    </Tag>
  );
}
