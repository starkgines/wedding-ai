import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Gallery.module.css';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Cargar imágenes dinámicamente desde la carpeta pública
  const imageCount = 6; // Cambia este número según tus imágenes
  const images = Array.from({ length: imageCount }, (_, i) => ({
    src: `/img/gallery/${i + 1}.jpg`,
    thumbnail: `/img/gallery/thumbnails/${i + 1}.jpg`
  }));

  return (
    <section id="galeria" className="gallery-section">
      <h2>Nuestra Galería</h2>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <img 
              src={img.thumbnail} 
              alt={`Foto de la boda ${index + 1}`}
              loading="lazy"
            />
            <div className="overlay">
              <span className="zoom-icon">🔍</span>
            </div>
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={photoIndex}
        />
      )}
    </section>
  );
};

export default Gallery;