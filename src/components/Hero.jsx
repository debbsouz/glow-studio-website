import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section
      className="heroGlow"
      style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        minHeight: '70vh',
        overflow: 'hidden',
        marginBottom: '60px',
        background: 'linear-gradient(180deg, #fff0f5 0%, #ffffff 100%)'
      }}
    >
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
              backgroundImage: `url(${slide.image})`,
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
              padding: '0 24px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}>
              <h1 style={{
                fontSize: '3.6rem',
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#fff'
              }}>
                Descubra o Glow Perfeito
              </h1>
              <p style={{
                margin: '18px auto',
                maxWidth: '520px',
                fontSize: '1.15rem',
                lineHeight: 1.6,
                color: '#fff'
              }}>
                Experimente brilho, textura e luxo em cada produto.
              </p>
              <button
                className="glowButton"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '1rem'
                }}
              >
                Ver Promoções
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        style={{
          position: 'absolute',
          top: '50%',
          left: '28px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          border: '1px solid rgba(255, 105, 180, 0.4)',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 16px rgba(255, 105, 180, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <ChevronLeft size={18} color="#333" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Próximo slide"
        style={{
          position: 'absolute',
          top: '50%',
          right: '28px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          border: '1px solid rgba(255, 105, 180, 0.4)',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 0 16px rgba(255, 105, 180, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <ChevronRight size={18} color="#333" />
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
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: currentSlide === index ? '1px solid var(--glow)' : '1px solid rgba(255,255,255,0.6)',
              backgroundColor: currentSlide === index ? 'var(--glow)' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.2s, border 0.2s',
              transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
