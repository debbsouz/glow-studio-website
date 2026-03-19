function Header() {
  return (
    <header style={{
      backgroundColor: '#fffaf5', // rosa muito claro
      color: '#333',
      padding: '15px 40px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Poppins', sans-serif",
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '2.2rem',
        fontWeight: '600',
        color: '#fecdd3', // rosa primário
      }}>
        Glow Studio
      </h1>

      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '30px',
        }}>
          <li>
            <a href="#home" style={{
              color: '#333',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.color = '#fecdd3'}
            onMouseOut={(e) => e.target.style.color = '#333'}>
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" style={{
              color: '#333',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.color = '#fecdd3'}
            onMouseOut={(e) => e.target.style.color = '#333'}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" style={{
              color: '#333',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.color = '#fecdd3'}
            onMouseOut={(e) => e.target.style.color = '#333'}>
              Contato
            </a>
          </li>
          <li>
            <a href="#carrinho" style={{
              color: '#333',
              textDecoration: 'none',
              fontSize: '1.1rem',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.color = '#fecdd3'}
            onMouseOut={(e) => e.target.style.color = '#333'}>
              🛒 Carrinho
            </a>
          </li>
        </ul>
      </nav>

      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
      }}>
        <span style={{
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: 'color 0.3s',
        }}
        onMouseOver={(e) => e.target.style.color = '#fecdd3'}
        onMouseOut={(e) => e.target.style.color = '#333'}>
          🔍
        </span>
        <span style={{
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: 'color 0.3s',
        }}
        onMouseOver={(e) => e.target.style.color = '#fecdd3'}
        onMouseOut={(e) => e.target.style.color = '#333'}>
          👤
        </span>
      </div>
    </header>
  );
}

export default Header;