import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import Services from './components/Services';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Credibility />
      <Services />
      <About />
      <Differentials />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
