import React from 'react';
import '../styles/PlantCard.css';

const PlantCard = ({ plant, isFavorite, onToggleFavorite }) => {
  // Render a card for each plant with its image, name, description, and favorite button
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? '💚 Quitar de favoritos' : '🤍 Agregar a favoritos'}
      </button>
    </div>
  );
};

export default PlantCard;
