import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView    from './views/HomeView'
import ASearchView from './views/ASearchView'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/s" exact component={ASearchView} />





        </Switch>
      </BrowserRouter>
    )
  }
}


export { Router }
