import React, { useState, useRef } from 'react';
import { User, Mail, Briefcase, Phone, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Registration: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    personalDataConsent: false,
    newsletterConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.personalDataConsent) {
      alert('Необходимо дать согласие на обработку персональных данных');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Замените эти значения на ваши данные из Email.js
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: 'Администратор ТехПро',
        email: formData.email,
        company: formData.company,
        position: formData.position,
        phone: formData.phone,
        message: `Новая регистрация на Международный Конгресс: Угольная Промышленность\n
                 Имя: ${formData.firstName}\n
                 Фамилия: ${formData.lastName}\n
                 Email: ${formData.email}\n
                 Компания: ${formData.company}\n
                 Должность: ${formData.position}\n
                 Телефон: ${formData.phone}\n
                 Согласие на рассылку: ${formData.newsletterConsent ? 'Да' : 'Нет'}`
      };

      await emailjs.send(
        'service_7j74i5u', // Замените на ваш Service ID
        'template_m4oa7in', // Замените на ваш Template ID
        templateParams,
        'WFrZDUta_EnnLaIX1' // Замените на ваш Public Key
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="register" className="py-20 relative overflow-hidden" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/images/reg1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Декоративные элементы */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[#1db8ad] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-[#00ffeeff] rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 
            className="relative inline-block"
            style={{
              fontFamily: 'Onest, sans-serif',
              fontWeight: 800,
              fontSize: 36,
              color: '#1db8ad',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Запросить условия <span style={{ color: '#1db8ad' }}>участия</span>
          </h2>
          <p
            style={{
              fontFamily: 'Onest, sans-serif',
              fontWeight: 600,
              fontSize: 16,
              color: '#4B5563',
              opacity: 0.9,
              marginBottom: 0,
              marginTop: 0,
              textAlign: 'center',
            }}
          >
            Оставьте свои контактные данные, и мы отправим вам подробную информацию об условиях участия в Международном конгрессе "Угольная промышленность: инновации, цифровизация и экологическая безопасность", 
            включая стоимость, программу и специальные предложения.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-[#1db8ad]">
          {!isSubmitted ? (
            <form ref={formRef} onSubmit={handleSubmit} className="p-6">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">{error}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#fffff] font-medium mb-2">Имя</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-[#1db8ad]" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#1db8ad] rounded-lg focus:ring-2 focus:ring-[#1db8ad] focus:border-[#1db8ad] transition-colors text-gray-900"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[#fffff] font-medium mb-2">Фамилия</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-[#1db8ad]" />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#1db8ad] rounded-lg focus:ring-2 focus:ring-[#1db8ad] focus:border-[#1db8ad] transition-colors text-gray-900"
                      placeholder="Введите вашу фамилию"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[#fffff] font-medium mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-[#1db8ad]" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#1db8ad] rounded-lg focus:ring-2 focus:ring-[#1db8ad] focus:border-[#1db8ad] transition-colors text-gray-900"
                    placeholder="example@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-[#fffff] font-medium mb-2">Компания</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase size={18} className="text-[#1db8ad]" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#1db8ad] rounded-lg focus:ring-2 focus:ring-[#1db8ad] focus:border-[#1db8ad] transition-colors text-gray-900"
                      placeholder="Название компании"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="position" className="block text-[#fffff] font-medium mb-2">Должность</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase size={18} className="text-[#1db8ad]" />
                    </div>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-[#1db8ad] rounded-lg focus:ring-2 focus:ring-[#1db8ad] focus:border-[#1db8ad] transition-colors text-gray-900"
                      placeholder="Ваша должность"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-[#fffff] font-medium mb-2">Телефон</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={18} className="text-[#1db8ad]" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#1db8ad] rounded-lg focus:ring-2 focus:ring-[#1db8ad] focus:border-[#1db8ad] transition-colors text-gray-900"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="personalDataConsent"
                      name="personalDataConsent"
                      type="checkbox"
                      checked={formData.personalDataConsent}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 border border-[#e0c767] rounded bg-gray-50 focus:ring-3 focus:ring-[#d0a933]"
                    />
                  </div>
                  <label htmlFor="personalDataConsent" className="ml-2 text-sm font-medium text-[#fffff]">
                    Я даю согласие на обработку персональных данных
                  </label>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletterConsent"
                      name="newsletterConsent"
                      type="checkbox"
                      checked={formData.newsletterConsent}
                      onChange={handleChange}
                      className="w-4 h-4 border border-[#e0c767] rounded bg-gray-50 focus:ring-3 focus:ring-[#d0a933]"
                    />
                  </div>
                  <label htmlFor="newsletterConsent" className="ml-2 text-sm font-medium text-[#fffff]">
                    Я даю согласие на получение информационных рассылок
                  </label>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-3 bg-[#1db8ad] hover:bg-[#009e96] text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Отправка...' : 'Запросить условия'}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-[#fff6c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-[#d0a933]" />
              </div>
              <h3 className="text-2xl font-bold text-[#5c4a00] mb-2">Запрос успешно отправлен!</h3>
              <p className="text-[#5c4a00] mb-8">
                Благодарим за интерес к Международному конгрессу "Угольная промышленность: инновации, цифровизация и экологическая безопасность". Мы получили ваш запрос.
                В ближайшее время с вами свяжется наш представитель с подробной информацией об условиях участия.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    position: '',
                    phone: '',
                    personalDataConsent: false,
                    newsletterConsent: false
                  });
                }}
                className="text-[#d0a933] hover:text-[#e0c767] font-medium"
              >
                Вернуться к форме регистрации
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;