import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({
    nome: '',
    mensagem: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Olá, meu nome é ${form.nome}. ${form.mensagem}`;
    const url = `https://wa.me/5544998176210?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  };

  return (
    <section
      id="contato"
      style={{
        padding: '120px 5%',
        background: '#fff',
        textAlign: 'center',
      }}
    >
      <h2 style={titleStyle}>Contato</h2>

      <p style={subtitleStyle}>
        Agende seu horário ou participe como modelo
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Seu nome"
          required
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          style={inputStyle}
          onFocus={(e) => (e.target.style.border = '1px solid #000')}
          onBlur={(e) =>
            (e.target.style.border = '1px solid rgba(0,0,0,0.15)')
          }
        />

        <textarea
          placeholder="Mensagem (ex: quero agendar ou participar como modelo)"
          required
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          style={{ ...inputStyle, height: '120px', resize: 'none' }}
          onFocus={(e) => (e.target.style.border = '1px solid #000')}
          onBlur={(e) =>
            (e.target.style.border = '1px solid rgba(0,0,0,0.15)')
          }
        />

        <button
          type="submit"
          className="glow-btn glow-btn-lg"
          style={{ width: '100%', maxWidth: '400px', margin: '2rem auto 0', display: 'block' }}
        >
          ENVIAR
        </button>
      </form>

      {/* WHATSAPP */}
      <div style={{ marginTop: '50px' }}>
        <p style={{ color: '#777', marginBottom: '15px' }}>
          Ou se preferir, fale direto no WhatsApp
        </p>

<a
  href="https://wa.me/5544998176210"
  target="_blank"
  rel="noopener noreferrer"
  className="glow-btn"
  style={{ width: '100%', maxWidth: '400px', margin: '1.5rem auto 0', display: 'block', textAlign: 'center' }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = '#000';
  }}
>
  <MessageCircle size={18} />
  WhatsApp
</a>
      </div>
    </section>
  );
}

/* 🎯 ESTILOS */

const titleStyle = {
  fontSize: '2.4rem',
  fontFamily: "'Playfair Display', serif",
  fontWeight: 600,
  marginBottom: '10px',
  color: '#000',
};

const subtitleStyle = {
  color: '#777',
  marginBottom: '60px',
  fontSize: '1rem',
  fontFamily: "'Montserrat', sans-serif",
};

const formStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const inputStyle = {
  padding: '14px 16px',
  borderRadius: '8px',
  border: '1px solid rgba(0,0,0,0.15)',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: "'Montserrat', sans-serif",
  transition: 'border 0.2s ease',
};

const buttonStyle = {
  padding: '14px',
  borderRadius: '30px',
  border: '1px solid #000',
  background: 'transparent',
  color: '#000',
  fontSize: '0.85rem',
  letterSpacing: '1px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const whatsButton = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '12px 22px',
  borderRadius: '30px',
  border: '1px solid #000',
  color: '#000',
  textDecoration: 'none',
  fontSize: '0.85rem',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
};

const phoneStyle = {
  marginTop: '10px',
  color: '#999',
  fontSize: '0.85rem',
};

export default Contact;