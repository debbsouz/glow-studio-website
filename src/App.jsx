import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#fdf7f9', minHeight: '100vh' }}>
      <Header />
      <main style={{ paddingTop: '100px' }}>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;