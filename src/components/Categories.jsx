import React from 'react';

const categories = [
  {
    name: 'Cosméticos',
    image: 'assets/cosmeticos.jpg',
    link: '#'
  },
  {
    name: 'Maquiagem',
    image: 'assets/maquiagem.jpg',
    link: '#'
  },
  {
    name: 'Skin Care',
    image: 'assets/skincare.jpg',
    link: '#'
  },
  {
    name: 'Cabelo',
    image: 'assets/cabelo.jpg',
    link: '#'
  },
  {
    name: 'Unhas',
    image: 'assets/unhas.jpg',
    link: '#'
  }
];

function Categories() {
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
          color: '#333',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: '600'
        }}>
          Categorias em Destaque
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '24px'
        }}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="glowCard"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                cursor: 'pointer'
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700', color: '#2b2b2b' }}>
                  {category.name}
                </h3>
                <a
                  href={category.link}
                  className="glow-btn"
                  style={{ marginTop: '12px' }}
                >
                  Ver mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
