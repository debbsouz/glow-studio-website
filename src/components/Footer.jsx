import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

function Footer() {
  const footerRef = useRef();

  useEffect(() => {
    const el = footerRef.current;

    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';

    setTimeout(() => {
      el.style.transition = 'all 0.8s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        background: '#fafafa',
        marginTop: '10px',
        borderTop: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '60px 20px 30px', 
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.4rem', 
            color: '#000',
            lineHeight: 1.6,
          }}
        >
          Sua beleza, elevada com leveza e sofisticação.
        </p>


        <div
          style={{
            width: '40px',
            height: '1px',
            background: '#000',
            margin: '20px auto',
            opacity: 0.6,
            transition: 'all 0.4s ease',
          }}
        />

        <p
          style={{
            fontSize: '0.8rem',
            color: '#777',
            letterSpacing: '1px',
          }}
        >
          Glow Studio
        </p>
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '30px 5%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '25px',
        }}
      >
        <div>
          <h4 style={titleStyle}>Navegação</h4>

          {[
            { label: 'Início', link: '#home' },
            { label: 'Sobre', link: '#about' },
            { label: 'Serviços', link: '#servicos' },
            { label: 'Contato', link: '#contato' },
          ].map((item, index) => (
            <a key={index} href={item.link} style={linkStyle}>
              {item.label}
            </a>
          ))}
        </div>
  
        <div>
          <h4 style={titleStyle}>Contato</h4>

          <p style={textStyle}>Maringá - PR</p>
          <p style={textStyle}>Seg - Sáb • 09h às 19h</p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramStyle}
          >
            <Instagram size={16} />
            glowstudio
          </a>
        </div>

        <div>
          <h4 style={titleStyle}>Pagamento</h4>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
            <span style={cardStyle}>VISA</span>
            <span style={cardStyle}>MASTER</span>
            <span style={cardStyle}>PIX</span>
          </div>

          <p style={textStyle}>Crédito e débito</p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <p style={{ fontSize: '0.75rem', color: '#999' }}>
          © {new Date().getFullYear()} Glow Studio
        </p>

        <p
          style={{
            fontSize: '0.7rem',
            color: '#bbb',
            marginTop: '5px',
            letterSpacing: '1px',
          }}
        >
          Designed with elegance
        </p>
      </div>
    </footer>
  );
}

const titleStyle = {
  fontSize: '0.8rem',
  marginBottom: '10px',
  color: '#000',
  fontWeight: 600,
};

const linkStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#666',
  textDecoration: 'none',
  fontSize: '0.8rem',
};

const textStyle = {
  fontSize: '0.8rem',
  color: '#666',
  marginBottom: '5px',
};

const instagramStyle = {
  marginTop: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.8rem',
  color: '#000',
  textDecoration: 'none',
};

const cardStyle = {
  border: '1px solid rgba(0,0,0,0.15)',
  padding: '3px 7px',
  borderRadius: '5px',
  fontSize: '0.65rem',
  fontWeight: 600,
};

export default Footer;