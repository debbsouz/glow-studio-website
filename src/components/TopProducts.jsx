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
      padding: '60px 0',
      background: 'linear-gradient(135deg, #fff6f8 0%, #fff1f4 100%)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <h2 style={{
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '16px',
          color: '#2b2b2b',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '700',
          letterSpacing: '0.02em'
        }}>
          Top Produtos Glow
        </h2>
        <p style={{
          textAlign: 'center',
          margin: '0 auto 40px',
          maxWidth: '700px',
          color: 'rgba(51,51,51,0.75)',
          fontSize: '1.05rem'
        }}>
          Os favoritos da estação, selecionados para você brilhar em todas as ocasiões.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {products.map((product, index) => (
            <div
              key={index}
              className="glowCard"
              style={{
                backgroundColor: '#fafafa',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
            >
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

export default TopProducts;
