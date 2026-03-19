import React from 'react';

const categories = [
  {
    name: 'Cosméticos',
    image: 'https://via.placeholder.com/300x300/ffebee/000?text=Cosm%C3%A9ticos',
    link: '#'
  },
  {
    name: 'Maquiagem',
    image: 'https://via.placeholder.com/300x300/fff0f5/000?text=Maquiagem',
    link: '#'
  },
  {
    name: 'Skin Care',
    image: 'https://via.placeholder.com/300x300/fecdd3/000?text=Skin+Care',
    link: '#'
  },
  {
    name: 'Cabelo',
    image: 'https://via.placeholder.com/300x300/ffe4e1/000?text=Cabelo',
    link: '#'
  },
  {
    name: 'Unhas',
    image: 'https://via.placeholder.com/300x300/ffebee/000?text=Unhas',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
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
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '700', color: '#2b2b2b' }}>
                  {category.name}
                </h3>
                <a
                  href={category.link}
                  style={{
                    display: 'inline-block',
                    marginTop: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: '#d6336c',
                    textDecoration: 'none',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(214, 51, 108, 0.25)',
                    transition: 'background-color 0.2s, transform 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(246, 109, 155, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
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
