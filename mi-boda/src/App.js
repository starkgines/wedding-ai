import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import EventDetails from './pages/EventDetails';
import RSVP from './pages/RSVP'
import PinterestBoard from './pages/PinterestBoard';
import HelpUs from './pages/HelpUs';
import Gallery from './pages/Gallery';

/*function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuestra-historia" element={<OurStory />} />
          <Route path="/detalles-evento" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
} */ 
  function App() {
    return (
      <div className="App">
        <Navigation />
        <Home id="inicio" />
        <OurStory id="historia" />
        <EventDetails id="detalles" />
        <RSVP id="rsvp" />
        <PinterestBoard id="pinterest" />
        <HelpUs id="ayuda" />
        <Gallery id="galeria" />
        {/* Agrega más secciones aquí */}
      </div>
    );
  }


export default App;