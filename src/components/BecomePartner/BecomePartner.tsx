import React, { useState } from 'react';
import { X } from 'lucide-react';
import PackageDelegate from './packages/PackageDelegate';
import PackageExpert from './packages/PackageExpert';
import PackageExponent from './packages/PackageExponent';
import PackageGeneralPartner from './packages/PackageGeneralPartner';
import PackagePlenaryPartner from './packages/PackagePlenaryPartner';
import PackageRoundTablePartner from './packages/PackageRoundTablePartner';
import PackageScience from './packages/PackageScience';
import './BecomePartner.css';

interface Package {
  id: string;
  title: string;
  shortDescription: string;
  color: string;
  component: React.ComponentType;
}

const packages: Package[] = [
  {
    id: 'delegate',
    title: 'Пакет «Делегат»',
    shortDescription: 'Участие в деловой программе и получение рабочих материалов',
    color: 'from-blue-500 to-blue-600',
    component: PackageDelegate
  },
  {
    id: 'science',
    title: 'Пакет «Делегат (наука)»',
    shortDescription: 'Научное участие и публикация исследований',
    color: 'from-teal-500 to-teal-600',
    component: PackageScience
  },
  {
    id: 'expert',
    title: 'Пакет «Эксперт»',
    shortDescription: 'Расширенное участие с экспертными возможностями',
    color: 'from-emerald-500 to-emerald-600',
    component: PackageExpert
  },
  {
    id: 'exponent',
    title: 'Пакет «Стратегический партнер»',
    shortDescription: 'Возможность представить свою продукцию и услуги',
    color: 'from-purple-500 to-purple-600',
    component: PackageExponent
  },
  {
    id: 'roundtable-partner',
    title: 'Пакет «Партнер круглого стола»',
    shortDescription: 'Партнерство с круглым столом и экспертными дискуссиями',
    color: 'from-indigo-500 to-indigo-600',
    component: PackageRoundTablePartner
  },
  {
    id: 'plenary-partner',
    title: 'Пакет «Официальный партнер»',
    shortDescription: 'Официальное партнерство с повышенной видимостью среди ключевой аудитории',
    color: 'from-red-500 to-red-600',
    component: PackagePlenaryPartner
  },
  {
    id: 'general-partner',
    title: 'Пакет «Генеральный партнер»',
    shortDescription: 'Максимальная видимость и статус главного партнера',
    color: 'from-amber-500 to-amber-600',
    component: PackageGeneralPartner
  }
];

const BecomePartner: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const openModal = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="become-partner">
      {/* Header Section */}
      <div className="become-partner-hero-section">
        <div className="become-partner-container">
          <h1 className="become-partner-hero-title">
            Стать партнером
          </h1>
          <p className="become-partner-hero-subtitle">
            Пакеты участия 2025 года
          </p>
          <div className="become-partner-hero-description">
            <p>
              Участие платное. Необходима предварительная <a href="/#register" className="text-blue-600 hover:text-blue-800 font-bold">регистрация</a>.
              Ниже вы можете ознакомиться с возможными пакетами участия.
            </p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="become-partner-packages-section">
        <div className="become-partner-container">
          <div className="become-partner-packages-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="become-partner-package-card"
                onClick={() => openModal(pkg)}
              >
                <div className={`become-partner-package-header bg-gradient-to-r ${pkg.color}`}>
                  <h3 className="become-partner-package-title">{pkg.title}</h3>
                </div>
                <div className="become-partner-package-content">
                  <p className="become-partner-package-description">{pkg.shortDescription}</p>
                  <button className="become-partner-package-btn">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="become-partner-modal-overlay" onClick={closeModal}>
          <div className="become-partner-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="become-partner-modal-header">
              <h2 className="become-partner-modal-title">
                Пакет участия «{selectedPackage.title}»
              </h2>
              <button className="become-partner-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            <div className="become-partner-modal-body">
              <selectedPackage.component />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomePartner;