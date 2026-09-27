import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src="/hero.jpg" alt="Arचived Closet Collection" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title text-gradient">The Archives</h1>
        <p className="hero-subtitle">Curated. Avant-Garde. Essential.</p>
        <button className="hero-cta">Explore Collection</button>
      </div>
    </section>
  );
};

export default HeroSection;
