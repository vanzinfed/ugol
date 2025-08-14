import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 15,
  title: "ОАО «Шахта “Угольная”» в Чукотском АО на 31 процент увеличило объём  добычи бурого угля",
  date: "30 июня, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Объём добычи бурого угля на шахте «Угольная» вырос на 31% за первые пять месяцев 2025 года по сравнению с аналогичным периодом прошлого года."
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
            <p>ОАО «Шахта “Угольная”», владеющее бессрочной лицензией на отработку запасов Анадырского буроугольного месторождения в Чукотском автономном округе, в период с января по май 2025 года добыло 23,6  тыс. тонн бурого угля, что на 31% больше, чем за аналогичный период 2024 года.</p>
            
            <p>Плановые показатели объёма добычи угля на шахте формируются на основе контрактов на поставку угля заказчикам. В текущем году, по данным Правительства Чукотского автономного округа, ГП ЧАО «Чукоткоммунхоз» будет необходимо 12,8 тыс. тонн угля для отопления сёл Усть-Белая, Канчалан и Снежное; 14,5 тыс. тонн угля для работы котельной посёлка городского типа Провидения. Кроме того, 40 тыс. тонн угля будет направлено АО «Чукотэнерго» для обеспечения работы Эгвекинотской ГРЭС (ЭГРЭС). Соответственно, в 2025 году шахтёры извлекут из недр Анадырского буроугольного месторождения не менее 67,3 тыс. тонн угля.</p>

            <p>Топливо, добываемое  ОАО «Шахта “Угольная”» на Анадырском буроугольном месторождении, в полном объёме отгружается предприятиям Чукотского автономного округа.</p>

            <p>При подготовке новостного материала были использованы сведения, представленные в новостном материале, опубликованном 27 июня 2025 года на бизнес-портале «NEDRADV» (www.nedradv.ru).</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
