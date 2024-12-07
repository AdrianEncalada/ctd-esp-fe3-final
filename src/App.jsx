
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';               // Página principal
import Contact from './Pages/Contact';         // Página de contacto
import DentistDetail from './Pages/DentistDetail'; // Página de detalle
import Favs from './Pages/Favs';               // Página de favoritos

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* Navbar en todas las páginas */}
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<DentistDetail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </main>
      <Footer />   {/* Footer en todas las páginas */}
    </BrowserRouter>
  );
}

export default App;
