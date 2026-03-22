import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Header />

      <main style={{ paddingTop: '100px' }}>
        <Hero />
        <About />
        <Services />

        {/* LOCALIZAÇÃO */}
        <section
          id="localizacao"
          style={{
            padding: '100px 5%',
            background: '#fff',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>
            Localização
          </h2>

          <p style={{ color: '#444', marginBottom: '10px' }}>
            Glow Studio
          </p>

          <p style={{ color: '#666', marginBottom: '25px', fontSize: '0.95rem' }}>
            Av. São Paulo, 2753A • Vila Bosque <br />
            Maringá - PR, 87005-040
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <iframe
              src="https://www.google.com/maps?q=Av.+São+Paulo,+2753A,+Maringá+PR&output=embed"
              width="100%"
              height="320"
              style={{
                border: 0,
                borderRadius: '12px',
                filter: 'grayscale(100%) contrast(1.1)',
              }}
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps?q=Av.+São+Paulo,+2753A,+Maringá+PR"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              border: '1px solid #000',
              color: '#000',
              textDecoration: 'none',
              borderRadius: '30px',
            }}
          >
            Ver no Google Maps
          </a>

          <p style={{ marginTop: '15px', color: '#666', fontSize: '0.9rem' }}>
            Atendimento com hora marcada
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;