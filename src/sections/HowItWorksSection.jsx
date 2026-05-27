/**
 * HowItWorksSection.jsx — Homepage section
 * Scroll-triggered reveal: header, setiap step card, dan info note
 * muncul saat masuk viewport dengan stagger.
 */
import Reveal from '../components/common/Reveal';
import SectionHeader from '../components/common/SectionHeader';

const steps = [
  {
    number: '1',
    icon: '📋',
    title: 'Jawab Pertanyaan',
    desc: '10 pertanyaan singkat tentang kebiasaan harianmu. Tidak ada jawaban benar atau salah — cukup jujur.',
    color: 'from-green-500 to-emerald-600',
    shadow: 'shadow-green-200',
  },
  {
    number: '2',
    icon: '✨',
    title: 'Lihat Gambaranmu',
    desc: 'Skor dihitung otomatis dari 5 aspek kebiasaan dan ditampilkan dalam bentuk yang mudah dipahami.',
    color: 'from-blue-500 to-cyan-600',
    shadow: 'shadow-blue-200',
  },
  {
    number: '3',
    icon: '🌱',
    title: 'Ambil Satu Langkah',
    desc: 'Dapatkan saran ringan yang bisa langsung dicoba — mulai dari yang paling terasa relevan untukmu.',
    color: 'from-purple-500 to-violet-600',
    shadow: 'shadow-purple-200',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-14 sm:py-20 px-4 bg-gray-50/80">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <Reveal variant="fadeUp">
          <SectionHeader
            badgeIcon="✨"
            badgeLabel="Cara Kerja"
            title="Sederhana dan Personal"
            description="Tiga langkah untuk mendapatkan gambaran kebiasaan harianmu."
          />
        </Reveal>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Connector line — desktop only, reveal bersama step pertama */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 z-0"
          />

          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              variant="fadeUp"
              delay={i * 100}
              threshold={0.1}
            >
              <div className="relative z-10 h-full bg-white rounded-2xl border border-gray-100 p-5 flex sm:flex-col items-start sm:items-center sm:text-center gap-4 sm:gap-3 card-hover">
                <div className="relative flex-shrink-0">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg ${step.shadow}`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-white border-2 border-gray-100 text-gray-600 text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Info note */}
        <Reveal variant="fadeUp" delay={150}>
          <div className="bg-white border border-green-100 rounded-2xl p-4 sm:p-5 flex gap-3 items-start shadow-sm">
            <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-base flex-shrink-0">
              🌿
            </div>
            <div>
              <p className="text-xs font-semibold text-green-800 mb-1">Tentang Hasil Evaluasi Ini</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hasil SehatKu bersifat informatif dan merupakan gambaran umum kebiasaan harianmu —
                bukan penilaian medis. Gunakan sebagai bahan refleksi diri, bukan sebagai acuan diagnosis.
                Untuk kekhawatiran kesehatan tertentu, tenaga kesehatan adalah sumber terbaik.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
