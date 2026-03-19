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
        padding: '20px',
        textAlign: 'center',
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
      </main>
    </div>
  );
}

export default App;