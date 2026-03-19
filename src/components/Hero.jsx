import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://via.placeholder.com/1200x500/ffebee/000?text=Promo+Glow+Studio+1',
    title: 'Promoções Imperdíveis',
    buttonText: 'Ver Ofertas'
  },
  {
    image: 'https://via.placeholder.com/1200x500/fff0f5/000?text=Promo+Glow+Studio+2',
    title: 'Promoções Imperdíveis',
    buttonText: 'Ver Ofertas'
  },
  {
    image: 'https://via.placeholder.com/1200x500/fecdd3/000?text=Promo+Glow+Studio+3',
    title: 'Promoções Imperdíveis',
    buttonText: 'Ver Ofertas'
  },
  {
    image: 'https://via.placeholder.com/1200x500/ffe4e1/000?text=Promo+Glow+Studio+4',
    title: 'Promoções Imperdíveis',
    buttonText: 'Ver Ofertas'
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 segundos
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden',
      marginBottom: '40px'
    }}>
      <div style={{
        display: 'flex',
        width: `${slides.length * 100}%`,
        height: '100%',
        transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        transition: 'transform 0.5s ease'
      }}>
        {slides.map((slide, index) => (
          <div key={index} style={{
            width: `${100 / slides.length}%`,
            height: '100%',
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              <h1 style={{
                fontSize: '3rem',
                marginBottom: '20px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '600'
              }}>
                {slide.title}
              </h1>
              <button style={{
                backgroundColor: '#fecdd3',
                color: '#333',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '400',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#ffebee'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fecdd3'}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botões prev/next */}
      <button onClick={prevSlide} style={{
        position: 'absolute',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255,255,255,0.7)',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        fontSize: '1.5rem',
        zIndex: 10
      }}>
        ‹
      </button>
      <button onClick={nextSlide} style={{
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255,255,255,0.7)',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        cursor: 'pointer',
        fontSize: '1.5rem',
        zIndex: 10
      }}>
        ›
      </button>

      {/* Dots */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px'
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentSlide === index ? '#fecdd3' : 'rgba(255,255,255,0.7)',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;