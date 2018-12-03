import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// components
import Header from '../Header/Header';
import Personajes from '../Personajes/Personajes';

class Router extends Component {

  state = {
    personajes: []
  }
  
  render() {
    return(
      <BrowserRouter>
       <React.Fragment>
       <Header/>
        <Switch>
          <Route exact path="/" render={() => (
              <Personajes />
          )} />
        </Switch>
       </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default Router;