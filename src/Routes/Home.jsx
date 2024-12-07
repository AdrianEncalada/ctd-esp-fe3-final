

import React, { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { AppContext } from '../Context/AppContext';
import axios from 'axios';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);  // Consumo del contexto global

  // Llamada a la API al cargar la página
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch({ type: 'SET_DENTISTS', payload: res.data }))
      .catch(err => console.error(err));
  }, [dispatch]);

  return (
    <main className={state.theme === 'dark' ? 'dark-home' : 'light-home'}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
