import React from 'react';
import './Resultado.css';
import {Link} from 'react-router-dom';

const ResultadoData = (props) => {
 
    let {id, name,thumbnail,title} = props.informacion;
    let categoria = props.categoria;
  
  return(
    <div className="col-lg-3 col-md-4 col-xs-6">
        <article className="personaje-box">
          <Link to={`/${categoria}/${id}`}><img src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`} alt={name} className="max-width img-personaje"/></Link>
          <h3 className="nombre-personaje">{categoria == 'personaje' ? name : title}</h3> 
          <Link to={`/${categoria}/${id}`} className="btn-more">Más información</Link>
        </article>
      </div>
    )}

export default ResultadoData;