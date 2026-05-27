/**
 * EncouragementBanner.jsx — Evaluation component
 * Polished: gradient lebih kaya, subtle pattern, badge lebih polished.
 */
export default function EncouragementBanner({ headline, body, strongCount }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-600 to-emerald-700 rounded-2xl p-5 mb-4 text-white">
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 bg-white/5 rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full"
      />

      <div className="relative">
        {/* Headline */}
        <h3 className="font-bold text-base leading-snug mb-2">{headline}</h3>

        {/* Body */}
        <p className="text-green-100 text-xs leading-relaxed mb-3">{body}</p>

        {/* Strong categories badge */}
        {strongCount > 0 && (
          <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
            <span>🌟</span>
            <span>
              {strongCount === 5
                ? 'Semua kategori sudah kuat!'
                : `${strongCount} dari 5 kategori sudah kuat`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
