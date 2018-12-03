import React, { Component } from 'react';
import Personaje from './Personaje';
import './Personajes.css';

class Personajes extends Component {
 
  render() {
    return (
        <div className="personajes-main-container">
          <article className="container">

            <div className="row">
            {Object.keys(this.props.personajes).map(personaje => (
              <Personaje 
                informacion={this.props.personajes[personaje]}
                key={personaje}
              />
            ))}
            </div>
          </article>
        </div>
    
    );
  }
}

export default Personajes;