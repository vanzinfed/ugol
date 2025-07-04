import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerCarousel.css';

interface BannerImage {
  id: number;
  src: string;
  mobileSrc: string;
  alt: string;
  link: string;
}

const bannerImages: BannerImage[] = [
  {
    id: 1,
    src: "/banners/banner1.jpg",
    mobileSrc: "/banners/banner1-mobile.jpg",
    alt: "X Юбилейная международная научно-практическая конференция",
    link: "https://arctic.s-kon.ru/"
  },
  {
    id: 2,
    src: "/banners/banner2.jpg",
    mobileSrc: "/banners/banner2-mobile.jpg",
    alt: "Ежегодная премия За развитие Дальнего Востока и Арктики",
    link: "https://premiya.mrprussia.ru/"
  },
  {
    id: 3,
    src: "/banners/banner3.jpg",
    mobileSrc: "/banners/banner3-mobile.jpg",
    alt: "Техпро: Технологический прорыв",
    link: "https://techproforum.ru/"
  }
];

const BannerCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % bannerImages.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const goToBanner = (index: number) => {
    setActiveIndex(index);
    startTimer();
  };

  const goToPrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? bannerImages.length - 1 : current - 1
    );
    startTimer();
  };

  const goToNext = () => {
    setActiveIndex((current) => 
      (current + 1) % bannerImages.length
    );
    startTimer();
  };

  const handleBannerClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="banner-carousel-container">
      <div className="banner-carousel">
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className={`banner-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ zIndex: index === activeIndex ? 1 : 0 }}
          >
            <div 
              className="banner-image-wrapper"
              onClick={() => handleBannerClick(image.link)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={isMobile ? image.mobileSrc : image.src} 
                alt={image.alt} 
                className="banner-image"
              />
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="nav-button prev"
        onClick={goToPrevious}
        aria-label="Previous banner"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="nav-button next"
        onClick={goToNext}
        aria-label="Next banner"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default BannerCarousel;