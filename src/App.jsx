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
        padding: '0 5%',
        textAlign: 'left',
      }}>
        <Hero />
        <Promotions />
        <TopProducts />
        <Categories />
        <section id="home">
          <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Bem-vinda ao Glow Studio
          </h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', color: '#666' }}>
            Aqui você encontra beleza, cuidado e muito glow! 
            Vamos recriar seu site antigo juntos, seção por seção.
          </p>
        </section>
        <InfluencerCTA />

        <footer style={{
          marginTop: '60px',
          padding: '24px 20px',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          color: 'rgba(51,51,51,0.75)',
          fontSize: '0.95rem'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
            Glow Studio © {new Date().getFullYear()} — Todos os direitos reservados.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;