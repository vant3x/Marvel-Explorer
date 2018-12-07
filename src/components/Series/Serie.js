import React from 'react';
import './ComicIndividual.css';

class  Serie extends React.Component {

  render() {
     console.log(this.props.comic)
     const {title, thumbnail, creators, description, pageCount, prices, dates} = this.props.comic;
      return(
        <div className="container-fluid">
          <div className="row text-center">
             <div className="col-7 top-space">
                <img src={`${thumbnail.path}/detail.${thumbnail.extension}`} alt={title} className="max-width-img img-personaje"/>
              </div>
             <div className="col-5 top-space">
                <h2 className="red-text">{title}</h2>
                <p className="white-text  ">{description}</p>
                <h3 className="white-text">Creadores: <span className="red-circle">{creators.available}</span></h3>
              
                <h3 className="white-text">Precios: </h3>
                <li>Impreso: 
                  <span className="red-text">${prices[0].price} </span>
                </li>
                <li>Digital: 
                  <span className="red-text">$ { prices[1] ? prices[1].price : '' } </span>
                </li>
                <br/>
                <br/>
                <h3 className="white-text">Páginas: <span className="red-text">{pageCount} </span></h3>
                
                <h3 className="white-text">Fecha de publicación: <span className="red-text">{dates[0] ? dates[0].date : '' } </span></h3>

              </div>
          </div>
         
        </div>
    )
  }
}

export default Serie;