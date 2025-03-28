import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventDetails from './EventDetails';
import '../App.css';

const Home = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1>Andy and Carlos</h1>
        <p className="wedding-date">24 de Enero de 2025</p>
        <button className="cta-button" onClick={handleScroll}>Ver Detalles</button>
      </div>
    </section>
       <EventDetails /> {/* Componente temporal para probar */}
       </>
  );
};

export default Home;