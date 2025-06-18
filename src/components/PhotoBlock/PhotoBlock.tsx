import React from 'react';
import './PhotoBlock.css';
import { Image as ImageIcon } from 'lucide-react';

const PhotoBlock: React.FC = () => {
  const photos = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <section className="photo-block-section ">
        <div className="mt-16 text-center mb-16 resolutions-header">
          <h2 className="resolutions-title relative inline-block" style={{fontFamily: 'Onest, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 32px)', color: '#efaa34', textAlign: 'center', lineHeight: 1, marginBottom: 8}}>
            Фотогалерея <span style={{color: '#efaa34'}}></span>
          </h2>
          {/* <p style={{fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', opacity: 0.8, marginBottom: 0, marginTop: 0, textAlign: 'center', padding: '0 16px'}}>
            Фотогалерея с мероприятий прошлых лет
          </p> */}
        </div>
        <div className="photo-block-container">
          <div className="photo-marquee">
            <div className="photo-track">
              {photos.map((num) => (
                <div key={num} className="photo-item">
                  <img 
                    src={`/photoblock/image${num}.jpg`} 
                    alt={`Фото ${num}`} 
                    className="photo-image"
                  />
                </div>
              ))}
              {photos.map((num) => (
                <div key={`duplicate-${num}`} className="photo-item">
                  <img 
                    src={`/photoblock/image${num}.jpg`} 
                    alt={`Фото ${num}`} 
                    className="photo-image"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="album-button-container">
            <a href="https://disk.yandex.ru/d/ADL1MI8rCNz84g" target="_blank" rel="noopener noreferrer">
              <button className="album-button" style={{ 
                backgroundColor: '#efaa34',
                transition: 'background-color 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}>
                <div 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: 'transparent',
                    borderRadius: '8px'
                  }} 
                  className="album-button-image"
                />
                <span className="album-button-text" style={{ color: 'white' }}>
                  <span className="album-button-icon"><ImageIcon size={30} /></span>
                  ВСЕ ФОТО
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="photo-block-caption" style={{fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 'clamp(16px, 3vw, 12px)', color: '#4B5563', marginTop:16, opacity: 0.8, textAlign: 'center'}}>
        Добыча угля в Нерюнгринском районе. Колмар. Якутия. Фото Ю.Н. Коковина.
      </div>
    </>
  );
};

export default PhotoBlock; 


{/* <div className="album-button-container">
<a href="https://disk.yandex.ru/d/T5kqMS1ICe9tfg" target="_blank" rel="noopener noreferrer">
  <button className="album-button">
    <img 
      src="/photoblock/image10.jpg" 
      alt="Альбом" 
      className="album-button-image"
    />
    <span className="album-button-text">
      <span className="album-button-icon"><ImageIcon size={30} /></span>
      ВСЕ ФОТО
    </span>
  </button>
</a>
</div> */}