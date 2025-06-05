import React from 'react';
import PlantCard from './components/plantCard';
import { plants } from './data/plants';
import './App.css';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Galería de Plantas 🌱</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default App;