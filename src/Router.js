import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView    from './views/HomeView'
import SearchView from './views/SearchView'

import ASearchView from './views/ASearchView'

// import RecipeRouter from './RecipeRouter'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/s" exact component={SearchView} />

          <Route path="/s2" exact component={ASearchView} />


        {/*<Route path="/recipelist" exact component={RecipeRouter} />*/}


        </Switch>
      </BrowserRouter>
    )
  }
}


export { Router }
