import React from 'react';
import '../styles/PlantCard.css';

const PlantCard = ({ plant, isFavourite, toggleFavourite }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <button onClick={() => toggleFavourite(plant)}>
        {isFavourite ? 'Quitar de favoritas' : 'Agregar a favoritas'}
      </button>
    </div>
  );
};

export default PlantCard;
