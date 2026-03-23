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
      {/* Imagem de fundo nítida e bonita */}
      <img
        src="https://i.pinimg.com/1200x/3b/8c/64/3b8c64825e9cae6beda8450488bf3091.jpg"
        alt="Maquiagem glow elegante"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          opacity: 0.18,
        }}
      />
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            marginBottom: '1.2rem',
            letterSpacing: '-0.02em',
            color: '#000000',
          }}
        >
          O que torna o Glow Studio único
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            maxWidth: '620px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
            color: '#444444',
            fontWeight: 400,
          }}
        >
          Uma experiência de beleza criada com precisão, cuidado e sofisticação.
        </p>

        {/* Grid de diferenciais minimalista */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            zIndex: 3,
            position: 'relative',
          }}
        >
          {diferenciais.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '2rem 1.5rem',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.9rem',
                  color: '#111111',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.65,
                  color: '#555555',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA clean e elegante */}
        <div style={{ textAlign: 'center', marginTop: '4rem', zIndex: 3, position: 'relative' }}>
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