import React, { Component } from 'react';
import Personaje from './Personaje';
import Paginacion from '../Paginacion/Paginacion';

import './Personajes.css';

class Personajes extends Component {
 
  render() {
    return (
        <div className="personajes-main-container">
          <article className="container">
          <h2 className="white-title p-t">Todos los Personajes</h2>
          <hr className="white-hr" />
            <div className="row">
            {Object.keys(this.props.personajes).map(personaje => (
              <Personaje 
                informacion={this.props.personajes[personaje]}
                key={personaje}
              />
            ))}
            </div>
          </article>
          <Paginacion/>
        </div>
    
    );
  }
}

export default Personajes;