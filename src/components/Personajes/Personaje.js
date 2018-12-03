import React from 'react';
import {Link} from 'react-router-dom';
import './Personaje.css';
const Personaje = (props) => {
  const {id, name, thumbnail} = props.informacion;
  return(
      <div className="col-lg-3 col-md-4 col-xs-6">
        <article className="personaje-box">
          <img src={`${thumbnail.path}/standard_amazing.${thumbnail.extension}`} alt={name} className="max-width img-personaje"/>
          <h3 className="nombre-personaje">{name}</h3> 
          <Link to={`/personaje/${id}`} className="btn-personaje">Más información</Link>
        </article>
      </div>
  )
}

export default Personaje;
