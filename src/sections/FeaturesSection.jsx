/**
 * FeaturesSection.jsx — Homepage section
 * Scroll-triggered reveal: SectionHeader + setiap card muncul
 * dengan stagger saat masuk viewport.
 */
import Reveal from '../components/common/Reveal';
import SectionHeader from '../components/common/SectionHeader';

const features = [
  { icon: '🌙', title: 'Pola Tidur',          desc: 'Seberapa teratur dan cukup tidurmu setiap malam — fondasi dari energi harianmu.',                       color: 'bg-indigo-50 text-indigo-500', border: 'hover:border-indigo-200' },
  { icon: '🚶', title: 'Aktivitas Fisik',      desc: 'Seberapa sering kamu bergerak aktif — dari olahraga ringan hingga jalan kaki.',                         color: 'bg-green-50 text-green-600',   border: 'hover:border-green-200'  },
  { icon: '🥗', title: 'Pola Makan',           desc: 'Kebiasaan makanmu sehari-hari — dari sarapan hingga konsumsi sayur dan buah.',                          color: 'bg-orange-50 text-orange-500', border: 'hover:border-orange-200' },
  { icon: '🧘', title: 'Kesejahteraan Mental', desc: 'Bagaimana kamu mengelola ritme emosional dan meluangkan waktu untuk diri sendiri.',                     color: 'bg-purple-50 text-purple-500', border: 'hover:border-purple-200' },
  { icon: '💧', title: 'Hidrasi',              desc: 'Kecukupan asupan air putih — kebiasaan kecil yang berdampak besar pada fokus dan energi.',              color: 'bg-blue-50 text-blue-500',     border: 'hover:border-blue-200'   },
  { icon: '📋', title: 'Refleksi Instan',      desc: 'Gambaran kebiasaanmu langsung setelah selesai, lengkap dengan saran ringan yang bisa dicoba.',          color: 'bg-teal-50 text-teal-600',     border: 'hover:border-teal-200'   },
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className="py-14 sm:py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header — reveal saat masuk viewport */}
        <Reveal variant="fadeUp">
          <SectionHeader
            badgeIcon="🌿"
            badgeLabel="Apa yang Direfleksikan"
            title="5 Kebiasaan yang Dilihat"
            description="Lima aspek kebiasaan harian yang paling berpengaruh terhadap bagaimana kamu merasa setiap hari."
          />
        </Reveal>

        {/* Grid — setiap card stagger reveal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              variant="fadeUp"
              delay={i * 70}
              threshold={0.08}
            >
              <div className={`group h-full p-4 sm:p-5 rounded-2xl border border-gray-100 ${f.border} bg-white card-hover`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 transition-transform duration-200 group-hover:scale-110 ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
