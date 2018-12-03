import React from 'react';
import './PersonajeIndividual.css';

const PersonajeIndividual = ({ personaje }) => {
  if (!personaje) return <div>CARGANDO...</div>;
  const { name, thumbnail } = personaje;
  return (
    <div> 
       <h3>{name}</h3>
      <img src={`${thumbnail.path}/standard_amazing.${thumbnail.extension}`} />
    </div>
  )
}

export default PersonajeIndividual;