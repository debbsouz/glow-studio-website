import React from 'react';

const products = [
  {
    title: 'Perfume Floral Deluxe',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=Perfume',
    discount: '70% OFF',
    rating: 4.9,
    oldPrice: 'R$ 299,90',
    price: 'R$ 89,90'
  },
  {
    title: 'Batom Matte Luxo',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Batom',
    discount: '70% OFF',
    rating: 4.7,
    oldPrice: 'R$ 79,90',
    price: 'R$ 31,90'
  },
  {
    title: 'Creme Hidratante Premium',
    image: 'https://via.placeholder.com/400x400/fecdd3/000?text=Creme',
    discount: '70% OFF',
    rating: 4.8,
    oldPrice: 'R$ 129,90',
    price: 'R$ 44,90'
  },
  {
    title: 'Kit Maquiagem Completo',
    image: 'https://via.placeholder.com/400x400/ffe4e1/000?text=Kit',
    discount: '70% OFF',
    rating: 4.6,
    oldPrice: 'R$ 249,90',
    price: 'R$ 111,90'
  },
  {
    title: 'Sérum Revitalizante',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=S%C3%A9rum',
    discount: '70% OFF',
    rating: 4.8,
    oldPrice: 'R$ 149,90',
    price: 'R$ 74,90'
  },
  {
    title: 'Paleta de Sombras',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Sombras',
    discount: '70% OFF',
    rating: 4.7,
    oldPrice: 'R$ 199,90',
    price: 'R$ 89,90'
  }
];

function renderStars(rating) {
  const filledCount = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const filled = idx < filledCount;
    return (
      <span
        key={idx}
        style={{
          color: filled ? '#ffc107' : 'rgba(0,0,0,0.2)',
          marginRight: '2px',
          fontSize: '0.95rem'
        }}
        aria-hidden="true"
      >
        ★
      </span>
    );
  });
  return <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>{stars}</div>;
}

function Promotions() {
  return (
    <section
      style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, #fff6f8 0%, #ffebee 100%)'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <h2
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '12px',
            color: '#2b2b2b',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '700',
            letterSpacing: '0.02em'
          }}
        >
          Promoções Imperdíveis
        </h2>
        <p
          style={{
            textAlign: 'center',
            margin: '0 auto 44px',
            maxWidth: '720px',
            color: 'rgba(51,51,51,0.75)',
            fontSize: '1.1rem'
          }}
        >
          Descontos de até 70% em produtos premium. Aproveite e renove seu estojo com itens que realçam seu brilho.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '26px'
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="glowCard"
              style={{
                backgroundColor: '#ffffff',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    backgroundColor: '#d6336c',
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.18)'
                  }}
                >
                  {product.discount}
                </div>
              </div>

              <div style={{ padding: '18px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.25rem',
                    color: '#2b2b2b',
                    fontWeight: '700'
                  }}
                >
                  {product.title}
                </h3>

                {renderStars(product.rating)}

                <div
                  style={{
                    marginTop: '12px',
                    gap: '12px',
                    display: 'flex',
                    alignItems: 'baseline'
                  }}
                >
                  <span style={{ color: '#999', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                  <span style={{ color: '#d6336c', fontSize: '1.2rem', fontWeight: '700' }}>
                    {product.price}
                  </span>
                </div>

                <button
                  className="glowButton"
                  style={{ marginTop: 'auto', fontWeight: 700, fontSize: '1rem' }}
                >
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Promotions;
