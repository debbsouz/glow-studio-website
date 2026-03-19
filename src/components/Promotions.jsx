import React from 'react';

const products = [
  {
    title: 'Chanel No. 5',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=Chanel+No.5',
    discount: '50% OFF',
    rating: 4.9,
    oldPrice: 'R$ 599,00',
    price: 'R$ 299,50'
  },
  {
    title: 'MAC Ruby Woo Lipstick',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=MAC+Ruby+Woo',
    discount: '40% OFF',
    rating: 4.7,
    oldPrice: 'R$ 129,90',
    price: 'R$ 77,94'
  },
  {
    title: 'La Mer Crème de la Mer',
    image: 'https://via.placeholder.com/400x400/fecdd3/000?text=La+Mer+Creme',
    discount: '30% OFF',
    rating: 4.8,
    oldPrice: 'R$ 1.200,00',
    price: 'R$ 840,00'
  },
  {
    title: 'Fenty Beauty Pro Filt\'r Foundation',
    image: 'https://via.placeholder.com/400x400/ffe4e1/000?text=Fenty+Foundation',
    discount: '60% OFF',
    rating: 4.6,
    oldPrice: 'R$ 199,90',
    price: 'R$ 79,96'
  },
  {
    title: 'Yves Saint Laurent Black Opium',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=YSL+Black+Opium',
    discount: '45% OFF',
    rating: 4.8,
    oldPrice: 'R$ 349,90',
    price: 'R$ 192,44'
  },
  {
    title: 'NARS Radiant Creamy Concealer',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=NARS+Concealer',
    discount: '35% OFF',
    rating: 4.7,
    oldPrice: 'R$ 149,90',
    price: 'R$ 97,44'
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
        backgroundColor: '#ffffff'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <h2
          style={{
            fontSize: '2.8rem',
            textAlign: 'center',
            margin: '4rem 0 2rem',
            color: '#2b2b2b',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: '600',
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
            gap: '24px'
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
