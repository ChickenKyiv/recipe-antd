import React, { Component, Fragment } from 'react';

// import { Router } from './Router';
import  { Router, Cards }  from '@groceristar/antd-showcase-components'



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










// import { Router,  ListWrapper } from './'

//--------------

import { getFirstFiveRecipes } from "./selectors/selector";

// import { List, Card, Ellipsis, Icon, Button } from 'antd'

// import ListWrapper from './components/ListWrapper/ListWrapper'
// import { ListWrapper } from '@groceristar/antd-showcase-components'


import "antd/dist/antd.css";





// const styles = {
//   card: {
//
//   }
// }

  

// <ListWrapper list={list} />
class App extends Component {

  render() {

    const list = getFirstFiveRecipes();
    console.log(list);
    return (

      <Fragment>

        <Router />


        <Cards />

        {/* <ClearCardsExample /> */}

      </Fragment>


    );
  }
}

export default App;
