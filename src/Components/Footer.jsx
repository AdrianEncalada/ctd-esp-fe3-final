import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Footer = () => {
  const { state } = useContext(AppContext);  // Consumo del tema desde el contexto

  return (
    <footer className={state.theme === 'dark' ? 'dark-footer' : 'light-footer'}>
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
