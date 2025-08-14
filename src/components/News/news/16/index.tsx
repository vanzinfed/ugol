import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 16,
  title: "Открыт первый угольный разрез компании «Кабактинское»!",
  date: "3 июля, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Открытое сегодня производство — это новые рабочие места и вклад в развитие всей республики."
};

const News: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.newsArticlePage}>
        <Link to="/news" className={styles.backButton}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Назад к новостям
        </Link>
        <div className={styles.newsContent}>
          <h1 className={styles.newsTitle}>{newsMeta.title}</h1>
          <div className={styles.newsDate}>{newsMeta.date}</div>
          <div className={styles.newsImageContainer}>
            <img src={newsMeta.image} alt={newsMeta.title} className={styles.newsImage} />
          </div>
          <div className={styles.newsText}>
            <p>
              Угольная отрасль всегда была одной из основ нашей экономики, а теперь мы сделали ещё один шаг в её развитие. Особенно символично, что это происходит в год 50-летия Нерюнгри - города, который вырос благодаря добыче угля и сильным людям, работавшим здесь с самого начала.
            </p>

            <p>
              Открытое сегодня производство - это новые рабочие места и вклад в развитие всей республики. В прошлом году Нерюнгринский район добыл рекордные 49 миллионов тонн угля. Уверен, что и «Кабактинское» будет вносить свой вклад в это дело. Ресурсы разреза - более 1 млрд тонн. Только на первом участке разреза будут добывать не менее 750 тысяч тонн угля в год.
            </p>

            <p>
              Такие проекты дают энергию Якутии и всей России. Мы всегда будем двигаться только вперёд.
            </p>

            <p>
              #ВместеТолькоВперёд
            </p>

            <p>
              <a href="https://t.me/aisen_nikolaev" target="_blank" rel="noopener noreferrer" style={{ color: '#229ED9', textDecoration: 'underline' }}>
                t.me/aisen_nikolaev
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
