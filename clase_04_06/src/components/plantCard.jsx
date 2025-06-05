import React from 'react';
import '../styles/PlantCard.css';

const PlantCard = ({ plant }) => {
  return (
    <>
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
    </div>
    </>
  );
};

export default PlantCard;
