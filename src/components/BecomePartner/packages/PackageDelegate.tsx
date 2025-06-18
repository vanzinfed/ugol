import React from 'react';
import { Star } from 'lucide-react';
import './PackageStyles.css';

const PackageDelegate: React.FC = () => {
  return (
    <div className="become-partner-package-details">
      <div className="become-partner-package-intro">
        <div className="become-partner-package-badge delegate">
          <Star size={20} />
          <span>Базовый пакет</span>
        </div>
        {/* <p className="become-partner-package-summary">
          Идеальный выбор для компаний, желающих принять участие в деловой программе 
          конгресса и получить базовые маркетинговые возможности.
        </p> */}
      </div>

      <div className="become-partner-package-content-section">
        
        
        <div className="become-partner-content-block">
          <p>• Участие 1 (одного) представителя компании (организации) во всех мероприятиях деловой программы международного конгресса «Угольная промышленность: инновации, цифровизация и экологическая безопасность»</p>
          
          <p>• Участие 1 (одного) представителя компании (организации) в процедуре награждения номинантов ежегодной премии</p>
          
          <p>• Размещение логотипа компании (организации):</p>
          <div className="become-partner-sub-list">
            <p>– в программе международного конгресса</p>
            <p>– на сайте международного конгресса</p>
          </div>
          
          <p>• Публикация статьи о компании (организации) или рекламного модуля в информационно-аналитическом журнале «Региональная энергетика и энергосбережение» (1 полоса А4, материал предоставляется заказчиком)</p>
          
          <p>• Размещение новостных блоков на страницах в социальных сетях «ВКонтакте» и Telegram «Дальний Восток и Арктика» (материал предоставляется заказчиком)</p>
          
          <p>• Получение пакета рабочих материалов конгресса</p>
          
          <p>• Предоставление компании (организации) делегата фото- и видеоматериалов, подготовленных по итогам проведения международного конгресса и ежегодной премии</p>
          
          <p>• Получение презентаций спикеров (по запросу)</p>
          
          <p>• Кофе-брейки по программе</p>
          
          <p>• Вручение диплома «Делегат»</p>
        </div>
      </div>

      <div className="become-partner-bonus-section">
        <div className="become-partner-bonus-card">
          <h4 className="become-partner-bonus-title">🎁 Бонус</h4>
          <p className="become-partner-bonus-text">
            Предоставление скидки в размере 5% на участие в XI Международной 
            научно-практической конференции «Дальний Восток и Арктика: устойчивое развитие» 
            (март 2026 года).
          </p>
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

export default PackageDelegate;