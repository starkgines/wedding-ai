import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { useActiveSection } from '../context/ActiveSectionContext';

const Navigation = () => {
  const { activeSection } = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollAndCloseMenu = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
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

  return (
    <nav className={styles['fixed-menu']}>
      Menu
      <button
        className={`${styles['hamburger-button']} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="nav-menu-list"
      >
        <span> </span>
        <span> </span>
        <span> </span>
      </button>
      <ul
        className={`${styles['nav-links']} ${isOpen ? styles.open : ''}`}
        id="nav-menu-list"
        role="menubar"
      >
        {menuItems.map(item => (
          <li key={item.id} role="none">
            <button
              role="menuitem"
              className={activeSection === item.id ? styles.active : ''}
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