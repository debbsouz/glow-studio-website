import React from 'react';

function InfluencerCTA() {
  return (
    <section style={{
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #fffaf5 0%, #fff0f5 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      flexWrap: 'wrap'
    }}>
      <div style={{ maxWidth: '520px' }}>
        <h2 style={{
          fontSize: '2.8rem',
          margin: '0 0 20px',
          color: '#333',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '700'
        }}>
          Seja uma influenciadora e divulgue nossos produtos
        </h2>
        <p style={{
          fontSize: '1.1rem',
          margin: '0 0 30px',
          color: '#555',
          lineHeight: 1.6
        }}>
          Ganhe comissão divulgando Glow Studio! Cadastre-se agora e comece a ganhar.
        </p>
        <a
          href="#"
          style={{
            display: 'inline-block',
            padding: '14px 28px',
            backgroundColor: '#fecdd3',
            color: '#333',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'background-color 0.2s',
            fontFamily: "'Poppins', sans-serif"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ffebee'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#fecdd3'}
        >
          Quero ser influenciadora
        </a>
      </div>

      <div style={{ maxWidth: '460px' }}>
        <img
          src="https://via.placeholder.com/520x380/fff0f5/000?text=Influenciadora+sorrindo"
          alt="Influenciadora sorrindo"
          style={{ width: '100%', borderRadius: '18px', boxShadow: '0 14px 24px rgba(0,0,0,0.08)' }}
        />
      </div>
    </section>
  );
}

export default InfluencerCTA;
