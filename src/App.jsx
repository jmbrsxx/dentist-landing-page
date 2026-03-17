import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import DenturesSlider from './components/DenturesSlider';
import TeethResultsSlider from './components/TeethResultsSlider';
import BracesSlider from './components/BracesSlider';
import TreatmentVideosSlider from './components/TreatmentVideosSlider';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import SocialNetworks from './components/SocialNetworks';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Credibility />
      <BeforeAfterSlider />
      <DenturesSlider />
      <TeethResultsSlider />
      <BracesSlider />
      <TreatmentVideosSlider />
      <About />
      <Differentials />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <SocialNetworks />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
