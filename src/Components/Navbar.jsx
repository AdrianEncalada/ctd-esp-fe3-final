

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

// Componente Navbar con temas dinámicos
const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);  // Consumo del Contexto Global

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme === 'dark' ? 'dark-navbar' : 'light-navbar'}>
      <ul>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/favs">Destacados</Link></li>
      </ul>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;
