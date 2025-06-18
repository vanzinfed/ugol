import React from 'react';
import { Zap, Users, Lightbulb, Earth } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-bg-gradient">
        <div className="bg-grid-pattern"></div>
      </div>
      <div className="container">
        <div className="about-header">
          <h2 className="about-main-title">О конгрессе</h2>
        </div>
        <div className="about-features">
          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Zap size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">500+</div>
                <div className="about-feature-innovation-stat-desc">Участников</div>
              </div>
            </div>
            <div className="about-feature-title">Инновации и цифровизация</div>
            <div className="about-feature-desc about-feature-desc-justify">
             Профессиональная международная площадка, которая объединяет руководителей ведущих предприятий угольной промышленности России и стран СНГ: генеральных директоров, технических руководителей, инициаторов инвестиционных проектов, представителей правительств стран СНГ, отраслевых регуляторно-надзорных органов, инжиниринговых и проектно-строительных компаний, лицензиаров, разработчиков, производителей и поставщиков оборудования и услуг.
            </div>
          </div>

          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Earth size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">5+</div>
                <div className="about-feature-innovation-stat-desc">Сессий</div>
              </div>
            </div>
            <div className="about-feature-title">Экологическая безопасность</div>
            <div className="about-feature-desc about-feature-desc-justify">
              Особое внимание уделяется вопросам экологической безопасности и устойчивого развития угольной промышленности. Участники обсудят современные методы снижения экологического воздействия и внедрения "зеленых" технологий в производственные процессы.               
            </div>
          </div>

          <div className="about-feature-card about-feature-innovation">
            <div className="about-feature-innovation-row">
              <div className="about-feature-innovation-rect about-feature-innovation-rect-icon">
                <Lightbulb size={32} strokeWidth={2.2} />
              </div>
              <div className="about-feature-innovation-rect about-feature-innovation-rect-stats">
                <div className="about-feature-innovation-stat-main">50+</div>
                <div className="about-feature-innovation-stat-desc">Экспертов</div>
              </div>
            </div>
            <div className="about-feature-title">Технологическое развитие</div>
            <div className="about-feature-desc about-feature-desc-justify">
            Мероприятие посвящено обмену опытом ключевых компаний угольной индустрии, обсуждению крупнейших инвестиционных проектов, связанных со строительством и модернизацией предприятий и других объектов инфраструктуры, с освоением новых месторождений; обсуждению возможностей повышения эффективности действующих предприятий угольной отрасли.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
