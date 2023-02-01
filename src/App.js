import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;