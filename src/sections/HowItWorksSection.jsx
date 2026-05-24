/**
 * HowItWorksSection.jsx — Homepage section
 * Wording steps lebih natural dan wellness-oriented.
 * Disclaimer diubah dari "warning" ke tone yang lebih positif dan informatif.
 */
import SectionHeader from '../components/common/SectionHeader';

const steps = [
  {
    number: '1',
    icon: '📋',
    title: 'Jawab Pertanyaan',
    desc: '10 pertanyaan singkat tentang kebiasaan harianmu. Tidak ada jawaban benar atau salah — cukup jujur.',
  },
  {
    number: '2',
    icon: '✨',
    title: 'Lihat Gambaranmu',
    desc: 'Skor dihitung otomatis dari 5 aspek kebiasaan dan ditampilkan dalam bentuk yang mudah dipahami.',
  },
  {
    number: '3',
    icon: '🌱',
    title: 'Ambil Satu Langkah',
    desc: 'Dapatkan saran ringan yang bisa langsung dicoba — mulai dari yang paling terasa relevan untukmu.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badgeIcon="✨"
          badgeLabel="Cara Kerja"
          title="Sederhana dan Personal"
          description="Tiga langkah untuk mendapatkan gambaran kebiasaan harianmu."
        />

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-gray-100 p-5 flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-3"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center text-xl shadow-sm shadow-green-200">
                  {step.icon}
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info note — tone positif, bukan warning */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0 mt-0.5">🌿</span>
          <div>
            <p className="text-xs font-semibold text-green-800 mb-0.5">Tentang Hasil Evaluasi Ini</p>
            <p className="text-xs text-green-700 leading-relaxed">
              Hasil SehatKu bersifat informatif dan merupakan gambaran umum kebiasaan harianmu —
              bukan penilaian medis. Gunakan sebagai bahan refleksi diri, bukan sebagai acuan diagnosis.
              Untuk kekhawatiran kesehatan tertentu, tenaga kesehatan adalah sumber terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
