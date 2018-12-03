import React, { Component } from 'react';
import Personaje from './Personaje';

class Personajes extends Component {
 
  render() {
    return (
   
        <div>
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