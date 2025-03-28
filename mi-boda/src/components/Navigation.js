import React ,{ useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { useActiveSection } from '../context/ActiveSectionContext';
import '../App.css'

const Navigation = () => {
  const { activeSection } = useActiveSection();
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed-menu">
      <ul>
        <li><button className={activeSection === 'inicio' ? 'active' : ''} onClick={() => handleScroll('inicio')}>Inicio</button></li>
        <li><button className={activeSection === 'inicio' ? 'active' : ''} onClick={() => handleScroll('historia')}>Nuestra Historia</button></li>
        <li><button className={activeSection === 'inicio' ? 'active' : ''} onClick={() => handleScroll('detalles')}>Detalles</button></li>
        <li><button className={activeSection === 'inicio' ? 'active' : ''} onClick={() => handleScroll('rsvp')}>RSVP</button></li>
      </ul>
    </nav>
  );
};
/*
  return (
    <nav className="fixed-menu">
      <ul>
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/nuestra-historia">Nuestra Historia</NavLink></li>
        <li><NavLink to="/detalles-evento">Detalles</NavLink></li>
      </ul>
    </nav>
  );
};
*/
export default Navigation;