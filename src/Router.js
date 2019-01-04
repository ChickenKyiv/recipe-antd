import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />





        </Switch>
      </BrowserRouter>
    )
  }
}


export { Router }
