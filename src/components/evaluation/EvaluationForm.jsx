/**
 * EvaluationForm.jsx — Evaluation component
 * Scroll-triggered reveal untuk header section.
 * QuestionCard pakai scaleIn saat kategori berganti.
 */
import { useEvaluation } from '../../hooks/useEvaluation';
import { categories } from '../../data/evaluationData';
import CategoryTabs from './CategoryTabs';
import QuestionCard from './QuestionCard';
import ProgressBar from '../common/ProgressBar';
import Badge from '../common/Badge';
import Reveal from '../common/Reveal';

export default function EvaluationForm({ onSubmit }) {
  const {
    answers,
    currentStep,
    currentCategory,
    categoryQuestions,
    isCategoryComplete,
    totalAnswered,
    totalQuestions,
    overallProgress,
    isFirstStep,
    isLastStep,
    allAnswered,
    handleAnswer,
    goNext,
    goPrev,
    goToStep,
    isCategoryDone,
  } = useEvaluation();

  function handleNext() {
    goNext();
    const el = document.getElementById('evaluasi');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }

  function handleSubmit() {
    onSubmit(answers);
  }

  return (
    <section id="evaluasi" className="py-14 sm:py-20 px-4 bg-white">
      <div className="max-w-xl mx-auto">

        {/* ── Section Header — reveal saat scroll ke sini ── */}
        <Reveal variant="fadeUp">
          <div className="text-center mb-7">
            <Badge icon="🌿" label="Refleksi Kebiasaan Harian" className="mb-3" />
            <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Kenali Kebiasaanmu</h2>
            <p className="text-gray-400 text-sm">Tidak ada jawaban benar atau salah — cukup jujur</p>
          </div>
        </Reveal>

        {/* ── Overall Progress ── */}
        <Reveal variant="fadeUp" delay={80}>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 px-4 py-3.5 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-500 font-medium">Progress keseluruhan</span>
              <span className="text-xs font-bold text-green-600">{totalAnswered}/{totalQuestions} soal</span>
            </div>
            <ProgressBar percent={overallProgress} colorClass="bg-green-500" height="h-2" />
            {overallProgress === 100 && (
              <p className="text-xs text-green-600 font-medium mt-1.5 text-center">
                ✓ Semua pertanyaan sudah dijawab!
              </p>
            )}
          </div>
        </Reveal>

        {/* ── Category Tabs ── */}
        <CategoryTabs
          categories={categories}
          currentStep={currentStep}
          isCategoryDone={isCategoryDone}
          onTabClick={goToStep}
        />

        {/* ── Question Card — key berubah saat step berganti → re-mount → scaleIn ── */}
        <div
          key={currentStep}
          className="transition-all duration-300"
          style={{
            animation: 'questionCardIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) both',
          }}
        >
          <QuestionCard
            category={currentCategory}
            categoryQuestions={categoryQuestions}
            answers={answers}
            onAnswer={handleAnswer}
          />
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-between mt-4 gap-3">
          <button
            onClick={goPrev}
            disabled={isFirstStep}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer"
          >
            ← Kembali
          </button>

          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-green-200 cursor-pointer"
            >
              <span>Lihat Refleksiku</span>
              <span>🌱</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isCategoryComplete}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-green-200 cursor-pointer"
            >
              <span>Selanjutnya</span>
              <span>→</span>
            </button>
          )}
        </div>

        {!isCategoryComplete && (
          <p className="text-center text-xs text-gray-400 mt-3">
            Jawab semua pertanyaan di bagian ini untuk lanjut
          </p>
        )}
      </div>

      {/* Inline keyframe untuk question card transition */}
      <style>{`
        @keyframes questionCardIn {
          from { opacity: 0; transform: translateY(10px) scale(0.99); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
