import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <nav className="fixed-menu">
      <ul>
        <li><NavLink to="/" end>Inicio</NavLink></li>
        <li><NavLink to="/nuestra-historia">Nuestra Historia</NavLink></li>
        {/* Agregaremos más enlaces luego */}
      </ul>
    </nav>
  );
};

export default Navigation;