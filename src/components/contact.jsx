import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '120px 5%',
        background: '#ffffff',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: '#000000',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Contato
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: '#444444',
            marginBottom: '3.5rem',
            lineHeight: 1.7,
          }}
        >
          Agende seu horário ou participe como modelo.
        </p>

        {/* Formulário */}
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <input
            type="text"
            placeholder="Seu nome"
            style={{
              padding: '14px 18px',
              fontSize: '1rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              background: '#ffffff',
              outline: 'none',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#000000';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            }}
            required
          />

          <textarea
            placeholder="Mensagem (ex: quero agendar ou participar como modelo)"
            rows={5}
            style={{
              padding: '14px 18px',
              fontSize: '1rem',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              background: '#ffffff',
              outline: 'none',
              resize: 'vertical',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#000000';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0';
              e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            }}
            required
          />

          <button
            type="submit"
            className="glow-btn glow-btn-lg"
            style={{
              marginTop: '1.5rem',
              width: '40%',
              maxWidth: '300px',
              margin: '1.5rem auto 0',
            }}
          >
            Enviar
          </button>
        </form>
{/* Icones */}
        <div
          style={{
            marginTop: '4.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/5544998176210?text=Oi!%20Quero%20agendar%20uma%20sessão%20no%20Glow%20Studio"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000"
              alt="WhatsApp"
              style={{ width: '30px', height: '30px' }}
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/glowstudiooficial" // ← troque pelo @ real
            target="_blank"
            rel="noopener noreferrer"
            style={{
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
              alt="Instagram"
              style={{ width: '30px', height: '30px' }}
            />
          </a>

          {/* Email */}
          <a
            href="mailto:contato@glowstudio.com?subject=Contato%20Glow%20Studio&body=Oi!%20Quero%20agendar%20uma%20sessão%20ou%20participar%20como%20modelo."
            style={{
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000"
              alt="Email"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;