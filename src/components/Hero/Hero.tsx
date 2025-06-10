import React from 'react';
import { Calendar } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;
    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
    const offset = navbarHeight + topBarHeight;

    const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (!registerSection) return;

    const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;
    const topBarHeight = document.querySelector('.top-bar')?.getBoundingClientRect().height || 0;
    const offset = navbarHeight + topBarHeight;

    const targetPosition = registerSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="title-container">
          <h1 className="main-title wadik animate-fade-in delay-100">Международный конгресс</h1>
        </div>
        
        <p className="subtitle animate-fade-in delay-300">
          «Угольная промышленность: инновации, цифровизация и экологическая безопасность»
        </p>

        <div className="event-info animate-fade-in delay-400">
          <p className="event-date">17 октября 2025</p>
          <p className="event-location">Москва</p>
          <p className="event-venue">Торгово-промышленная палата РФ</p>
        </div>
        
        <div className="buttons-container">
          <button className="details-btn animate-fade-in delay-500" onClick={scrollToRegister}>
            <span>Условия участия</span>
          </button>
          <button className="corner-btn animate-fade-in delay-600" onClick={scrollToAbout}>
            <span>О конгрессе</span>
          </button>
          <button className="sponsor-btn animate-fade-in delay-700" onClick={scrollToRegister}>
            <span>Стать спонсором</span>
          </button>
          <button className="partner-btn animate-fade-in delay-800" onClick={scrollToRegister}>
            <span>Стать партнером</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;