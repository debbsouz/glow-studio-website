import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 3px 18px var(--glow-soft)',
      padding: '14px 5%',
      fontFamily: "'Montserrat', sans-serif",
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '18px'
      }}>
        <a href="#" style={{
          textDecoration: 'none',
          color: '#333',
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.7rem',
          fontWeight: 700,
          letterSpacing: '0.05em'
        }}>
          Glow Studio
        </a>

        <div style={{
          flex: 1,
          maxWidth: '560px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '520px',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgba(0,0,0,0.15)',
            borderRadius: '999px',
            padding: '8px 12px',
            backgroundColor: '#fafafa'
          }}>
            <Search size={18} color="#999" />
            <input
              type="text"
              placeholder="Buscar produtos, marcas e tendências"
              style={{
                border: 'none',
                outline: 'none',
                flex: 1,
                fontSize: '0.95rem',
                background: 'transparent',
                color: '#333'
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
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button style={{
                ...navLinkStyle,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>Categorias</span> <ChevronDown size={14} />
              </button>

              {categoriesOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 12px)',
                  left: 0,
                  minWidth: '190px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  padding: '10px 0',
                  zIndex: 1001
                }}>
                  {['Maquiagem', 'Skin Care', 'Cabelo', 'Unhas', 'Perfumes'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        display: 'block',
                        padding: '10px 18px',
                        color: '#333',
                        textDecoration: 'none',
                        fontSize: '0.95rem'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(254,205,211,0.25)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
            <button style={iconButtonStyle} aria-label="Lista de desejos">
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
  padding: '6px 0',
  transition: 'color 0.2s',
  fontWeight: 500
};

const iconButtonStyle = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.25rem',
  padding: '8px',
  borderRadius: '50%',
  transition: 'background-color 0.2s',
  color: '#333'
};

export default Header;