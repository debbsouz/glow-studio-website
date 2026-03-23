import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import InfluencerCTA from './components/InfluencerCTA.jsx';
import Contact from './components/contact.jsx';
import Diferenciais from './components/Diferenciais.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <Header />

      <main style={{ paddingTop: '100px' }}>
        <Hero />
        <About />
        <Services />
        <InfluencerCTA />
        <Diferenciais />
        <Contact />
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
        </section>
        <Footer />
      </main>
    </div>
  );
}

<a
  href="https://wa.me/5544998176210?text=Oi!%20Quero%20agendar%20uma%20sessão%20no%20Glow%20Studio"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.07.66 3.99 1.78 5.54L2 22l4.46-1.78A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.35.98-1.98 1.8-2.78 1.98-.8.18-1.82.26-2.98-.02-.82-.2-1.58-.5-2.3-.9l-.35-.22c-.9-.6-1.5-1.4-1.7-2.4-.2-1 .02-2.02.62-2.82.6-.8 1.4-1.4 2.3-1.7.9-.3 1.9-.4 2.9-.2.98.18 1.88.68 2.58 1.48.7.8 1.1 1.8 1.2 2.8.1 1 .02 2-.38 2.98z"/>
  </svg>
</a>

export default App;