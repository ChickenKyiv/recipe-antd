import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Router } from './Router';

// import SearchView from './views/SearchView';

import {   TheCard1, TheCard2, TheCard3, TheCard4 } from './components/RecipeList/Cards'

import LoadMoreList      from './components/RecipeList/More'
import RecipeListExample from './components/RecipeList/RecipeList'



import RecipeCard1 from './components/RecipeList/Cards1'


class App extends Component {
  render() {
    return (

      <Fragment>

        <Router />

        <br />
        <TheCard1 />
        <hr />
        <br />
        <TheCard2 />
        <hr />
        <br />
        <TheCard3 />
        <hr />
        <br />
        <TheCard4 />
        <hr />
        <br />
        <LoadMoreList />
        <hr />
        <br />
        <RecipeListExample />
        <hr />
        <br />
      </Fragment>


    );
  }
}

export default App;
