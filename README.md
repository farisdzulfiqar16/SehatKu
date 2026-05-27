# 🌿 SehatKu

**SehatKu** adalah web evaluasi kebiasaan dan aktivitas harian berbasis React + Vite yang dirancang untuk membantu pengguna merefleksikan pola hidup sehari-hari secara ringan, cepat, dan informatif.

Aplikasi ini berfokus pada **wellness awareness** dan refleksi kebiasaan harian seperti pola tidur, aktivitas fisik, hidrasi, dan keseimbangan aktivitas sehari-hari — **bukan diagnosis medis**.

Project ini dikembangkan sebagai MVP (Minimum Viable Product) untuk mata kuliah **APBO** dengan pendekatan UI modern, clean, responsive, dan tetap menerapkan prinsip **KISS (Keep It Simple, Stupid)**.

---

## ✨ Features

* ✅ Evaluasi kebiasaan harian ringan
* ✅ 10 pertanyaan dalam beberapa kategori
* ✅ Durasi evaluasi kurang dari 5 menit
* ✅ Hasil evaluasi berbasis skor
* ✅ Insight dan refleksi kebiasaan pengguna
* ✅ Tips dan rekomendasi ringan
* ✅ Responsive UI (desktop & mobile)
* ✅ Smooth and clean wellness-style interface
* ✅ Scroll-based subtle animation
* ✅ Component-based architecture

---

## 🧠 Evaluation Categories

* 🌙 Pola Tidur
* 🚶 Aktivitas Fisik
* 💧 Hidrasi
* 🧘 Keseimbangan Aktivitas Harian
* 🌱 Refleksi Kebiasaan

---

## 🛠️ Tech Stack

* React
* Vite
* Tailwind CSS
* JavaScript (ES6+)

---

## 📸 Preview

> Tampilan UI SehatKu

![Uploading image.png…]()



---

## 📂 Project Structure

```bash
SehatKu/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── common/                        # Reusable UI components
│   │   │   ├── Badge.jsx                  # Pill/badge label (section header, status)
│   │   │   ├── ProgressBar.jsx            # Horizontal progress bar dengan scroll-triggered fill animation
│   │   │   ├── Reveal.jsx                 # Scroll-triggered animation wrapper (fadeUp, fadeIn, scaleIn, slideRight)
│   │   │   └── SectionHeader.jsx          # Badge + judul + deskripsi section
│   │   │
│   │   ├── evaluation/                    # Komponen khusus alur evaluasi & hasil
│   │   │   ├── CategoryTabs.jsx           # Tab navigasi antar kategori evaluasi
│   │   │   ├── DailyTipCard.jsx           # Card tips harian (dipilih deterministik dari jawaban)
│   │   │   ├── EncouragementBanner.jsx    # Banner pesan personal di halaman hasil
│   │   │   ├── EvaluationForm.jsx         # Orchestrator form evaluasi (pakai useEvaluation hook)
│   │   │   ├── QuestionCard.jsx           # Card pertanyaan + pilihan jawaban radio-style
│   │   │   ├── ResultCard.jsx             # Halaman hasil evaluasi lengkap
│   │   │   ├── ScoreCircle.jsx            # SVG circular progress skor total
│   │   │   ├── TipsList.jsx               # Saran kebiasaan untuk kategori skor rendah
│   │   │   ├── WellnessFactCard.jsx       # Card fakta wellness ringan
│   │   │   └── WellnessInsightCard.jsx    # Card insight per kategori (headline + body + tip)
│   │   │
│   │   └── layout/                        # Komponen struktur halaman
│   │       ├── Footer.jsx                 # Footer dengan wellness quote harian
│   │       └── Navbar.jsx                 # Sticky navbar dengan glass effect & mobile menu
│   │
│   ├── data/                              # Data statis (murni data, tanpa logic)
│   │   ├── evaluationData.js              # Daftar kategori & pertanyaan evaluasi
│   │   └── wellnessContent.js             # Konten wellness: insights, daily tips, encouragements, facts
│   │
│   ├── hooks/                             # Custom React hooks
│   │   ├── useEvaluation.js               # State & logic form evaluasi (answers, step, progress)
│   │   └── useInView.js                   # IntersectionObserver hook untuk scroll-triggered animation
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx                 # Wrapper utama: Navbar + children + Footer
│   │
│   ├── pages/                             # Page-level components
│   │   ├── HomePage.jsx                   # Menyusun semua sections homepage
│   │   └── ResultPage.jsx                 # Wrapper halaman hasil evaluasi
│   │
│   ├── sections/                          # Homepage sections
│   │   ├── FeaturesSection.jsx            # Grid 6 kartu fitur/aspek evaluasi
│   │   ├── HeroSection.jsx                # Landing section utama dengan preview card
│   │   └── HowItWorksSection.jsx          # 3 langkah cara kerja + info note
│   │
│   ├── utils/                             # Pure functions (tanpa side effect)
│   │   ├── scoreUtils.js                  # calculateScore, getResultLabel, getTips, disclaimer
│   │   └── wellnessUtils.js               # getEncouragement, getDailyTips, getCategoryWellnessInsight
│   │
│   ├── App.jsx                            # Root component: state navigasi (home | result)
│   ├── App.css                            # (kosong, styling via Tailwind)
│   ├── index.css                          # Global styles, design tokens, keyframe animations
│   └── main.jsx                           # Entry point React
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md

```

---

## 🚀 Installation

Clone repository:

```bash
git clone https://github.com/USERNAME/SehatKu.git
```

Masuk ke folder project:

```bash
cd SehatKu
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## ⚠️ Disclaimer

SehatKu bukan aplikasi diagnosis medis dan tidak digunakan untuk menentukan kondisi kesehatan pengguna secara klinis.

Hasil evaluasi bersifat reflektif dan informatif untuk membantu pengguna lebih sadar terhadap kebiasaan serta aktivitas hariannya.

---

## 👨‍💻 Author

**Faris Dzulfiqar**
Project APBO — 2026
