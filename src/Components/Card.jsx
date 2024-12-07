

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(AppContext);

  // Lógica para agregar favoritos
  const addFav = () => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Evitar duplicados
    if (!currentFavorites.some((dentist) => dentist.id === id)) {
      const newFavorite = { name, username, id };
      const updatedFavorites = [...currentFavorites, newFavorite];
      
      // Guardar en localStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      // Actualizar el estado global
      dispatch({ type: "ADD_FAVORITE", payload: newFavorite });
      alert("Dentista agregado a favoritos!");
    } else {
      alert("Este dentista ya está en tus favoritos.");
    }
  };

  return (
    <div className={state.theme === "dark" ? "dark-card" : "light-card"}>
      <h3>{name}</h3>
      <p>Usuario: {username}</p>
      <Link to={`/dentist/${id}`} className="details-link">Ver Detalles</Link>
      <button onClick={addFav} className="favButton">Agregar a Favoritos</button>
    </div>
  );
};

export default Card;
