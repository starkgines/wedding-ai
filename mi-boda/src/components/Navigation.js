import React, { useState } from 'react';
import '../Navigation.css'; // O considera crear un Navigation.css para estilos específicos del componente
import { useActiveSection } from '../context/ActiveSectionContext'; // Asegúrate de que este contexto esté configurado

const Navigation = () => {
  const { activeSection } = useActiveSection();
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleMenu = () => {
    console.log('toggleMenu: Antes, isOpen =', isOpen, '. Después, será =', !isOpen);
    setIsOpen(!isOpen);
  };

  const handleScrollAndCloseMenu = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log('handleScrollAndCloseMenu: Antes, isOpen =', isOpen, '. Después, será = false');
    setIsOpen(false); // Cierra el menú después de hacer clic en un enlace
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'historia', label: 'Nuestra Historia' },
    { id: 'detalles', label: 'Detalles' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'pinterest', label: 'Dress code' },
    { id: 'ayuda', label: '¿Quieres ayudar?' },
    { id: 'galeria', label: 'Galería' },
  ];

  // Efecto para depurar cambios en isOpen
  React.useEffect(() => {
    console.log('El estado isOpen ha cambiado a:', isOpen);
  }, [isOpen]);

  return (
    <nav className="fixed-menu">
      Menu
      <button
        className={`hamburger-button ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="nav-menu-list"
      >
        <span></span>
        <span></span>
        <span></span>
        

      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-menu-list" role="menubar">
        {menuItems.map(item => (
          <li key={item.id} role="none">
            <button
              role="menuitem"
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleScrollAndCloseMenu(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;