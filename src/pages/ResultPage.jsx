/**
 * ResultPage.jsx — Page component
 * Halaman hasil evaluasi. Menerima answers dan callback reset.
 */

import ResultCard from '../components/evaluation/ResultCard';

export default function ResultPage({ answers, onReset }) {
  return <ResultCard answers={answers} onReset={onReset} />;
}
