import React, { useEffect, useRef } from 'react';

function InfluencerCTA() {
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
      ref={sectionRef}
      style={{
        padding: '120px 5%',
        background: '#f9f9f9', // 🔥 leve contraste com resto
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* IMAGEM */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/d9/59/48/d9594893652e922782388ee2b94e6828.jpg"
            alt="Modelo Glow"
            style={{
              width: '100%',
              borderRadius: '16px',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.05)',
              transition: 'all 0.4s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05)';
            }}
          />
        </div>

        {/* TEXTO */}
        <div>
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '2px',
              color: '#999',
              display: 'block',
              marginBottom: '10px',
            }}
          >
            GLOW EXPERIENCE
          </span>

          <h2
            style={{
              fontSize: '2.4rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              marginBottom: '20px',
              color: '#000',
            }}
          >
            Seja modelo do studio
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '20px',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Estamos em busca de modelos para participar de produções reais do studio,
            incluindo noivas, eventos e ensaios.
          </p>

          <p
            style={{
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '20px',
            }}
          >
            Você pode receber maquiagem profissional, participar de conteúdos e viver
            a experiência completa Glow — tudo com acompanhamento especializado.
          </p>

          <p
            style={{
              color: '#888',
              marginBottom: '35px',
              fontSize: '0.9rem',
            }}
          >
            Vagas limitadas • Seleção por perfil
          </p>

          <a
            href="#contato"
            style={{
              display: 'inline-block',
              padding: '12px 26px',
              border: '1px solid #000',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '1.5px',
              color: '#000',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#000';
            }}
          >
            QUERO PARTICIPAR
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfluencerCTA;