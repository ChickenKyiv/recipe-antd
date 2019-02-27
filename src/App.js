import React, { Component, Fragment } from 'react';

import {
  Router,
  ListWrapper,
  HeaderRecipes
} from '@groceristar/antd-showcase-components'

// import { Cards }   from '@groceristar/cards-wrapper';

import {
  RecipeCard1,
  RecipeCard2,
  RecipeCard3,
  RecipeCard4,
  RecipeCard5,

  // ClearCardsExample,
  // LoadMoreList,
  //RecipeListExample
} from '@groceristar/cards-wrapper'


import {
  getFirstFiveRecipes,
  getRandomRecipe
} from "./selectors/selector";

import "antd/dist/antd.css";



// const styles = {
//   card: {
//
//   }
// }



//
class App extends Component {

  render() {

    const list = getFirstFiveRecipes();

    const recipe = getRandomRecipe();
    console.log(list);
    return (

      <Fragment>
        <HeaderRecipes data={recipe} />
        {/*<Router />*/}
        <ListWrapper list={list} />

        {/*}<Cards /> */}

        {/* <ClearCardsExample /> */}

      </Fragment>


    );
  }
}

export default App;
