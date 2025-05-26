import { useEffect, useRef } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext'; // Importamos el hook del contexto

/**
 * Hook para observar una sección y actualizar la sección activa en el contexto.
 * @param {string} sectionId - El ID de la sección a observar.
 * @param {object} options - Opciones para IntersectionObserver (e.g., threshold).
 * @returns {object} - Un objeto con una ref para asignar al elemento de la sección.
 */
export const useActiveSectionObserver = (sectionId, options = { threshold: 0.5 }) => {
  const ref = useRef(null);
  const { setActiveSection } = useActiveSection(); // Obtenemos la función para actualizar del contexto

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      },
      options
    );

    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);

    return () => currentElement && observer.unobserve(currentElement);
  }, [sectionId, setActiveSection, options]);

  return { ref };
};