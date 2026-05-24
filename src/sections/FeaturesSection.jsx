/**
 * FeaturesSection.jsx — Homepage section
 * Deskripsi fitur lebih positif dan wellness-oriented,
 * tidak menyebut "mengukur" atau "mendiagnosis".
 */
import SectionHeader from '../components/common/SectionHeader';

const features = [
  {
    icon: '🌙',
    title: 'Pola Tidur',
    desc: 'Seberapa teratur dan cukup tidurmu setiap malam — fondasi dari energi harianmu.',
    color: 'bg-indigo-50 text-indigo-500',
  },
  {
    icon: '🚶',
    title: 'Aktivitas Fisik',
    desc: 'Seberapa sering kamu bergerak aktif — dari olahraga ringan hingga jalan kaki.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: '🥗',
    title: 'Pola Makan',
    desc: 'Kebiasaan makanmu sehari-hari — dari sarapan hingga konsumsi sayur dan buah.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: '🧘',
    title: 'Kesejahteraan Mental',
    desc: 'Bagaimana kamu mengelola ritme emosional dan meluangkan waktu untuk diri sendiri.',
    color: 'bg-purple-50 text-purple-500',
  },
  {
    icon: '💧',
    title: 'Hidrasi',
    desc: 'Kecukupan asupan air putih — kebiasaan kecil yang berdampak besar pada fokus dan energi.',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: '📋',
    title: 'Refleksi Instan',
    desc: 'Gambaran kebiasaanmu langsung setelah selesai, lengkap dengan saran ringan yang bisa dicoba.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badgeIcon="🌿"
          badgeLabel="Apa yang Direfleksikan"
          title="5 Kebiasaan yang Dilihat"
          description="Lima aspek kebiasaan harian yang paling berpengaruh terhadap bagaimana kamu merasa setiap hari."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all duration-200 bg-white"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
