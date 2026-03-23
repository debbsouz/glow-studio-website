import React from 'react';

function Diferenciais() {
  const diferenciais = [
    {
      title: 'Atendimento Exclusivo',
      desc: 'Cada sessão é criada especialmente para você, respeitando sua personalidade e estilo.',
    },
    {
      title: 'Produtos de Alta Performance',
      desc: 'Somente marcas premium selecionadas para resultados impecáveis e duradouros.',
    },
    {
      title: 'Técnica Glow Natural',
      desc: 'Pele luminosa e saudável, com acabamento sofisticado e sem excesso.',
    },
    {
      title: 'Experiência Cuidada',
      desc: 'Ambiente sereno, tempo dedicado e atenção total para você se sentir especial.',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#ffffff',
      }}
    >
      {/* Imagem de fundo nítida e elegante */}
      <img
        src="https://i.pinimg.com/1200x/3b/8c/64/3b8c64825e9cae6beda8450488bf3091.jpg"
        alt="Maquiagem glow elegante"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%', // ajustei para focar melhor no rosto/pessoa
          filter: 'brightness(1.12) contrast(1.06) saturate(1.04)',
          opacity: 0.18,
          zIndex: 1,
        }}
      />

      {/* Overlay branco leve */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.90)',
          backdropFilter: 'blur(6px)',
          zIndex: 2,
        }}
      />

      {/* Conteúdo principal */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1100px',
          width: '100%',
          padding: '0 6%',
          textAlign: 'center',
          color: '#111111',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            color: '#000000',
          }}
        >
          O que torna o Glow Studio único
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            maxWidth: '680px',
            margin: '0 auto 3rem',
            lineHeight: 1.75,
            color: '#444444',
            fontWeight: 400,
          }}
        >
          Uma experiência de beleza criada com precisão, cuidado e sofisticação.
        </p>

        {/* Grid de diferenciais */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {diferenciais.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '2.2rem 1.8rem',
                border: '1px solid #e8e8e8',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000000';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e8e8e8';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3
                style={{
                  fontSize: '1.28rem',
                  fontWeight: 600,
                  marginBottom: '0.9rem',
                  color: '#000000',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  color: '#555555',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA padronizado */}
        <div style={{ marginTop: '4.5rem' }}>
          <a
            href="#contact"
            className="glow-btn glow-btn-lg"
          >
            Agendar sua sessão
          </a>
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;