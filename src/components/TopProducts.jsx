import React from 'react';

const products = [
  {
    title: 'Base Glow HD',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=Base',
    price: 'R$ 89,90',
    rating: 5
  },
  {
    title: 'Paleta Iluminadora',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Iluminador',
    price: 'R$ 79,90',
    rating: 4
  },
  {
    title: 'Lip Tint Cor Rosa',
    image: 'https://via.placeholder.com/400x400/fecdd3/000?text=Lip+Tint',
    price: 'R$ 34,90',
    rating: 5
  },
  {
    title: 'Máscara de Cílios',
    image: 'https://via.placeholder.com/400x400/ffe4e1/000?text=M%C3%A1scara',
    price: 'R$ 49,90',
    rating: 4
  },
  {
    title: 'Sérum Antioxidante',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=S%C3%A9rum',
    price: 'R$ 64,90',
    rating: 5
  },
  {
    title: 'Blush Cremoso',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Blush',
    price: 'R$ 39,90',
    rating: 4
  }
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return (
    <div style={{ color: '#d6336c', fontSize: '0.9rem' }}>
      {'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}
    </div>
  );
}

function TopProducts() {
  return (
    <section style={{
      padding: '60px 20px',
      backgroundColor: '#ffffff'
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
          Top Produtos
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              backgroundColor: '#fafafa',
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
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#333', fontWeight: '600' }}>
                  {product.title}
                </h3>
                <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#d6336c' }}>{product.price}</span>
                  <StarRating rating={product.rating} />
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

export default TopProducts;
