import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView    from './views/HomeView'
import SearchView from './views/SearchView'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/s" exact component={SearchView} />





        </Switch>
      </BrowserRouter>
    )
  }
}


export { Router }
