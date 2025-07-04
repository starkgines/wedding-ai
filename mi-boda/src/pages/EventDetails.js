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
          <p>24 de Enero de 2026</p>
        </div>

        <div className="detail-card">
          <h3>⛪ Ceremonia Religiosa</h3>
          <p>Catedral San Lorenzo</p>
          <p>Hora: 11:00</p>
          <p>Mariscal Estigarribia y Coronel Romero, San Lorenzo</p>
        </div>

        {/* Recepción */}
        <div className="detail-card">
          <h3>🎉 Recepción</h3>
          <p>Hacienda Los Sueños</p>
          <p>Hora: 11:00</p>
          <p>Avenida Primavera 456, Bosque Encantado</p>
        </div>

        {/* Mapa */}
        <div className="map-container">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1802.9454643177558!2d-57.48989030791592!3d-25.34144079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dae739a09dd73%3A0x173219aba22bedd5!2sMG56%2BCC9%2C%20San%20Lorenzo%20111426!5e0!3m2!1sen!2spy!4v1750710446658!5m2!1sen!2spy"
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