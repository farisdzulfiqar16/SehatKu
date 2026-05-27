/**
 * ScoreCircle.jsx — Evaluation component
 * SVG circular progress dengan fill animation saat masuk viewport.
 * Menggunakan useInView agar animasi tidak langsung jalan saat mount.
 */
import { useInView } from '../../hooks/useInView';

export default function ScoreCircle({ percent }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const radius        = 44;
  const circumference = 2 * Math.PI * radius;
  // Saat belum inView: offset penuh (tidak terisi). Saat inView: offset sesuai persen.
  const offset = inView
    ? circumference * (1 - Math.min(percent, 100) / 100)
    : circumference;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg
        className="w-24 h-24 sm:w-28 sm:h-28 -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {/* Track */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="8"
        />
        {/* Progress — animasi fill dipicu oleh inView */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="#16a34a"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: inView
              ? 'stroke-dashoffset 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              : 'none',
          }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none tabular-nums">
          {percent}%
        </div>
        <div className="text-xs text-gray-400 mt-0.5">Skor</div>
      </div>
    </div>
  );
}
