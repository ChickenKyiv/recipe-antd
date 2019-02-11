import React, { Component, Fragment } from 'react';

import { Router } from './Router';




import {
  RecipeCard1,
  RecipeCard2,
  RecipeCard3,
  RecipeCard4,
  RecipeCard5,

  // ClearCardsExample,
  // LoadMoreList,
  //RecipeListExample
} from './components/RecipeList'

//--------------

import { getFirstFiveRecipes } from "./selectors/selector";

// import { List, Card, Ellipsis, Icon, Button } from 'antd'

import ListWrapper from './components/ListWrapper/ListWrapper'

import "antd/dist/antd.css";





// const styles = {
//   card: {
//
//   }
// }




class App extends Component {
  render() {

    const list = getFirstFiveRecipes();

    return (

      <Fragment>

        <Router />

        <ListWrapper list={list} />


        {/* <ClearCardsExample /> */}

      </Fragment>


    );
  }
}

export default App;
