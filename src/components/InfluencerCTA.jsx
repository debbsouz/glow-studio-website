import React from 'react';

function InfluencerCTA() {
  return (
    <section style={{
      padding: '60px 5%',
      backgroundColor: '#fff0f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '42px',
      flexWrap: 'wrap'
    }}>
      <div style={{ maxWidth: '520px' }}>
        <h2 style={{
          fontSize: '3rem',
          margin: '0 0 20px',
          color: '#2b2b2b',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '800',
          letterSpacing: '0.02em'
        }}>
          Seja uma Influenciadora Glow
        </h2>
        <p style={{
          fontSize: '1.15rem',
          margin: '0 0 32px',
          color: 'rgba(51,51,51,0.78)',
          lineHeight: 1.6
        }}>
          Divulgue nossos produtos e ganhe comissão + brindes exclusivos. Cadastre-se e brilhe com a gente!
        </p>
        <a
          href="#"
          className="glowButton"
          style={{ padding: '14px 32px', fontWeight: 700, fontSize: '1.1rem' }}
        >
          Quero Participar
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
