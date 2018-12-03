import React from 'react';
import Buscador from '../Buscador/Buscador';
// styles
import './Header.css';

class Header extends React.Component {
  render() {
    return(
      <header class="header-menu">
       <div className="row">
          <div className="col-md-12">
            <div className="container">
              <Buscador/>
            </div>
          </div>
       </div>
      </header>
    );
  }
}

export default Header;
