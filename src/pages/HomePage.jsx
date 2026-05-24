/**
 * HomePage.jsx — Page component
 * Halaman utama yang menyusun semua section homepage.
 * Menerima ref untuk scroll ke form evaluasi.
 */

import { forwardRef } from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import EvaluationForm from '../components/evaluation/EvaluationForm';

const HomePage = forwardRef(function HomePage({ onStartEval, onSubmit }, evalRef) {
  return (
    <>
      <HeroSection onStartEval={onStartEval} />
      <FeaturesSection />
      <HowItWorksSection />
      <div ref={evalRef}>
        <EvaluationForm onSubmit={onSubmit} />
      </div>
    </>
  );
});

export default HomePage;
