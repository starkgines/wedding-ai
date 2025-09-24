// src/pages/HelpUs.js
import React from 'react';
import './HelpUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const HelpUs = () => {
  return (
    <section id="ayuda" className="help-section">
      <h2>¿Quieres ayudarnos?</h2>
      <div className="bank-accounts">
        
        <div className="bank-card">
          <div className="bank-header">
          <FontAwesomeIcon icon={faBank} size="2x" />   
            <h3>Cuenta Corriente</h3>
          </div>
          <div className="bank-details">
            <p><strong>Banco:</strong> Nombre de tu banco</p>
            <p><strong>Titular:</strong> Nombres de los novios</p>
            <p><strong>Alias Guaranies:</strong> 
              <span className="account-number">5634192-0</span>
              <button 
                className="copy-button"
                onClick={() => navigator.clipboard.writeText('1234-5678-9012-3456')}
              >
                Copiar
              </button>
            </p>
            <p><strong>N° Cuenta Guaranies:</strong> 
              <span className="account-number">1234-5678-9012-3456</span>
              <button 
                className="copy-button"
                onClick={() => navigator.clipboard.writeText('1234-5678-9012-3456')}
              >
                Copiar
              </button>
            </p>
            <p><strong>N° Cuenta Dolares:</strong> 
              <span className="account-number">1234-5678-9012-3456</span>
              <button 
                className="copy-button"
                onClick={() => navigator.clipboard.writeText('1234-5678-9012-3456')}
              >
                Copiar
              </button>
            </p>
          </div>
        </div>


      </div>
      <p className="disclaimer">¡Gracias por contribuir a nuestro futuro juntos!</p>
    </section>
  );
};

export default HelpUs;