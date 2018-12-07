import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// components
import Header from '../Header/Header';
import Personajes from '../Personajes/Personajes';
import PersonajeIndividual from '../Personajes/PersonajeIndividual';
import ComicIndividual from '../Comics/ComicIndividual';
import Resultado from '../Busqueda/Resultado';
// librerías
import axios from 'axios';

class Router extends Component {

  state = {
    personajes: [],
    comics: [],
    series: [],
    busqueda: {},
    datoBusqueda: '',
    categoriaBusqueda: '',
    resultado: [],
    cargando: false,
    limite: ''
  }
  
  componentDidMount() {
      this.obtenerPersonajes();
  }
  

  // haciendo petición a la API con todos los personajes
 obtenerPersonajes = async () => {
    const hash = '11f0c7871378fc62314ac437ee45db22';
    const apiKey = 'e688ebddc4ba147099c69672ce2906bf';
    const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=52`;

   await axios.get(urlAPI)
      .then(respuesta => {
        console.log(respuesta.data.data.results)
        console.log(respuesta.data.data.total)
        console.log(respuesta.data.data.count)
        this.setState({
          personajes: respuesta.data.data.results
        })
      }) 
  }

  // busqueda de personaje, comic o serie
  obtenerResultadosBusqueda = async (datosBusqueda) => {
     this.setState({
        busqueda: datosBusqueda,
        datoBusqueda: datosBusqueda.busqueda,
        categoriaBusqueda: datosBusqueda.categoria
      })
      
     const hash = '11f0c7871378fc62314ac437ee45db22';
     const apiKey = 'e688ebddc4ba147099c69672ce2906bf';
     let urlApiSearch;
    if (datosBusqueda.categoria === 'personaje') {
        urlApiSearch = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${datosBusqueda.busqueda}&apikey=${apiKey}&hash=${hash}&limit=42`
    } else if(datosBusqueda.categoria === 'comic') {
      urlApiSearch = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${datosBusqueda.busqueda}&apikey=${apiKey}&hash=${hash}&limit=42`
    } else if(datosBusqueda.categoria === 'serie') {
      urlApiSearch = `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${datosBusqueda.busqueda}&apikey=${apiKey}&hash=${hash}&limit=52`

    }
     
      await axios.get(urlApiSearch)
      .then(respuestaData => {
        console.log(respuestaData.data.data.results)
        this.setState({
          resultado: respuestaData.data.data.results
        })
      }).catch(error => {
        console.error(error);
      }) 
  } 

  render() {
    // todos los personajes
    let personajes = [...this.state.personajes];
    let resultadoPersonajes = personajes;
  
     let resultadoComponent;
          if (this.state.datoBusqueda == '' || this.state.categoriaBusqueda == '') {
              resultadoComponent = <Route exact path="/" render={() => (
              <Personajes 
                personajes={resultadoPersonajes}
              />
          )} />
          } else if(this.state.categoriaBusqueda === 'personaje') {
            resultadoComponent = <Route exact path="/" render={() => (
             <Resultado 
                personaje={this.state.resultado }
                categoria={this.state.categoriaBusqueda}
             />
          )} />
          } else if(this.state.categoriaBusqueda === 'comic') {
            resultadoComponent = <Route exact path="/" render={() => (
             <Resultado 
                comic={this.state.resultado }
                categoria={this.state.categoriaBusqueda}
             />
          )} />
          } else if(this.state.categoriaBusqueda === 'serie') {
            resultadoComponent = <Route exact path="/" render={() => (
             <Resultado 
                serie={this.state.resultado }
                categoria={this.state.categoriaBusqueda}
             />
          )} />
          }
         
    return(
      <BrowserRouter>
       <React.Fragment>
       <Header
          obtenerResultadosBusqueda={this.obtenerResultadosBusqueda}
       /> 
        <Switch>
        { resultadoComponent }
  
          <Route exact path="/personajes" render={() => (
              <Personajes 
                personajes={resultadoPersonajes}
              />
          )} />

          <Route exact path="/personaje/:personajeId" render={
              (props) => {
                let idPersonaje = props.location.pathname.replace('/personaje/','');
                
                let id = this.state.personajes.findIndex(e => {
                  return idPersonaje === e.id.toString()
                });

                return (
                <PersonajeIndividual
                  personaje={this.state.personajes[id]}
                />
              )
            }} />

            <Route exact path="/comic/:comicId" render={
              (props) => {
                let idComic = props.location.pathname.replace('/comic/','');
                
                let idC = this.state.resultado.findIndex(e => {
                  return idComic === e.id.toString()
                });

                return (
                <ComicIndividual
                  comic={this.state.resultado[idC]}
                />
              )
            }} />

     
          
        </Switch>
       </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router;