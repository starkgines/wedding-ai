import React from 'react';
// 1. Importa el módulo CSS y asígnalo a la variable 'styles'
import styles from './EventDetails.module.css';

const EventDetails = () => {
  return (
    // 2. Usa el objeto 'styles' para aplicar cada clase.
    // Como las clases tienen guiones, usamos corchetes: styles['nombre-de-clase']
    <section className={styles['event-details']} id={"detalles"}>
      <h2>Detalles del Evento</h2>
      
      <div className={styles['details-grid']}>
        {/* Ceremonia */}
        <div className={styles['detail-card']}>
          <h3>🗓️ Fecha</h3>
          <p>24 de Enero de 2026</p>
        </div>

        <div className={styles['detail-card']}>
          <h3>⛪ Ceremonia Religiosa</h3>
          <p>Catedral San Lorenzo</p>
          <p>Hora: 11:00</p>
          <p>Mariscal Estigarribia y Coronel Romero, San Lorenzo</p>
        </div>

        {/* Recepción */}
        <div className={styles['detail-card']}>
          <h3>🎉 Recepción</h3>
          <p>Hacienda Los Sueños</p>
          <p>Hora: 11:00</p>
          <p>Avenida Primavera 456, Bosque Encantado</p>
        </div>

        {/* Mapa */}
        <div className={styles['map-container']}>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.729835956027!2d-57.52554062468383!3d-25.27960102808293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9454953361242375%3A0x6f9620021b3334d7!2sCatedral%20de%20San%20Lorenzo!5e0!3m2!1ses!2spy!4v1724174026131!5m2!1ses!2spy"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;