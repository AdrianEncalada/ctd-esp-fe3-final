
import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { AppContext } from "../Context/AppContext";

const Favs = () => {
  const { state } = useContext(AppContext); // Consumo del tema global
  const [favorites, setFavorites] = useState([]);

  // Obtener favoritos del localStorage al cargar la página
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <main className={state.theme === "dark" ? "dark-favs" : "light-favs"}>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
