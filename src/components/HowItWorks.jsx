const steps = [
  {
    number: '01',
    icon: '📋',
    title: 'Jawab Pertanyaan',
    desc: 'Isi 10 pertanyaan singkat seputar kebiasaan harianmu. Hanya butuh kurang dari 3 menit.',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Analisis Instan',
    desc: 'Sistem langsung menghitung skor dari 5 kategori kebiasaan berdasarkan jawabanmu.',
  },
  {
    number: '03',
    icon: '📊',
    title: 'Lihat Hasilmu',
    desc: 'Dapatkan laporan visual lengkap dengan skor per kategori dan tips perbaikan yang relevan.',
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <span>⚙️</span>
            <span>Cara Kerja</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mudah, Cepat, Informatif
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Tiga langkah sederhana untuk mendapatkan gambaran kebiasaan harianmu.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-green-200 z-0"></div>

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10 text-center">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-2xl text-2xl mb-5 shadow-lg shadow-green-200">
                {step.icon}
              </div>
              <div className="absolute top-0 right-1/2 translate-x-8 -translate-y-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                {step.number}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-14 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <div className="text-2xl mb-2">⚠️</div>
          <h4 className="font-semibold text-amber-800 mb-1">Bukan Diagnosis Medis</h4>
          <p className="text-amber-700 text-sm leading-relaxed">
            SehatKu adalah alat refleksi diri, bukan pengganti konsultasi medis profesional. 
            Hasil evaluasi hanya sebagai gambaran umum kebiasaan harianmu.
          </p>
        </div>
      </div>
    </section>
  );
}
