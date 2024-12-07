

import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';

const Detail = () => {
  const { id } = useParams(); // Obtener el parámetro dinámico de la URL
  const [dentist, setDentist] = useState(null);
  const { state } = useContext(AppContext); // Obtener el tema global

  // Llamada a la API para obtener detalles del dentista
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setDentist(res.data))
      .catch((err) => console.error("Error fetching dentist:", err));
  }, [id]);

  return (
    <main className={state.theme === 'dark' ? 'dark-detail' : 'light-detail'}>
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <div className="detail-card">
          <h2>{dentist.name}</h2>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Sitio Web:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      ) : (
        <p>Cargando detalles del dentista...</p>
      )}
    </main>
  );
};

export default Detail;
