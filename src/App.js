import React, { Component, Fragment } from 'react';

import {
  Router,

  HeaderRecipes
} from '@groceristar/antd-showcase-components'

import { ListWrapper, Em }   from '@groceristar/cards-wrapper';

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,

  // ClearCardsExample,
  // LoadMoreList,
ClearCardsExample,
DefaultCardsExample
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
  getListWrapper(list){
    if(list != undefined && list.length > 0){
      return (<ListWrapper list={list} />)
    }else {
      return (<Em />)
    }
  }
  render() {

    const list = getFirstFiveRecipes();
    const recipe = getRandomRecipe();
    console.log(list);
    return (

      <Fragment>
        <HeaderRecipes data={recipe} />
        {/*<Router />*/}

        {this.getListWrapper(list)}
        {/*}<Cards /> */}

        {/* <ClearCardsExample /> */}

      </Fragment>


    );
  }
}

export default App;
