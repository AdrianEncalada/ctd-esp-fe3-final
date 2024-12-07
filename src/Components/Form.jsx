
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Validar formato de email
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5 || !validateEmail(email)) {
      setError('Por favor verifica tu información nuevamente');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
      console.log(`Nombre: ${name}, Email: ${email}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Gracias {name}, te contactaremos pronto vía correo electrónico.</p>}
    </div>
  );
};

export default Form;
