import React from 'react';

const products = [
  {
    title: 'Perfume Floral Deluxe',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=Perfume',
    discount: '70% OFF',
    oldPrice: 'R$ 299,90',
    price: 'R$ 89,90'
  },
  {
    title: 'Batom Matte Luxo',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Batom',
    discount: '60% OFF',
    oldPrice: 'R$ 79,90',
    price: 'R$ 31,90'
  },
  {
    title: 'Creme Hidratante Premium',
    image: 'https://via.placeholder.com/400x400/fecdd3/000?text=Creme',
    discount: '65% OFF',
    oldPrice: 'R$ 129,90',
    price: 'R$ 44,90'
  },
  {
    title: 'Kit Maquiagem Completo',
    image: 'https://via.placeholder.com/400x400/ffe4e1/000?text=Kit',
    discount: '55% OFF',
    oldPrice: 'R$ 249,90',
    price: 'R$ 111,90'
  },
  {
    title: 'Sérum Revitalizante',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=S%C3%A9rum',
    discount: '50% OFF',
    oldPrice: 'R$ 149,90',
    price: 'R$ 74,90'
  },
  {
    title: 'Paleta de Sombras',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Sombras',
    discount: '55% OFF',
    oldPrice: 'R$ 199,90',
    price: 'R$ 89,90'
  }
];

function Promotions() {
  return (
    <section style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #fff0f5 0%, #ffebee 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '2.8rem',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#333',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600'
        }}>
          Promoções Imperdíveis
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ position: 'relative' }}>
                <img src={product.image} alt={product.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  backgroundColor: '#d6336c',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  {product.discount}
                </div>
              </div>
              <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>
                  {product.title}
                </h3>
                <div style={{ marginTop: '12px', gap: '12px', display: 'flex', alignItems: 'baseline' }}>
                  <span style={{ color: '#999', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                  <span style={{ color: '#d6336c', fontSize: '1.2rem', fontWeight: '700' }}>{product.price}</span>
                </div>
                <button style={{
                  marginTop: 'auto',
                  backgroundColor: '#fecdd3',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 18px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  color: '#333',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#ffebee'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#fecdd3'}>
                  Comprar
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
