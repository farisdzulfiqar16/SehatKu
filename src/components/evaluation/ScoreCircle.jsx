/**
 * ScoreCircle.jsx — Evaluation component
 * Lebih compact di mobile (w-24), tetap readable.
 */
export default function ScoreCircle({ percent }) {
  const radius        = 44;
  const circumference = 2 * Math.PI * radius;
  const offset        = circumference * (1 - Math.min(percent, 100) / 100);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="w-24 h-24 sm:w-28 sm:h-28 -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        {/* Track */}
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#f1f5f9" strokeWidth="8" />
        {/* Progress */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke="#16a34a"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none">{percent}%</div>
        <div className="text-xs text-gray-400 mt-0.5">Skor</div>
      </div>
    </div>
  );
}
