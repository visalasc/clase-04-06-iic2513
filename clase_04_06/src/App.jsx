import React, { useState } from 'react';
import PlantCard from './components/PlantCard';
import { plants } from './data/plants';
import './App.css';

function App() {
  // State to manage favorite plants
  const [favorites, setFavorites] = useState([]);

  // Function to toggle favorite status of a plant
  // If the plant is already a favorite, remove it; otherwise, add it to favorites
  
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-wrapper">
      <h1>Mis Plantas</h1>
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
    </div>
  );
}

export default App;
