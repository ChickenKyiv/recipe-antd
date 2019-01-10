import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Router } from './Router';

// import SearchView from './views/SearchView';



// import { TheCard1, TheCard2, TheCard3, TheCard4 } from './components/RecipeList/Cards'
//
// import LoadMoreList      from './components/RecipeList/More'
// import RecipeListExample from './components/RecipeList/RecipeList'
//


import {
  RecipeCard1,
RecipeCard2,
RecipeCard3,
RecipeCard4,
} from './components/RecipeList'


class App extends Component {
  render() {
    return (

      <Fragment>

        <Router />

        <br />

        <hr />

        <RecipeCard1 title="Card title">
        <hr />
        <hr />
        <hr />
        <hr />
        </RecipeCard1>
        <br />

        <RecipeCard2 title="Card title">
        <hr />
        <hr />
        <hr />
        </RecipeCard2>
<br />
        <RecipeCard3 title="Card title" description="This is the description" />
<br />


        <RecipeCard4 />


      </Fragment>


    );
  }
}

export default App;
