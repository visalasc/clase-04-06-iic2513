import React, { useState, useEffect } from 'react';
import PlantCard from './components/PlantCard';
import { plants } from './data/plants';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log('Favoritos actualizados:', favorites);
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const favoritePlants = plants.filter(plant => favorites.includes(plant.id));

  return (
    <div className="app-wrapper">
      <h1>Galería de Plantas 🌿</h1>
      <div className="gallery-layout">
        {/* Columna izquierda: grilla de todas las plantas */}
        <div className="plant-list">
          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={favorites.includes(plant.id)}
              onToggleFavorite={() => toggleFavorite(plant.id)}
            />
          ))}
        </div>

        {/* Columna derecha: lista de favoritas */}
        <div className="favorites-panel">
          <h2>Favoritas 💚</h2>
          <div className="plant-list">
          {/* Si no hay favoritas, mostrar mensaje */}
          {favoritePlants.length === 0 ? (
            <p>No hay plantas favoritas aún.</p>
          ) : (
            
            favoritePlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                isFavorite={true}
                onToggleFavorite={() => toggleFavorite(plant.id)}
              />
            ))
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
