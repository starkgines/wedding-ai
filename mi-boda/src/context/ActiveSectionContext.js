import React, { createContext, useState, useContext } from 'react';

// Crea el contexto con un valor por defecto
const ActiveSectionContext = createContext({
  activeSection: 'inicio',
  setActiveSection: () => {},
});

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Hook personalizado
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error('useActiveSection debe usarse dentro de ActiveSectionProvider');
  }
  return context;
};