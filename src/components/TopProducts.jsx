import React from 'react';

const products = [
  {
    title: "Fenty Beauty Foundation",
    image: "https://via.placeholder.com/400x400",
  },
  {
    title: "Benefit Hoola Bronzer",
    image: "https://via.placeholder.com/400x400",
  },
  {
    title: "Glossier Lip Gloss",
    image: "https://via.placeholder.com/400x400",
  },
  {
    title: "Anastasia Brow Wiz",
    image: "https://via.placeholder.com/400x400",
  },
];

function TopProducts() {
  return (
    <section
      style={{
        padding: '120px 5%',
        background: '#fff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.4rem',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          marginBottom: '10px',
          color: '#000',
        }}
      >
        Produtos que utilizo
      </h2>

      <p
        style={{
          color: '#777',
          marginBottom: '80px',
          fontSize: '1rem',
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Seleção profissional para resultados impecáveis
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                overflow: 'hidden',
                borderRadius: '12px',
                marginBottom: '15px',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '260px',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  transition: 'all 0.4s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>

            <h3
              style={{
                fontSize: '0.95rem',
                fontFamily: "'Montserrat', sans-serif",
                color: '#000',
                fontWeight: 500,
              }}
            >
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopProducts;