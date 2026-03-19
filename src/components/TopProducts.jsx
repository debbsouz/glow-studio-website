import React from 'react';

const products = [
  {
    title: 'Fenty Beauty Pro Filt\'r Soft Matte Longwear Foundation',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=Fenty+Foundation',
    price: 'R$ 199,90',
    rating: 5
  },
  {
    title: 'Benefit Hoola Bronzer',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Benefit+Hoola',
    price: 'R$ 149,90',
    rating: 4.9
  },
  {
    title: 'Glossier Lip Gloss',
    image: 'https://via.placeholder.com/400x400/fecdd3/000?text=Glossier+Gloss',
    price: 'R$ 89,90',
    rating: 4.8
  },
  {
    title: 'Anastasia Beverly Hills Brow Wiz',
    image: 'https://via.placeholder.com/400x400/ffe4e1/000?text=Anastasia+Brow',
    price: 'R$ 129,90',
    rating: 4.7
  },
  {
    title: 'The Ordinary Hyaluronic Acid 2% + B5',
    image: 'https://via.placeholder.com/400x400/ffebee/000?text=The+Ordinary+HA',
    price: 'R$ 59,90',
    rating: 4.9
  },
  {
    title: 'Urban Decay Naked Basics Eyeshadow Palette',
    image: 'https://via.placeholder.com/400x400/fff0f5/000?text=Urban+Decay+Naked',
    price: 'R$ 179,90',
    rating: 4.6
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
      backgroundColor: '#fffaf5'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <h2 style={{
          fontSize: '2.8rem',
          textAlign: 'center',
          margin: '4rem 0 2rem',
          color: '#2b2b2b',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: '600',
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
