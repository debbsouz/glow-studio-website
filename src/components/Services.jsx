import React, { useEffect, useRef } from 'react';

function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;

    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';

    setTimeout(() => {
      el.style.transition = 'all 0.7s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 150);
  }, []);

  const services = [
    {
      title: 'Noivas',
      desc: 'Maquiagem e penteado completo para o seu grande dia.',
      image: 'https://i.pinimg.com/736x/ce/10/b7/ce10b7e1026a2a35b58295ebad7be08d.jpg',
      position: 'center 20%',
    },
    {
      title: 'Eventos',
      desc: 'Produções sofisticadas para ocasiões especiais.',
      image: 'https://i.pinimg.com/736x/eb/f2/13/ebf213c8bd98b89719e2a85021117513.jpg',
      position: 'center 25%',
    },
    {
      title: 'Editorial',
      desc: 'Ensaios e campanhas com acabamento profissional.',
      image: 'https://i.pinimg.com/736x/c8/cc/e4/c8cce43626296ef96c5f2c225d50492a.jpg',
      position: 'center',
    },
    {
      title: 'Automaquiagem',
      desc: 'Técnicas para realçar sua beleza no dia a dia.',
      image: 'https://i.pinimg.com/1200x/e8/d3/07/e8d30722974324b7bb39077efa24d3bb.jpg',
      position: 'center 30%',
    },
    {
      title: 'Penteados',
      desc: 'Criações elegantes e duradouras.',
      image: 'https://i.pinimg.com/736x/85/83/35/8583357d668914043c641ee5e18ab219.jpg',
      position: 'center 15%',
    },
    {
      title: 'Massagem Facial',
      desc: 'Relaxamento e glow natural da pele.',
      image: 'https://i.pinimg.com/736x/94/cc/3d/94cc3df90dabb778c06e100244dc8269.jpg',
      position: 'center',
    },
  ];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      style={{
        padding: '110px 5%',
        background: '#fff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2.4rem',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          marginBottom: '15px',
          color: '#000',
        }}
      >
        Serviços
      </h2>

      <p
        style={{
          fontSize: '1rem',
          color: '#777',
          marginBottom: '70px',
        }}
      >
        Beleza com precisão e naturalidade
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'left',
        }}
      >
        {services.map((service, index) => (
          <div key={index} style={{ cursor: 'pointer' }}>

            {/* IMAGEM */}
            <div
              style={{
                width: '100%',
                aspectRatio: '4/5', // 🔥 MAIS ELEGANTE
                overflow: 'hidden',
                marginBottom: '15px',
                borderRadius: '10px',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: service.position,
                  filter: 'grayscale(100%)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>

            {/* TEXTO */}
            <h3
              style={{
                fontSize: '1.2rem',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '6px',
                color: '#000',
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.5,
              }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;