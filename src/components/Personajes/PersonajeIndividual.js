import React from 'react';
import './PersonajeIndividual.css';

const PersonajeIndividual = ({ personaje }) => {
  if (!personaje) return null;

  const { name } = personaje;
  return (<div className="info-personaje" >
    <div className="imagen" >
    </div>

    <div className="info" >
      <h2>{name}</h2>
    </div>
  </div>
  )
}

export default PersonajeIndividual;