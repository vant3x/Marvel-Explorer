import React from 'react';
import Buscador from '../Buscador/Buscador';
// styles
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <header className="header-menu">
       <div className="row">
          <div className="col-md-12">
            <div className="container">
              <Buscador
               obtenerResultadosBusqueda={this.props.obtenerResultadosBusqueda}
              />
            </div>
          </div>
       </div>
      </header>

    );
  }
}

export default Header;
