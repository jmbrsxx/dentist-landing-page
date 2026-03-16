import React from 'react';
import './FinalCTA.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FinalCTA = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section className={`final-cta fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={ref} style={{ display: 'none' }}>
    </section>
  );
};

export default FinalCTA;
