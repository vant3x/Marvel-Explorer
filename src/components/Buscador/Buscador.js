import React from 'react';
import Logo from '../Header/Logo';
import './Buscador.css';
import {Link} from 'react-router-dom';

// Crear el context 
const BuscadorContext = React.createContext();

class Buscador extends React.Component {


  categoriaRef = React.createRef();
  busquedaRef = React.createRef();

  buscarContenido = (e) => {
    e.preventDefault();
    // crear el objeto
    const filtroBusqueda = {
      categoria: this.categoriaRef.current.value,
      busqueda: this.busquedaRef.current.value
    }
    console.log(filtroBusqueda);
    this.props.obtenerResultadosBusqueda(filtroBusqueda);

  }

  render() {
    return (

            <div className="row">
                <div className="col-2">
                  <Logo/>
                </div>
                <div className="col-2">
                    <nav>
                      <ul>
                        <li className="nav-li">
                          <Link to={'/personajes'} className="nav-links">Todos</Link>
                        </li>
                      </ul>
                    </nav>
                </div>
                <div className="col-7">
                    <form onSubmit={this.buscarContenido}>
                      <input ref={this.busquedaRef} className="input-field" type="text" placeholder="Personajes, comics, series" />
                      <select ref={this.categoriaRef} className="form-control select">
                        <option value=""  defaultValue>Elige categoría</option>
                        <option value="personaje">Personaje</option>
                        <option value="comic">Comic</option>
                        <option value="serie">Serie</option>
                      </select>
                      <input type="submit" value="Buscar" className="btn-buscar" />
                    </form>
                </div>
            </div>

    );
  }
}

export default Buscador;