/**
 * App.jsx — Root component
 * Hanya bertanggung jawab atas:
 * 1. State navigasi antar view (home | result)
 * 2. Menyusun MainLayout + halaman yang aktif
 *
 * Tidak ada UI logic di sini — semua didelegasikan ke pages dan components.
 */

import { useState, useRef } from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

export default function App() {
  // 'home' | 'result'
  const [view, setView] = useState('home');
  const [answers, setAnswers] = useState(null);
  const evalRef = useRef(null);

  function handleStartEval() {
    setView('home');
    setTimeout(() => {
      evalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  function handleSubmit(submittedAnswers) {
    setAnswers(submittedAnswers);
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleReset() {
    setAnswers(null);
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <MainLayout onStartEval={handleStartEval}>
      {view === 'result' ? (
        <ResultPage answers={answers} onReset={handleReset} />
      ) : (
        <HomePage
          ref={evalRef}
          onStartEval={handleStartEval}
          onSubmit={handleSubmit}
        />
      )}
    </MainLayout>
  );
}
