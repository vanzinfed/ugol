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
    id: 'science',
    title: 'Пакет «Делегат (наука)»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
    component: PackageScience
  },
  {
    id: 'delegate',
    title: 'Пакет «Делегат»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
    component: PackageDelegate
  },
  {
    id: 'expert',
    title: 'Пакет «Эксперт»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
    component: PackageExpert
  },
  {
    id: 'roundtable-partner',
    title: 'Пакет «Партнер круглого стола»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
    component: PackageRoundTablePartner
  },
  {
    id: 'exponent',
    title: 'Пакет «Стратегический партнер»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
    component: PackageExponent
  },
  {
    id: 'plenary-partner',
    title: 'Пакет «Официальный партнер»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
    component: PackagePlenaryPartner
  },
  {
    id: 'general-partner',
    title: 'Пакет «Генеральный партнер»',
    shortDescription: '',
    color: 'bg-[#efaa34]',
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
            Стать партнером конгресса
          </h1>
          <p className="become-partner-hero-subtitle">
            Пакеты участия 2025 года
          </p>
          <div className="become-partner-hero-description">
            <p>
              Участие платное. Необходима предварительная <a href="/#register" className="text-blue-600 hover:text-blue-800 font-bold">регистрация</a>.<br></br>
              Ниже вы можете ознакомиться с возможными форматами участия.
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
                style={{ '--package-color': pkg.color.replace('bg-[', '').replace(']', '') } as React.CSSProperties}
              >
                <div className="become-partner-package-header">
                  <h3 className="become-partner-package-title">{pkg.title}</h3>
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
                {selectedPackage.title}
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