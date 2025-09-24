import React, { useEffect } from 'react';
import './PinterestBoard.module.css';

const PinterestBoard = () => {
  useEffect(() => {
    // Cargar script de Pinterest
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = "https://assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="pinterest" className="pinterest-section">
      <h2>Inspiración de Nuestra Boda</h2>
      <div className="board-wrapper">
        <a 
          data-pin-do="embedBoard"
          data-pin-board-width="900"
          data-pin-scale-height="400"
          data-pin-scale-width="300"
          href="https://www.pinterest.com/AleCWrede/inspiraci%C3%B3n-para-invitados"
          className="pinterest-board"
        ></a>
      </div>
    </section>
  );
};

export default PinterestBoard;