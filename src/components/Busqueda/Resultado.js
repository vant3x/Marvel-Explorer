import React from 'react';
import ResultadoData from './ResultadoData';
import Paginacion from '../Paginacion/Paginacion';

class Resultado extends React.Component {

  render() {
    console.log(this.props.categoria)
      if(typeof this.props.categoria === 'undefined') return <div>No encontrado</div>

      // definir la categoria para filtrar la busqueda

      let categoria = this.props.categoria;
      let props;
      if (categoria === 'personaje') {
          props = this.props.personaje;
      } else if (categoria === 'comic') {
        props = this.props.comic;
      
      } else if (categoria === 'serie') {
        props = this.props.serie;
      }

    return(
        <div className="personajes-main-container">
          <article className="container">
          <h2 className="white-title p-t">Resultado de la busqueda</h2>
          <hr className="white-hr" />
            <div className="row">
              {Object.keys(props).map(resultadoBusqueda => (
                    <ResultadoData
                      informacion={props[resultadoBusqueda]}
                      key={resultadoBusqueda}
                      categoria={this.props.categoria}
                    />
                  ))}
            </div>
          </article>
          <Paginacion/>
        </div>
   
    )
  }
  

}

export default Resultado;
