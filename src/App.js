import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Router } from './Router';

// import SearchView from './views/SearchView';

import {   TheCard1, TheCard2, TheCard3, TheCard4 } from './components/RecipeList/Cards'

import LoadMoreList      from './components/RecipeList/More'
import RecipeListExample from './components/RecipeList/RecipeList'




class App extends Component {
  render() {
    return (

      <Fragment>

        <Router />

        <TheCard1 />
        <TheCard2 />
        <TheCard3 />
        <TheCard4 />
        <LoadMoreList />
        <RecipeListExample />

      </Fragment>


    );
  }
}

export default App;
