import React from 'react';
import './PersonajeIndividual.css';

const PersonajeIndividual = (props) => {
  // if(props) return null;
  console.log(props.personaje)
  if(typeof props.personaje === 'undefined') return <div>No encontrado</div>
  const {name,description, thumbnail, comics, series} = props.personaje;
  return(
    <div className="container info-personaje">
      <div className="row text-center m-b">    
            <div className="col-6 top-space2 center-left">
             <span className="red-bar"></span>
              <h2 className="nombre-personaje-individual">{name}</h2>
                <h4 className="white-text">Descripción: </h4>
               <p className="descripcion-personaje">{description}</p>
            </div>
            <div className="col-5 top-space3">
              <img src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} alt={name} className="img-personaje2 img-rounded img-shadow"/>
            </div>
      </div>
    
      <div className="row text-center"> 
        <div className="col-2">
          <h3>Comics</h3>
          <span className="numero-comics">{comics.available}</span>
         </div> 
         <div className="col-2">
          <h3>Series</h3>
          <span className="numero-comics">{series.available}</span>
        </div> 
      </div>   
 
    </div>

  )
}

export default PersonajeIndividual;