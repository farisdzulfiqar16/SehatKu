/**
 * QuestionCard.jsx — Evaluation component
 * Card pertanyaan yang lebih compact dan touch-friendly.
 * Option button lebih tinggi untuk mudah di-tap di mobile.
 */
import { questions } from '../../data/evaluationData';

export default function QuestionCard({ category, categoryQuestions, answers, onAnswer }) {
  const answeredCount = categoryQuestions.filter((q) => answers[q.id] !== undefined).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      {/* Card Header */}
      <div className="bg-green-50 px-4 py-3 border-b border-green-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm flex-shrink-0">
            {category.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">{category.label}</h3>
            <p className="text-xs text-gray-400">{answeredCount}/{categoryQuestions.length} dijawab</p>          </div>
        </div>
        {/* Mini progress dots */}
        <div className="flex gap-1">
          {categoryQuestions.map((q) => (
            <div
              key={q.id}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                answers[q.id] !== undefined ? 'bg-green-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Questions */}
      <div className="p-4 space-y-6">
        {categoryQuestions.map((q) => {
          const questionNumber = questions.findIndex((x) => x.id === q.id) + 1;
          const isAnswered = answers[q.id] !== undefined;

          return (
            <div key={q.id}>
              <p className="text-sm font-medium text-gray-800 mb-3 leading-relaxed">
                <span className="text-green-600 font-bold mr-1.5">{questionNumber}.</span>
                {q.text}
              </p>

              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isSelected = answers[q.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => onAnswer(q.id, opt.value)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl border text-sm transition-all cursor-pointer active:scale-[0.99] ${
                        isSelected
                          ? 'border-green-500 bg-green-50 text-green-800 font-medium'
                          : 'border-gray-200 hover:border-green-200 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Radio dot */}
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                            isSelected ? 'border-green-500 bg-green-500' : 'border-gray-300'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                        </div>
                        <span className="leading-snug">{opt.label}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
