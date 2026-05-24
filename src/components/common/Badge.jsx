/**
 * Badge.jsx — Reusable pill/badge component
 */
export default function Badge({ icon, label, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${className}`}
    >
      {icon && <span className="text-sm leading-none">{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
