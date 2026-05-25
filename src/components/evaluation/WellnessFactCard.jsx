/**
 * WellnessFactCard.jsx — Evaluation component
 * Satu fakta wellness ringan di bagian bawah hasil.
 * Bukan klaim medis — hanya informasi umum yang menarik.
 *
 * Props:
 * - fact: { icon, fact }
 */
export default function WellnessFactCard({ fact }) {
  if (!fact) return null;

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4">
      <div className="flex gap-2.5 items-start">
        {/* Icon */}
        <div className="w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-base flex-shrink-0 shadow-sm">
          {fact.icon}
        </div>
        <div>
          <p className="text-xs font-semibold text-blue-700 mb-0.5">Tahukah kamu?</p>
          <p className="text-xs text-blue-800 leading-relaxed">{fact.fact}</p>
        </div>
      </div>
    </div>
  );
}
