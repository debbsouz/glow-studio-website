import { useEffect, useRef } from 'react';

function InfluencerCTA() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';

    setTimeout(() => {
      el.style.transition = 'all 0.8s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 200);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '120px 5%',
        background: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* IMAGEM */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/d9/59/48/d9594893652e922782388ee2b94e6828.jpg"
            alt="Cliente"
            style={{
              width: '100%',
              borderRadius: '16px',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.05)',
              transition: 'all 0.4s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05)';
            }}
          />
        </div>

        {/* TEXTO */}
        <div>
          <h2
            style={{
              fontSize: '2.4rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              marginBottom: '20px',
              color: '#000',
            }}
          >
            Glow Experience
          </h2>

          <p
            style={{
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '20px',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Cada cliente é única — e algumas se tornam parte da essência do studio.
            Resultados reais, beleza real e um cuidado pensado em cada detalhe.
          </p>

          <p
            style={{
              color: '#777',
              marginBottom: '30px',
              fontSize: '0.95rem',
            }}
          >
            Quer viver essa experiência e fazer parte do Glow?
          </p>

          <a
            href="#contato"
            style={{
              display: 'inline-block',
              padding: '12px 26px',
              border: '1px solid #000',
              color: '#000',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#000';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#000';
            }}
          >
            QUERO PARTICIPAR
          </a>
        </div>
      </div>
    </section>
  );
}

export default InfluencerCTA;