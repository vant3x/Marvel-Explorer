import React from 'react';
import Logo from '../Header/Logo';
import './Buscador.css';

class Buscador extends React.Component {
 
  render() {
    return (
      
      <div className="container">
       <div className="row">
         <div className="col-3">
          <Logo/>
         </div>
         <div className="col-3">
            <nav>
              <ul>
                <li class="nav-li">
                  <a href="" className="nav-links">Todos</a>
                </li>
              </ul>
            </nav>
         </div>
         <div className="col-5">
            <form>
              <input className="input-field" type="text" placeholder="Personajes, comics, series" />
            </form>
         </div>
       </div>
      </div>
    );
  }
}

export default Buscador;