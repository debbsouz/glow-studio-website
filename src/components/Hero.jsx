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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '70vh' : '85vh', // 🔥 ajuste mobile
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
              }}
              draggable={false}
            />

            {/* overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.55))',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: isMobile ? '0 1rem' : '0 2rem',
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 7vw, 5rem)', // 🔥 menor no mobile
                  fontFamily: "'Playfair Display', serif",
                  color: '#fff',
                  marginBottom: '0.8rem',
                  letterSpacing: '2px',
                }}
              >
                {slide.title}
              </h1>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.3rem)',
                  color: '#e5e5e5',
                  maxWidth: '520px',
                  marginBottom: isMobile ? '1.2rem' : '2rem',
                }}
              >
                {slide.subtitle}
              </p>

              <a
                href="#contato"
                className="glow-btn"
                style={{
                  marginTop: isMobile ? '1rem' : '2rem', // 🔥 antes tava MUITO longe
                }}
              >
                Agendar
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* setas */}
      {!isMobile && ( // 🔥 esconde no mobile (fica mais clean)
        <>
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            style={arrowStyle('left')}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            style={arrowStyle('right')}
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* bolinhas */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: '7px',
              height: '7px',
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

const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '2%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.7)',
  border: 'none',
  borderRadius: '50%',
  width: '38px',
  height: '38px',
  cursor: 'pointer',
});

export default Hero;