function About() {
  return (
    <section
      id="about"
      style={{
        padding: '140px 5% 100px',
        backgroundColor: '#fff',
        scrollMarginTop: '120px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '80px',
          flexWrap: 'wrap',
        }}
      >
        {/* TEXTO */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2
            style={{
              fontSize: '2.4rem', // 🔥 padronizado com Services/Localização
              marginBottom: '20px',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: '#000',
            }}
          >
            Sobre
          </h2>

          <p style={textStyle}>
            Maquiadora profissional dedicada a valorizar a sua essência e destacar o que você tem de mais bonito.
            Atuo em maquiagem para noivas, eventos e produções especiais, sempre buscando um resultado elegante,
            moderno e alinhado com o seu estilo.
          </p>

          <p style={{ ...textStyle, marginTop: '20px' }}>
            Cada detalhe é pensado com cuidado para criar uma maquiagem leve, sofisticada e com um acabamento
            impecável, realçando sua beleza de forma natural e única.
          </p>
        </div>

        {/* IMAGEM */}
        <div
          style={{
            flex: 1,
            minWidth: '280px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="https://i.pinimg.com/1200x/5f/fc/1c/5ffc1c8001f05ab78dac7dc80e0d0109.jpg"
            alt="Maquiadora"
            style={{
              width: '100%',
              maxWidth: '380px',
              borderRadius: '16px',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(1.05)', // 🔥 mantém identidade black/white
              transition: 'all 0.4s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%) contrast(1.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      </div>
    </section>
  );
}

const textStyle = {
  fontSize: '1rem',
  lineHeight: 1.8,
  color: '#555',
  fontFamily: "'Montserrat', sans-serif",
};

export default About;