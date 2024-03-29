import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage'; // Updated to camel case

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Updated to camel case */}
        {/* You can add more Route components for other paths here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

