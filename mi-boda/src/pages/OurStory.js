import React from 'react';
import Timeline from '../components/Timeline';
import '../OurStory.css'; // Crearemos este archivo
import {useActiveSection} from '../hooks/useActiveSection';

const OurStory = ({id}) => {
  const { ref } = useActiveSection(id);

  return (
    <section className="our-story" id={id} ref={ref}>
      <div className="story-header">
        <h1>Nuestra Historia</h1>
        <p>Un viaje lleno de momentos inolvidables</p>
      </div>
      <Timeline />
    </section>
  );
};

export default OurStory;