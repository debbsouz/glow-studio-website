import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        backgroundColor: '#fdfdfd',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        padding: '12px 5%',
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '22px'
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: '#111',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.75rem',
            fontWeight: 800,
            letterSpacing: '0.05em'
          }}
        >
          Glow Studio
        </a>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: '999px',
              padding: '10px 16px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.06)'
            }}
          >
            <Search size={18} color="#888" />
            <input
              type="text"
              placeholder="Buscar produtos, marcas e tendências"
              style={{
                border: 'none',
                outline: 'none',
                flex: 1,
                fontSize: '0.95rem',
                background: 'transparent',
                color: '#222'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: '0.95rem' }}>
            <a href="#home" style={navLinkStyle}>
              Home
            </a>
            <a href="#sobre" style={navLinkStyle}>
              Sobre
            </a>
            <a href="#contato" style={navLinkStyle}>
              Contato
            </a>
            <div style={{ position: 'relative' }}>
              <button
                style={{
                  ...navLinkStyle,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
              >
                <span>Categorias</span> <ChevronDown size={14} />
              </button>

              {categoriesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 10px)',
                    left: 0,
                    minWidth: '210px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(0,0,0,0.12)',
                    borderRadius: '14px',
                    boxShadow: '0 14px 28px rgba(0,0,0,0.12)',
                    padding: '10px 0',
                    zIndex: 1101,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {['Maquiagem', 'Skin Care', 'Cabelo', 'Unhas', 'Perfumes'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        display: 'block',
                        padding: '10px 18px',
                        color: '#222',
                        textDecoration: 'none',
                        fontSize: '0.95rem'
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = 'rgba(254,205,211,0.25)')
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = 'transparent')
                      }
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button style={iconButtonStyle} aria-label="Perfil">
              <User size={18} />
            </button>
            <button style={iconButtonStyle} aria-label="Wishlist">
              <Heart size={18} />
            </button>
            <button style={iconButtonStyle} aria-label="Carrinho">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

const navLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  padding: '6px 8px',
  transition: 'color 0.2s, transform 0.2s',
  fontWeight: 500
};

const iconButtonStyle = {
  background: 'transparent',
  border: '1px solid rgba(0,0,0,0.12)',
  cursor: 'pointer',
  fontSize: '1.1rem',
  padding: '10px',
  borderRadius: '50%',
  transition: 'transform 0.2s, background-color 0.2s, box-shadow 0.2s',
  color: '#333'
};

export default Header;