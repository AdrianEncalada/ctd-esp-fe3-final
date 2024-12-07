//comentarios de prueba para verificar mis cambios
//confirmar los cambios
import React, { useContext } from 'react';
import Form from '../Components/Form';
import { AppContext } from '../Context/AppContext';

const Contact = () => {
  const { state } = useContext(AppContext);  // Consumo del contexto global para el tema

  return (
    <div className={state.theme === 'dark' ? 'dark-contact' : 'light-contact'}>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo.</p>
      <Form />
    </div>
  );
};

export default Contact;
