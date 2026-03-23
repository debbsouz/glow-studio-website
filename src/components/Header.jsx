import React, { useState, useEffect } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = ['Home', 'Sobre', 'Serviços', 'Contato', 'Localização'];

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
        padding: isMobile ? '12px 6%' : '12px 5%',
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
        {/* LOGO */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            color: '#000',
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            fontWeight: 700,
          }}
        >
          Glow Studio
        </a>

        {/* DESKTOP */}
        {!isMobile && (
          <nav>
            <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
              {menuItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} style={linkStyle}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* MOBILE BUTTON */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            ☰
          </div>
        )}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && isMobile && (
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '20px',
            background: '#fff',
            borderTop: '1px solid rgba(0,0,0,0.05)',
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: '#111',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '0.95rem',
};

export default Header;