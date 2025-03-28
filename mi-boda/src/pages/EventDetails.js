import React from 'react';
import '../EventDetails.css';

const EventDetails = () => {
  return (
    <section className="event-details" id={"detalles"}>
      <h2>Detalles del Evento</h2>
      
      <div className="details-grid">
        {/* Ceremonia */}
        <div className="detail-card">
          <h3>🗓️ Fecha</h3>
          <p>15 de Septiembre de 2024</p>
        </div>

        <div className="detail-card">
          <h3>⛪ Ceremonia Religiosa</h3>
          <p>Parroquia Santa María</p>
          <p>Hora: 16:00</p>
          <p>Calle Falsa 123, Ciudad Imaginaria</p>
        </div>

        {/* Recepción */}
        <div className="detail-card">
          <h3>🎉 Recepción</h3>
          <p>Hacienda Los Sueños</p>
          <p>Hora: 18:00</p>
          <p>Avenida Primavera 456, Bosque Encantado</p>
        </div>

        {/* Mapa */}
        <div className="map-container">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.59556548573444!3d6.201528395506827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682507c5d04c9%3A0x1bceb11b8428e7d!2sParque%20Explora!5e0!3m2!1ses!2sco!4v1622676341416!5m2!1ses!2sco"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;