import React from 'react';
import { BookOpen } from 'lucide-react';
import './PackageStyles.css';

const PackageScience: React.FC = () => {
  return (
    <div className="become-partner-package-details">
      <div className="become-partner-package-intro">
        <div className="become-partner-package-badge science">
          <BookOpen size={20} />
          <span>Научный пакет</span>
        </div>
        <p className="become-partner-package-summary">
          Участие в научной программе с возможностью публикации исследований и обмена опытом.
        </p>
      </div>

      <div className="become-partner-package-content-section">
        {/* <h3 className="become-partner-section-title">Пакет «Делегат (наука)»</h3> */}
        
        <div className="become-partner-content-block">
          <p>• Участие 1 (одного) представителя научной организации во всех мероприятиях деловой программы международного конгресса «Угольная промышленность: инновации, цифровизация и экологическая безопасность»;</p>
          <p>• Участие 1 (одного) представителя научной организации в процедуре награждения номинантов ежегодной премии;</p>
          <p>• Размещение логотипа компании (организации):</p>
          <div className="become-partner-sub-list">
            <p>– в программе международного конгресса;</p>
            <p>– на сайте международного конгресса;</p>
          </div>
          <p>• Получение пакета рабочих материалов конгресса;</p>
          <p>• Публикация статьи о компании (организации) или рекламного модуля в информационно-аналитическом журнале «Региональная энергетика и энергосбережение» (1 полоса А4, материал предоставляется заказчиком);</p>
          <p>• Предоставление компании (организации) делегата фото- и видеоматериалов, подготовленных по итогам проведения международного конгресса и ежегодной премии;</p>
          <p>• Получение презентаций спикеров (по запросу);</p>
          <p>• Кофе-брейки по программе.</p>
          <p>• Вручение диплома «Делегат».</p>
        </div>
      </div>

      <div className="become-partner-bonus-section">
        <div className="become-partner-bonus-card special-price">
          <h4 className="become-partner-bonus-title">СПЕЦИАЛЬНАЯ ЦЕНА ДЛЯ ДЕЛЕГАТОВ ОТ НАУЧНЫХ ОРГАНИЗАЦИЙ</h4>
        </div>
      </div>

      <div className="become-partner-contact-section">
        <p className="become-partner-contact-text">
          Для получения подробной информации о стоимости и условиях участия{' '}
          <a href="/#register" className="become-partner-registration-link" target="_blank" rel="noopener noreferrer">
            зарегистрируйтесь
          </a>{' '}
          и тогда с вами свяжется наша администрация.
        </p>
      </div>
    </div>
  );
};

export default PackageScience;