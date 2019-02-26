import React, { Component, Fragment } from 'react';

// import { Router } from './Router';
import  { Router
  // , Cards
}  from '@groceristar/antd-showcase-components'

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



// import { Router,  ListWrapper } from './'
//--------------
import { getFirstFiveRecipes, getRandomRecipe } from "./selectors/selector";
// import { List, Card, Ellipsis, Icon, Button } from 'antd'

import { ListWrapper, HeaderRecipes } from '@groceristar/antd-showcase-components'

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
