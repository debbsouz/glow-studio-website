function About() {
  return (
    <section id="about" style={{ padding: '100px 5%', backgroundColor: '#fff', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '3rem', fontFamily: "'Playfair Display', serif", marginBottom: '1.5rem' }}>
            Olá, eu sou a Débora
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444' }}>
            Maquiadora profissional apaixonada por realçar a beleza natural de cada pessoa. 
            Com mais de 5 anos de experiência, especializo-me em maquiagem para noivas, 
            eventos, ensaios e produções editoriais. Meu objetivo é fazer você se sentir 
            radiante e confiante.
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', lineHeight: 1.8, color: '#444' }}>
            Cada pincelada é pensada com carinho para criar um glow único e personalizado.
          </p>
        </div>
        <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <img 
            src="https://images.unsplash.com/photo-1583766395091-2eb9994ed094?auto=format&fit=crop&q=80&w=800" 
            alt="Débora - Maquiadora" 
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;