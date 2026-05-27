/**
 * SectionHeader.jsx — Reusable section title block
 * Tidak punya animasi sendiri — animasi dikontrol oleh
 * parent via komponen Reveal agar timing bisa dikonfigurasi.
 */
import Badge from './Badge';

export default function SectionHeader({ badgeIcon, badgeLabel, title, description }) {
  return (
    <div className="text-center mb-10">
      <Badge icon={badgeIcon} label={badgeLabel} className="mb-3" />
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">{title}</h2>
      {description && (
        <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed">{description}</p>
      )}
    </div>
  );
}
