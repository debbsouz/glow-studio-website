function About() {
  return (
    <section
      id="about"
      style={{
        padding: '140px 5% 100px',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex', // 👈 TROQUEI GRID POR FLEX
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap', // 👈 ISSO SALVA NO MOBILE
        }}
      >
        {/* TEXTO */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3rem)',
              fontFamily: "'Playfair Display', serif",
              marginBottom: '1.5rem',
              color: '#111',
            }}
          >
            Olá, eu sou a Bia
          </h2>

          <p style={textStyle}>
            Maquiadora profissional dedicada a valorizar a sua essência e destacar o que você tem de mais bonito.
            Com anos de experiência no mercado, atuo em maquiagem para noivas, eventos, ensaios e produções especiais,
            sempre buscando um resultado elegante, moderno e que combine perfeitamente com você.
          </p>

          <p style={{ ...textStyle, marginTop: '1.5rem' }}>
            Cada detalhe é pensado com cuidado para criar uma maquiagem leve, sofisticada e com aquele glow
            que realça sua beleza de forma única.
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
              maxWidth: '420px',
              borderRadius: '20px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </section>
  );
}

const textStyle = {
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: '#444',
};

<section
  id="about"
  style={{
    padding: '100px 5%',
    scrollMarginTop: '120px'
  }}
></section>

export default About;