import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import primeraVez from '../assets/primera-vez.jpeg'; // Crea estas imágenes en src/assets/
import inicioRelacion from '../assets/primera-vez.jpeg';
import mudanza from '../assets/primera-vez.jpeg';
import compromiso from '../assets/primera-vez.jpeg';

const Timeline = () => {
  return (
    <VerticalTimeline lineColor="#c8a27a">
      {/* Primer Encuentro */}
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#f8f5f1', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid #f8f5f1' }}
        date="Junio 2012"
        iconStyle={{ background: '#c8a27a', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">✨ Nuestro Primer Encuentro</h3>
        <img src={primeraVez} alt="Primer encuentro" className="timeline-image" />
        <p>Un día lluvioso en la cafetería de la universidad donde estudiamos diseño gráfico.</p>
      </VerticalTimelineElement>

      {/* Inicio de la Relación */}
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#f8f5f1', color: '#333' }}
        date="Enero 2019"
        iconStyle={{ background: '#c8a27a', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">💖 Comenzamos Nuestra Relación</h3>
        <img src={inicioRelacion} alt="Inicio relación" className="timeline-image" />
        <p>Nuestra primera cita formal en el museo de arte contemporáneo.</p>
      </VerticalTimelineElement>

      {/* Mudanza */}
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#f8f5f1', color: '#333' }}
        date="Marzo 2021"
        iconStyle={{ background: '#c8a27a', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">🏡 Nuestro Primer Hogar</h3>
        <img src={mudanza} alt="Mudanza" className="timeline-image" />
        <p>Compramos y renovamos juntos nuestro loft en el centro de la ciudad.</p>
      </VerticalTimelineElement>

      {/* Compromiso */}
      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#f8f5f1', color: '#333' }}
        date="Diciembre 2023"
        iconStyle={{ background: '#c8a27a', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">💍 ¡Nos Comprometimos!</h3>
        <img src={compromiso} alt="Compromiso" className="timeline-image" />
        <p>Una propuesta sorpresa durante nuestro viaje a Toscana al atardecer.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;