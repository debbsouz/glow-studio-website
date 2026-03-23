import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://i.pinimg.com/1200x/d7/42/58/d7425895b32ef5c4c5b31e0cff54aa22.jpg',
    title: 'Glow Studio',
    subtitle: 'Maquiagem profissional que realça sua beleza única',
    position: 'center 30%',
  },
  {
    image: 'https://i.pinimg.com/1200x/08/82/7f/08827fc3df8a8c6cf811d3e51ffa3030.jpg',
    title: 'Transformações que Brilham',
    subtitle: 'Especializada em noivas e eventos',
    position: 'center 35%',
  },
  {
    image: 'https://i.pinimg.com/1200x/c3/2e/d5/c32ed552b3628617a167560ce479c9e7.jpg',
    title: 'Seu Momento, Seu Glow',
    subtitle: 'Agende sua sessão e sinta-se radiante',
    position: 'center 40%',
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: `${slides.length * 100}%`,
          height: '100%',
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          transition: 'transform 0.7s ease',
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: `${100 / slides.length}%`,
              height: '100%',
              position: 'relative',
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: slide.position,
                filter: 'brightness(0.85)',
                display: 'block',
              }}
              draggable={false}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 1.5rem',
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5rem)',
                  fontFamily: "'Playfair Display', serif",
                  color: '#ffffff',
                  marginBottom: '1rem',
                  letterSpacing: '2px',
                  textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  color: '#e5e5e5',
                  maxWidth: '600px',
                  marginBottom: '2rem',
                }}
              >
                {slide.subtitle}
              </p>

              <a
                href="#contato"
                className="glow-btn glow-btn-lg"
                style={{ marginTop: '3rem' }}
              >
                Agendar Agora
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* setas */}
      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
          )
        }
        style={{
          position: 'absolute',
          top: '50%',
          left: '2%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          cursor: 'pointer',
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % slides.length)
        }
        style={{
          position: 'absolute',
          top: '50%',
          right: '2%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          cursor: 'pointer',
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* indicadores */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background:
                index === currentSlide
                  ? '#fff'
                  : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;