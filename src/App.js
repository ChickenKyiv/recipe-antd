import React, { Component, Fragment } from 'react';






import { Router } from './Router';

import { ClearCardsExample } from './components/RecipeList'
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
  RecipeCard5,
} from './components/RecipeList'


import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (

      <Fragment>

        <Router />




{/* <ClearCardsExample /> */}
      </Fragment>


    );
  }
}

export default App;
