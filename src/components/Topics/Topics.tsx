import React, { useState } from 'react';
import {
  Wrench,
  Lightbulb,
  Settings,
  Cog,
  Cpu,
  Briefcase,
  Users,
  Shield,
  Factory,
  Building2,
  Terminal,
  Globe,
  Award,
  BarChart,
  AlarmClock,
  Group,
} from 'lucide-react';

interface Topic {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Topics: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const topics: Topic[] = [
    {
      icon: <Users size={24} />,
      title: "200+ руководителей отрасли",
      description: "Лидеры угольных компаний России и СНГ, инициаторы инвестпроектов, производители технологий"
    },
    {
      icon: <Factory size={24} />,
      title: "40+ инвестиционных проектов",
      description: "Строительство новых мощностей, модернизация и освоение месторождений"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Цифровизация угольной промышленности",
      description: "Инновационные цифровые решения и практическая реализация на предприятиях"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Экологическая безопасность",
      description: "Современные экологические практики, снижение выбросов и охрана окружающей среды"
    },
    {
      icon: <Cog size={24} />,
      title: "Технологии и автоматизация",
      description: "Передовые технические решения и системы управления"
    },
    {
      icon: <Shield size={24} />,
      title: "Промышленная безопасность",
      description: "Практика безопасной работы и минимизации рисков на производстве"
    },
    {
      icon: <Wrench size={24} />,
      title: "Модернизация добычи",
      description: "Обновление оборудования, повышение производительности и надежности"
    },
    {
      icon: <Award size={24} />,
      title: "Награждение лучших компаний",
      description: "Церемония признания достижений, инноваций и эффективности"
    },
    {
      icon: <Terminal size={24} />,
      title: "Новые программные решения",
      description: "Автоматизация, предиктивная аналитика, IoT и ИИ в угледобыче"
    },
    {
      icon: <Group size={24} />,
      title: "Закрытые встречи руководителей",
      description: "Формат прямого диалога в клубе генеральных директоров"
    },
    {
      icon: <AlarmClock size={24} />,
      title: "Антикризисные стратегии",
      description: "Интерактивная деловая игра по управлению рисками и кризисами"
    },
    {
      icon: <BarChart size={24} />,
      title: "Тренды и перспективы",
      description: "Будущее отрасли: устойчивость, эффективность и инвестиционная привлекательность"
    }
  ];

  const visibleTopics = showAll ? topics : topics.slice(0, 6);

  return (
    <section id="topics" className="py-20 relative overflow-hidden bg-[#fff6c1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="topics-header text-center mb-12">
          <h2
            className="topics-title relative inline-block"
            style={{
              fontFamily: 'Onest, sans-serif',
              fontWeight: 800,
              fontSize: 36,
              color: '#d0a933',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Темы <span style={{ color: '#d8b84d' }}>конгресса</span>
          </h2>
          <p
            style={{
              fontFamily: 'Onest, sans-serif',
              fontWeight: 600,
              fontSize: 20,
              color: '#5c4a00',
              opacity: 0.9,
              marginBottom: 0,
              marginTop: 0,
              textAlign: 'center',
            }}
          >
            Ключевые направления развития угольной промышленности: от технологий до экологии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {visibleTopics.map((topic, index) => (
            <div
              key={index}
              className="group rounded-xl p-6 border border-[#e0c767] bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                   style={{
                     backgroundColor: '#d0a933',
                     transition: 'background-color 0.3s ease',
                   }}>
                {topic.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#5c4a00] group-hover:text-[#d0a933] transition-colors">
                {topic.title}
              </h3>
              <p className="text-gray-700">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        {topics.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-[#d0a933] hover:bg-[#e0c767] text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {showAll ? 'Показать меньше' : 'Показать все темы'}
            </button>
          </div>
        )}
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[#e8d681] rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-[#d8b84d] rounded-full blur-3xl opacity-40"></div>
    </section>
  );
};

export default Topics;
