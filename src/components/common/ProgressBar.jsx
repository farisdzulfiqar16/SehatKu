/**
 * ProgressBar.jsx — Reusable horizontal progress bar
 * dengan scroll-triggered fill animation.
 *
 * Props:
 * @param {number}  percent    - nilai 0–100
 * @param {string}  colorClass - Tailwind bg color class
 * @param {string}  height     - Tailwind height class
 * @param {boolean} animated   - aktifkan fill animation saat masuk viewport (default true)
 */
import { useInView } from '../../hooks/useInView';

export default function ProgressBar({
  percent,
  colorClass = 'bg-green-500',
  height     = 'h-1.5',
  animated   = true,
}) {
  const [ref, inView] = useInView({ threshold: 0.5, rootMargin: '0px' });

  // Kalau animated=false, langsung tampil penuh
  const width = !animated || inView ? `${Math.min(percent, 100)}%` : '0%';

  return (
    <div ref={ref} className={`${height} bg-gray-100 rounded-full overflow-hidden`}>
      <div
        className={`h-full ${colorClass} rounded-full`}
        style={{
          width,
          transition: (!animated || inView)
            ? 'width 0.9s cubic-bezier(0.4, 0, 0.2, 1)'
            : 'none',
        }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
