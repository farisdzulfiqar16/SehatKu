import { useState } from 'react';
import { questions, categories } from '../data/questions';

export default function EvaluationForm({ onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0); // index kategori aktif

  const currentCategory = categories[currentStep];
  const categoryQuestions = questions.filter((q) => q.category === currentCategory.id);
  const answeredInCategory = categoryQuestions.filter((q) => answers[q.id] !== undefined).length;
  const isCategoryComplete = answeredInCategory === categoryQuestions.length;

  const totalAnswered = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const overallProgress = Math.round((totalAnswered / totalQuestions) * 100);

  function handleAnswer(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNext() {
    if (currentStep < categories.length - 1) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: document.getElementById('evaluasi')?.offsetTop - 80, behavior: 'smooth' });
    }
  }

  function handlePrev() {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }

  function handleSubmit() {
    onSubmit(answers);
  }

  const isLastStep = currentStep === categories.length - 1;
  const allAnswered = totalAnswered === totalQuestions;

  return (
    <section id="evaluasi" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <span>📋</span>
            <span>Evaluasi Kebiasaan Harian</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Mulai Evaluasimu</h2>
          <p className="text-gray-500 text-sm">Jawab dengan jujur untuk hasil yang akurat</p>
        </div>

        {/* Overall Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{totalAnswered} dari {totalQuestions} pertanyaan dijawab</span>
            <span className="font-semibold text-green-600">{overallProgress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat, i) => {
            const catQs = questions.filter((q) => q.category === cat.id);
            const catAnswered = catQs.filter((q) => answers[q.id] !== undefined).length;
            const isDone = catAnswered === catQs.length;
            const isActive = i === currentStep;

            return (
              <button
                key={cat.id}
                onClick={() => setCurrentStep(i)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-green-600 text-white shadow-sm'
                    : isDone
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {isDone && !isActive && <span>✓</span>}
              </button>
            );
          })}
        </div>

        {/* Question Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                {currentCategory.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{currentCategory.label}</h3>
                <p className="text-xs text-gray-500">
                  {answeredInCategory}/{categoryQuestions.length} pertanyaan dijawab
                </p>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="p-6 space-y-8">
            {categoryQuestions.map((q, qi) => (
              <div key={q.id}>
                <p className="font-medium text-gray-800 mb-4 text-sm leading-relaxed">
                  <span className="text-green-600 font-bold mr-2">
                    {questions.findIndex((x) => x.id === q.id) + 1}.
                  </span>
                  {q.text}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(q.id, opt.value)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all cursor-pointer ${
                          isSelected
                            ? 'border-green-500 bg-green-50 text-green-800 font-medium'
                            : 'border-gray-200 hover:border-green-300 hover:bg-green-50/50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                            isSelected ? 'border-green-500 bg-green-500' : 'border-gray-300'
                          }`}>
                            {isSelected && (
                              <div className="w-full h-full rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                          {opt.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            ← Sebelumnya
          </button>

          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:shadow-md cursor-pointer"
            >
              Lihat Hasil Evaluasi 🎉
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!isCategoryComplete}
              className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:shadow-md cursor-pointer"
            >
              Selanjutnya →
            </button>
          )}
        </div>

        {!isCategoryComplete && (
          <p className="text-center text-xs text-gray-400 mt-3">
            Jawab semua pertanyaan di kategori ini untuk melanjutkan
          </p>
        )}
      </div>
    </section>
  );
}
