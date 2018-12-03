import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Header from '../Header/Header';
import Personajes from '../Personajes/Personajes';
import PersonajeIndividual from '../Personajes/PersonajeIndividual';
// librerías
import axios from 'axios';

class Router extends Component {

  state = {
    personajes: []
  }


  componentDidMount() {
    this.obtenerPersonajes();
  }

  // haciendo petición a la API
  obtenerPersonajes = () => {
    const hash = '11f0c7871378fc62314ac437ee45db22';
    const apiKey = 'e688ebddc4ba147099c69672ce2906bf';
    const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=40`;

    axios.get(urlAPI)
      .then(respuesta => {
        console.log(respuesta.data.data.results)
        this.setState({
          personajes: respuesta.data.data.results
        })
      })
  }

  render() {

    let personajes = [...this.state.personajes];
    let resultado = personajes;

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Personajes
                personajes={resultado}
              />
            )} />
            <Route exact path="/personajes" render={() => (
              <Personajes
                personajes={resultado}
              />
            )} />

            <Route exact path="/personaje/:personajeId" render={
              ({ match: { params: { personajeId } } }) => {

                personajeId = Number.parseInt(personajeId)

                return (
                  <PersonajeIndividual
                    personaje={this.state.personajes.find(personaje => personaje.id === personajeId)}
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