import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// 1. Importa tu nuevo archivo de estilos
import styles from './Timeline.module.css';

import primeraVez from '../assets/001.jpeg';
import inicioRelacion from '../assets/primera-vez.jpeg';
import mudanza from '../assets/primera-vez.jpeg';
import compromiso from '../assets/primera-vez.jpeg';

const Timeline = () => {
  return (
    <section id="historia"> {/* Añadido un id para la sección si es necesario */}
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nuestra Historia</h2>
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
          {/* 2. Aplica la clase del módulo CSS a la imagen */}
          <img src={primeraVez} alt="Primer encuentro" className={styles.timelineImage} />
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
          <img src={inicioRelacion} alt="Inicio relación" className={styles.timelineImage} />
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
          <img src={mudanza} alt="Mudanza" className={styles.timelineImage} />
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
          <img src={compromiso} alt="Compromiso" className={styles.timelineImage} />
          <p>Una propuesta sorpresa durante nuestro viaje a Toscana al atardecer.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;