import { useEffect, useRef } from 'react';

function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';

    setTimeout(() => {
      el.style.transition = 'all 0.8s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      style={{
        padding: '120px 5%',
        background: '#fff',
        textAlign: 'center',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: '2.4rem',
          marginBottom: '10px',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          letterSpacing: '0.5px',
          color: '#000',
        }}
      >
        Serviços
      </h2>

      <p
        style={{
          color: '#777',
          marginBottom: '80px',
          fontSize: '1rem',
        }}
      >
        Beleza com precisão e naturalidade
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '60px 120px',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        {[
          {
            title: 'Noivas',
            desc: 'Produção completa para o seu grande dia',
          },
          {
            title: 'Eventos',
            desc: 'Maquiagem para ocasiões especiais',
          },
          {
            title: 'Editorial',
            desc: 'Ensaios e produções profissionais',
          },
          {
            title: 'Automaquiagem',
            desc: 'Técnicas para realçar sua beleza no dia a dia',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: '25px 20px',
              borderRadius: '10px',
              background: 'rgba(0,0,0,0.02)', // 🔥 leve
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                marginBottom: '8px',
                fontWeight: 500,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}
            >
              {item.desc}
            </p>

            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '2px',
                color: '#000',
                cursor: 'pointer',
                transition: 'opacity 0.3s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = 0.5)}
              onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
            >
              AGENDAR →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;