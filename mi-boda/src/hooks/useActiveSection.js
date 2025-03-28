import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useActiveSection = (sectionId) => {
  const [activeSection, setActiveSection] = useState('');
  const { ref, inView } = useInView({ threshold: 0.5 }); // 50% de visibilidad

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId]);

  return { ref, activeSection };
};