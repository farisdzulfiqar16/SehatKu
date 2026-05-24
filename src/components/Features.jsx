const features = [
  {
    icon: '🌙',
    title: 'Pola Tidur',
    desc: 'Evaluasi kualitas dan konsistensi tidurmu. Tidur yang baik adalah fondasi kesehatan.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: '🏃',
    title: 'Aktivitas Fisik',
    desc: 'Cek seberapa aktif kamu bergerak setiap hari. Gerakan kecil pun punya dampak besar.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: '🥗',
    title: 'Pola Makan',
    desc: 'Tinjau kebiasaan makanmu — dari sarapan hingga konsumsi sayur dan buah harian.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: '🧠',
    title: 'Kesehatan Mental',
    desc: 'Ukur tingkat stres dan keseimbangan emosionalmu dalam kehidupan sehari-hari.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: '💧',
    title: 'Hidrasi',
    desc: 'Pastikan tubuhmu terhidrasi dengan baik. Air putih adalah kunci vitalitas.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: '📊',
    title: 'Laporan Instan',
    desc: 'Dapatkan ringkasan hasil evaluasi lengkap dengan tips personal yang actionable.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <span>🎯</span>
            <span>Apa yang Dievaluasi</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            5 Aspek Kebiasaan Harian
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            SehatKu mengevaluasi lima aspek utama yang paling berpengaruh terhadap kualitas hidup sehari-hari.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
