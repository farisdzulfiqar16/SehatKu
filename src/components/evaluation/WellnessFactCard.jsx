/**
 * WellnessFactCard.jsx — Evaluation component
 * Polished: icon lebih prominent, layout lebih balanced.
 */
export default function WellnessFactCard({ fact }) {
  if (!fact) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 rounded-2xl p-4 mb-4">
      <div className="flex gap-3 items-start">
        <div className="w-9 h-9 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
          {fact.icon}
        </div>
        <div>
          <p className="text-xs font-semibold text-blue-700 mb-1">Tahukah kamu?</p>
          <p className="text-xs text-blue-900/80 leading-relaxed">{fact.fact}</p>
        </div>
      </div>
    </div>
  );
}
