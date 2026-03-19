import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://via.placeholder.com/1920x800/ffebee/000?text=Glow+Hero+1',
    alt: 'Mulher sorrindo com maquiagem glamourosa',
  },
  {
    image: 'https://via.placeholder.com/1920x800/fff0f5/000?text=Glow+Hero+2',
    alt: 'Produtos premium em display elegante',
  },
  {
    image: 'https://via.placeholder.com/1920x800/fecdd3/000?text=Glow+Hero+3',
    alt: 'Beleza radiante com acabamento luminoso',
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
      height: 'calc(100vh - 110px)',
      maxHeight: '820px',
      overflow: 'hidden',
      marginBottom: '40px'
    }}>
      <div style={{
        display: 'flex',
        width: `${slides.length * 100}%`,
        height: '100%',
        transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        transition: 'transform 0.8s ease'
      }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: `${100 / slides.length}%`,
              height: '100%',
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.6) 100%), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              padding: '0 24px'
            }}>
              <h1 style={{
                fontSize: '3.2rem',
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}>
                Descubra o Glow Perfeito
              </h1>
              <p style={{
                margin: '18px auto',
                maxWidth: '520px',
                fontSize: '1.2rem',
                lineHeight: 1.5,
                color: 'rgba(255,255,255,0.92)'
              }}>
                Beleza premium para você brilhar
              </p>
              <button style={{
                backgroundColor: '#fecdd3',
                color: '#333',
                border: 'none',
                padding: '14px 32px',
                fontSize: '1rem',
                borderRadius: '999px',
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                transition: 'transform 0.2s, background-color 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ffebee';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#fecdd3';
                e.target.style.transform = 'translateY(0)';
              }}>
                Ver Promoções
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} style={{
        position: 'absolute',
        top: '50%',
        left: '24px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        border: 'none',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        cursor: 'pointer',
        fontSize: '1.35rem',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        ‹
      </button>
      <button onClick={nextSlide} style={{
        position: 'absolute',
        top: '50%',
        right: '24px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        border: 'none',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        cursor: 'pointer',
        fontSize: '1.35rem',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        ›
      </button>

      <div style={{
        position: 'absolute',
        bottom: '22px',
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
              width: currentSlide === index ? '14px' : '10px',
              height: currentSlide === index ? '14px' : '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentSlide === index ? '#fecdd3' : 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              transition: 'width 0.2s, height 0.2s'
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
