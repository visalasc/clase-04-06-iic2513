import React, { useState, useRef, useEffect } from 'react';
import PlantCard from './components/PlantCard';
import { plants } from './data/plants';
import './App.css';

function App() {
  const [favourites, setFavourites] = useState([]);
  const favouritesRef = useRef(null);

  const toggleFavourite = (plant) => {
    setFavourites((prev) =>
      prev.includes(plant)
        ? prev.filter((p) => p !== plant)
        : [...prev, plant]
    );
  };

  const scrollToFavourites = () => {
    favouritesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Galería de Plantas</h1>
      <button onClick={scrollToFavourites}>Ver Favoritas</button>

      <div className="plant-sections">
        {/* Todas las plantas */}
        <div className="plant-section">
          <h2>Todas las Plantas</h2>
          <div className="plant-grid">
            {plants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                isFavourite={favourites.includes(plant)}
                toggleFavourite={toggleFavourite}
              />
            ))}
          </div>
        </div>

        {/* Favoritas */}
        <div className="plant-section" ref={favouritesRef}>
          <h2>Favoritas</h2>
          {favourites.length === 0 ? (
            <p>No hay plantas favoritas aún.</p>
          ) : (
            <div className="plant-grid">
              {favourites.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  isFavourite={true}
                  toggleFavourite={toggleFavourite}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
