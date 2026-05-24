/**
 * useEvaluation.js
 * Custom hook yang mengenkapsulasi semua state dan logic form evaluasi.
 * Komponen UI cukup memanggil hook ini tanpa perlu tahu detail implementasinya.
 */

import { useState } from 'react';
import { questions, categories } from '../data/evaluationData';

export function useEvaluation() {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  // Derived state — kategori dan pertanyaan aktif
  const currentCategory = categories[currentStep];
  const categoryQuestions = questions.filter((q) => q.category === currentCategory.id);
  const answeredInCategory = categoryQuestions.filter((q) => answers[q.id] !== undefined).length;
  const isCategoryComplete = answeredInCategory === categoryQuestions.length;

  // Progress keseluruhan
  const totalAnswered = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const overallProgress = Math.round((totalAnswered / totalQuestions) * 100);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === categories.length - 1;
  const allAnswered = totalAnswered === totalQuestions;

  /** Simpan jawaban untuk satu pertanyaan */
  function handleAnswer(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  /** Pindah ke kategori berikutnya */
  function goNext() {
    if (!isLastStep) setCurrentStep((s) => s + 1);
  }

  /** Kembali ke kategori sebelumnya */
  function goPrev() {
    if (!isFirstStep) setCurrentStep((s) => s - 1);
  }

  /** Lompat langsung ke kategori tertentu */
  function goToStep(index) {
    setCurrentStep(index);
  }

  /** Reset semua state ke awal */
  function reset() {
    setAnswers({});
    setCurrentStep(0);
  }

  /** Cek apakah sebuah kategori sudah selesai dijawab */
  function isCategoryDone(categoryId) {
    const catQs = questions.filter((q) => q.category === categoryId);
    return catQs.every((q) => answers[q.id] !== undefined);
  }

  return {
    // State
    answers,
    currentStep,
    currentCategory,
    categoryQuestions,
    // Progress
    answeredInCategory,
    isCategoryComplete,
    totalAnswered,
    totalQuestions,
    overallProgress,
    // Flags
    isFirstStep,
    isLastStep,
    allAnswered,
    // Actions
    handleAnswer,
    goNext,
    goPrev,
    goToStep,
    reset,
    isCategoryDone,
  };
}
