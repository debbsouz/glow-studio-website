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
      padding: '60px 20px',
      backgroundColor: '#fffaf5'
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
          Categorias em Destaque
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              style={{
                width: '180px',
                textDecoration: 'none',
                color: '#333'
              }}
            >
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                backgroundColor: '#fff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.08)';
              }}>
                <img
                  src={category.image}
                  alt={category.name}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
                <div style={{ padding: '14px', textAlign: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>
                    {category.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
