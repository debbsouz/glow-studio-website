import React from 'react';

function Diferenciais() {
  const diferenciais = [
    'Atendimento exclusivo e personalizado',
    'Produtos premium de alta performance',
    'Técnica glow natural e sofisticada',
    'Experiência leve, elegante e acolhedora',
  ];

  return (
    <section
      style={{
        padding: '120px 5%',
        background: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* TEXTO */}
        <div>
          <h2
            style={{
              fontSize: '2.4rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              marginBottom: '20px',
              color: '#000',
            }}
          >
            O que torna a Glow única
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '40px',
              fontSize: '1rem',
            }}
          >
            Mais do que maquiagem, uma experiência pensada em cada detalhe
            para valorizar sua beleza de forma leve, sofisticada e natural.
          </p>

          {/* LISTA */}
          <div>
            {diferenciais.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '18px',
                  fontSize: '1rem',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>•</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* IMAGEM */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/3b/8c/64/3b8c64825e9cae6beda8450488bf3091.jpg"
            alt="Glow Studio"
            style={{
              width: '100%',
              borderRadius: '16px',
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%)';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;