import React, { useState, useEffect } from 'react';
import '../App.css';
import { useActiveSectionObserver } from '../hooks/useActiveSectionObserver';

const weddingDate = new Date(Date.UTC(2026, 0, 24, 5, 0, 0)); // Meses: 0=enero

const Home = ({ id }) => { // Asegúrate de que Home recibe el id como prop desde App.js
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { ref } = useActiveSectionObserver(id, { threshold: 0.7 }); // Ajusta el threshold según necesites

        // Configurar fecha UTC (24 Enero 2025 00:00 hora)
  
  useEffect(() => {
    const calculateTimeLeft = () => {

      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Actualización inicial inmediata
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // No olvides limpiar el intervalo
  }, []); // weddingDate is now a dependency

 /* const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth'
    });
  }; */

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section className="hero" id={id} ref={ref}>
      <div className="hero-content">
        <h1>Andy and Carlos</h1>
        <p className="wedding-date">24 de Enero de 2026</p>
        
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.days)}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.hours)}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.minutes)}</span>
            <span className="countdown-label">Minutos</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{formatNumber(timeLeft.seconds)}</span>
            <span className="countdown-label">Segundos</span>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Home;