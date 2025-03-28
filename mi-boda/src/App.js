import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Navigation from './components/Navigation';
import OurStory from './pages/OurStory';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        {/* Aquí luego agregaremos el menú de navegación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuestra-historia" element={<OurStory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;