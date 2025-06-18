import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

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

  const handlePartnerClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      navigate('/become-partner');
    }, 500);
  };

  return (
    <section id="hero" className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="title-container">
          <h1 className="main-title wadik animate-fade-in delay-100" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Международный конгресс</h1>
        </div>
        
        <p className="subtitle animate-fade-in delay-300" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          «Угольная промышленность: инновации, цифровизация и экологическая безопасность»
        </p>

        <div className="event-info animate-fade-in delay-400">
          <p className="event-date">17 октября 2025</p>
          <p className="event-location">Москва</p>
        </div>
        
        <div className="buttons-container">
          <button className="details-btn animate-fade-in delay-500" onClick={scrollToRegister}>
            <span>Условия участия</span>
          </button>
          <button className="corner-btn animate-fade-in delay-600" onClick={scrollToAbout}>
            <span>О конгрессе</span>
          </button>
          <button className="sponsor-btn animate-fade-in delay-700" onClick={handlePartnerClick}>
            <span>Стать партнером</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;