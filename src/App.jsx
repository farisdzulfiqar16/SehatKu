import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import EvaluationForm from './components/EvaluationForm';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';

// State sederhana: 'home' | 'evaluating' | 'result'
export default function App() {
  const [view, setView] = useState('home');
  const [answers, setAnswers] = useState(null);
  const evalRef = useRef(null);

  function handleStartEval() {
    setView('evaluating');
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
    <div className="min-h-screen bg-gray-50">
      <Navbar onStartEval={handleStartEval} />

      {view === 'result' ? (
        <ResultCard answers={answers} onReset={handleReset} />
      ) : (
        <>
          <Hero onStartEval={handleStartEval} />
          <Features />
          <HowItWorks />
          <div ref={evalRef}>
            <EvaluationForm onSubmit={handleSubmit} />
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}
