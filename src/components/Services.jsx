function Services() {
  const services = [
    { title: "Maquiagem para Noivas", desc: "Look completo para o dia mais especial da sua vida" },
    { title: "Maquiagem para Eventos", desc: "Festas, formaturas e produções especiais" },
    { title: "Maquiagem Editorial", desc: "Ensaios fotográficos e campanhas" },
    { title: "Curso de Automaquiagem", desc: "Aprenda técnicas profissionais para usar no dia a dia" },
  ];

  return (
    <section id="services" style={{ padding: '100px 5%', backgroundColor: '#fffaf5', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem', fontFamily: "'Playfair Display', serif" }}>
        Meus Serviços
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {services.map((service, i) => (
          <div key={i} style={{ background: '#fff', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: '#555', lineHeight: 1.7 }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;