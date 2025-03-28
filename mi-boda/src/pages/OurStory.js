import React from 'react';
import Timeline from '../components/Timeline';
import '../OurStory.css'; // Crearemos este archivo

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-header">
        <h1>Nuestra Historia</h1>
        <p>Un viaje lleno de momentos inolvidables</p>
      </div>
      <Timeline />
    </section>
  );
};

export default OurStory;