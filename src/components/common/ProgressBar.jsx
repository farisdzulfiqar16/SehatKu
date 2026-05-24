/**
 * ProgressBar.jsx — Reusable horizontal progress bar
 */
export default function ProgressBar({ percent, colorClass = 'bg-green-500', height = 'h-1.5' }) {
  return (
    <div className={`${height} bg-gray-100 rounded-full overflow-hidden`}>
      <div
        className={`h-full ${colorClass} rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(percent, 100)}%` }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
