import React from 'react';

function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        backgroundColor: '#fdfdfd',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        padding: '12px 5%',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            color: '#000',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          Glow Studio
        </a>

        <nav>
          <ul
            style={{
              display: 'flex',
              gap: '2.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {['Home', 'Sobre', 'Serviços', 'Contato', 'Localização'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: '1rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#000')}
                  onMouseLeave={(e) => (e.target.style.color = '#111')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;