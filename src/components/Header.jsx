import React, { useState } from 'react';
import { User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

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
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
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
          justifyContent: 'space-between'
        }}
      >
<a href="#" style={{ textDecoration: 'none' }}>
  <img 
    src= "/assets/glowlogo.png" 
    alt="Glow Studio" 
    style={{ 
      height: '48px',
      width: 'auto',
      display: 'block'
    }} 
  />
</a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href="#home" style={navLinkStyle}>Home</a>
          <a href="#sobre" style={navLinkStyle}>Sobre</a>
          <a href="#contato" style={navLinkStyle}>Contato</a>
          <a href="#localizacao" style={navLinkStyle}>Localização</a>

          {/* Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button style={dropdownButton}>
              <ChevronDown
                size={18}
                style={{
                  color: '#000',
                  transition: '0.3s',
                  transform: categoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </button>

            {categoriesOpen && (
              <div style={dropdownStyle}>
                {['Noivas', 'Eventos', 'Produções', 'Cursos'].map((item) => (
                  <a key={item} href="#" style={dropdownItem}>
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <button style={iconButton}><User size={18} /></button>
          <button style={iconButton}><Heart size={18} /></button>
          <button style={iconButton}><ShoppingCart size={18} /></button>
        </nav>
      </div>
    </header>
  );
}

const navLinkStyle = {
  color: '#000',
  textDecoration: 'none',
  fontWeight: 500,
  position: 'relative',
};

const dropdownButton = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '6px',
  borderRadius: '50%',
};

const dropdownStyle = {
  position: 'absolute',
  top: 'calc(100% + 10px)',
  left: 0,
  minWidth: '180px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  padding: '6px 0',
};

const dropdownItem = {
  display: 'block',
  padding: '10px 16px',
  color: '#000',
  textDecoration: 'none',
  fontSize: '14px',
};

const iconButton = {
  background: 'transparent',
  border: '1px solid rgba(0,0,0,0.15)',
  padding: '8px',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

export default Header;