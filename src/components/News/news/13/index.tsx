import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar';
import styles from './styles.module.css';
import newsImage from './main.jpg';
import newsImagePool from './imagepool.jpg';
import newsImageMain from './main.jpg';

export const newsMeta = {
  id: 13,
  title: "В Республике Саха (Якутия) на 15% увеличился объём добычи угля",
  date: "24 июня, 2025",
  image: newsImage,
  imagePool: newsImagePool,
  imageMain: newsImageMain,
  excerpt: "Объём добычи угля в Якутии вырос на 15%, что соответствует стратегическим целям энергетики России до 2050 года."
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
            <p>В Москве 17 октября 2025 года состоится Международный конгресс «Угольная промышленность: инновации, цифровизация и экологическая безопасность». Организаторы мероприятия – Межрегиональное научно-технологическое, деловое и образовательное партнёрство «Устойчивое развитие Дальнего Востока и Арктики (МРПА)» и ООО «Системный консалтинг».</p>

            <p>«Энергетическая стратегия РФ на период до 2050 года», утверждённая Распоряжением Правительства РФ от 12 апреля 2025 года № 908-р, определяет добычу угля и его использование в качестве топлива для энергогенерирующих установок как перспективные направления отечественной энергетики XXI века: наша страна обеспечена запасами угля более чем на 500-летний период, а действующие производственные мощности уже сейчас позволяют наращивать объёмы добычи этого вида полезных ископаемых; развитие новых центров угледобычи обеспечит дополнительно 250 млн т производственной мощности до 2050 года.</p>

            <p>В «Энергетической стратегии РФ на период до 2050 года» ставятся задачи увеличения доли открытого способа добычи угля в общем объёме добычи с 77,7% в 2023 г. до 80 – 83% в 2036 г. и до 82 – 85% в 2050 г. Планка добычи угля определена не ниже 600 млн т в год.</p>

            <p>Приоритет – экологичная и безопасная добыча угля: предполагается внедрение технологий «чистого угля» и инновационных технологий угледобычи, создание широкой линейки продуктов из угля и отходов его обогащения,  развитие углехимии. Сейчас активно реализуется комплексная научно-техническая программа (КНТП) «Чистый уголь – зелёный Кузбасс», утверждённая Распоряжением Правительства РФ от 11 мая 2022 года № 1144-р и призванная содействовать созданию технологий экологически чистой добычи угля и производства новых продуктов на основе глубокой переработки угольного сырья.</p>

            <p>Согласно «Энергетической стратегии РФ на период до 2050 года» особое внимание будет уделено процессу интеграции в угольную промышленность России её новых регионов, богатых запасами каменного угля и имеющих многолетний (и даже многовековой) успешный опыт его добычи и переработки. Действует АНО «Научно-образовательный центр мирового уровня “Кузбасс – Донбасс”», учреждённый Распоряжением Правительства Кемеровской области – Кузбасса от 10 июня 2019 года № 333-р.</p>

            <p>На Конгрессе будут всесторонне рассмотрены наиболее актуальные вопросы, связанные с добычей и переработкой угля и с угольной генерацией электрической и тепловой энергии.</p>

            <p>Подробная информация о мероприятии представлена на сайте https://ugol.s-kon.ru/</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
