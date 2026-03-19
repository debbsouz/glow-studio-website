import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Promotions from './components/Promotions.jsx';
import TopProducts from './components/TopProducts.jsx';
import Categories from './components/Categories.jsx';
import InfluencerCTA from './components/InfluencerCTA.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#fdf7f9', minHeight: '100vh', fontFamily: "'Montserrat', sans-serif" }}>
      <Header />

      <main style={{
        marginTop: '110px', // espaço suficiente para o header fixo
        textAlign: 'left',
      }}>
        <Hero />
        <Promotions />
        <TopProducts />
        <Categories />
        <InfluencerCTA />

        <footer style={{
          marginTop: '80px',
          padding: '40px 5%',
          backgroundColor: '#faf7f9',
          borderTop: '1px solid rgba(236, 72, 153, 0.1)',
          color: 'rgba(51,51,51,0.8)',
          fontSize: '0.95rem'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ margin: 0, fontWeight: 500 }}>
              Glow Studio © {new Date().getFullYear()} — Beleza que brilha com você.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;