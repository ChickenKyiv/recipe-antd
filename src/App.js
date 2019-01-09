import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Router } from './Router';

import SearchView from './views/ASearchView';

import {   TheCard1, TheCard2, TheCard3. TheCard4 } from './components/RecipeList'
import LoadMoreList from './components/RecipeList'
import RecipeListExample from './components/RecipeList'

class App extends Component {
  render() {
    return (

      <Fragment>

        <Router />
      </Fragment>


    );
  }
}

export default App;
