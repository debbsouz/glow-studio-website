import Header from './components/Header.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#fffaf5', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      <main style={{
        marginTop: '100px', // espaço suficiente para o header fixo
        padding: '20px',
        textAlign: 'center',
      }}>
        <section id="home">
          <h2 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
            Bem-vinda ao Glow Studio ✨
          </h2>
          <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', color: '#666' }}>
            Aqui você encontra beleza, cuidado e muito glow! 
            Vamos recriar seu site antigo juntos, seção por seção.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;