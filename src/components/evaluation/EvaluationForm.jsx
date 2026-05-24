/**
 * EvaluationForm.jsx — Evaluation component
 * Spacing lebih compact, navigasi lebih jelas di mobile,
 * hint text lebih subtle.
 */
import { useEvaluation } from '../../hooks/useEvaluation';
import { categories } from '../../data/evaluationData';
import CategoryTabs from './CategoryTabs';
import QuestionCard from './QuestionCard';
import ProgressBar from '../common/ProgressBar';
import Badge from '../common/Badge';

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
    // Scroll ke atas section evaluasi
    const el = document.getElementById('evaluasi');
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
  }

  function handleSubmit() {
    onSubmit(answers);
  }

  return (
    <section id="evaluasi" className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-6">
          <Badge icon="🌿" label="Refleksi Kebiasaan Harian" className="mb-3" />
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Kenali Kebiasaanmu</h2>
          <p className="text-gray-400 text-sm">Tidak ada jawaban benar atau salah — cukup jujur</p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-2xl border border-gray-100 px-4 py-3 mb-4 flex items-center gap-3">
          <div className="flex-1">
            <ProgressBar percent={overallProgress} colorClass="bg-green-500" height="h-2" />
          </div>
          <span className="text-xs font-semibold text-green-600 flex-shrink-0 w-16 text-right">
            {totalAnswered}/{totalQuestions} soal
          </span>
        </div>

        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          currentStep={currentStep}
          isCategoryDone={isCategoryDone}
          onTabClick={goToStep}
        />

        {/* Question Card */}
        <QuestionCard
          category={currentCategory}
          categoryQuestions={categoryQuestions}
          answers={answers}
          onAnswer={handleAnswer}
        />

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4 gap-3">
          <button
            onClick={goPrev}
            disabled={isFirstStep}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 active:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            ← Kembali
          </button>

          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:shadow-md cursor-pointer"
            >
              Lihat Refleksiku 🌱
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isCategoryComplete}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:shadow-md cursor-pointer"
            >
              Selanjutnya →
            </button>
          )}
        </div>

        {/* Hint */}
        {!isCategoryComplete && (
          <p className="text-center text-xs text-gray-400 mt-3">
            Jawab semua pertanyaan di bagian ini untuk lanjut
          </p>
        )}
      </div>
    </section>
  );
}
