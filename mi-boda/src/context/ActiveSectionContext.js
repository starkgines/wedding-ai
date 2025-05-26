import React, { createContext, useState, useContext, useCallback } from 'react';

const ActiveSectionContext = createContext(undefined);

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSectionState] = useState('inicio'); // Sección activa por defecto

  // Función para actualizar la sección activa
  // Esta será llamada por las secciones individuales cuando entren en el viewport
  const setActiveSection = useCallback((sectionId) => {
    setActiveSectionState(sectionId);
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
// Navigation.js usará esto para obtener `activeSection`
// Las secciones de página usarán esto para obtener `setActiveSection` (a través de otro hook observador)
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
};