import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index'
import Aboutme from './pages/Aboutme'
import Hireme from './pages/Hireme'
import ScrollToTop from './components/ScrollToTop';
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/hireme" element={<Hireme />} />
      </Routes>
    </Router>

  );
}

export default App;
