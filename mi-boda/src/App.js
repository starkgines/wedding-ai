import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Navigation from './components/Navigation';
import OurStory from './pages/OurStory';
import EventDetails from './pages/EventDetails';
import RSVP from './pages/RSVP'
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
        {/* Agrega más secciones aquí */}
      </div>
    );
  }


export default App;