/**
 * EncouragementBanner.jsx — Evaluation component
 * Banner personal di bagian atas hasil evaluasi.
 * Tone: hangat, supportif, tidak menghakimi.
 *
 * Props:
 * - headline: string
 * - body: string
 * - strongCount: number — jumlah kategori dengan skor tinggi
 */
export default function EncouragementBanner({ headline, body, strongCount }) {
  return (
    <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-5 mb-4 text-white">
      {/* Headline */}
      <h3 className="font-bold text-base leading-snug mb-2">{headline}</h3>

      {/* Body */}
      <p className="text-green-100 text-xs leading-relaxed mb-3">{body}</p>

      {/* Strong categories badge — hanya tampil kalau ada */}
      {strongCount > 0 && (
        <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
          <span>🌟</span>
          <span>
            {strongCount === 5
              ? 'Semua kategori sudah kuat!'
              : `${strongCount} dari 5 kategori sudah kuat`}
          </span>
        </div>
      )}
    </div>
  );
}
