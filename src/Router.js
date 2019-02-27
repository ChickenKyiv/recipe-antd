import React, { Component, Fragment } from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

import HomeView   from './views/HomeView'
// import HomeView   from '@groceristar/antd-showcase-components'
// import SearchView from '@groceristar/antd-showcase-components'


// import RecipeListCards from './views/RecipeListCards'
import {
  ClearCardsExample,
  DefaultCardsExample
} from '@groceristar/cards-wrapper'


import ExampleCardsView from './views/ExampleCardsView';
// import RecipeRouter from './RecipeRouter'


// import Recipes from './Recipes'

// import AddRecipe from './AddRecipe'

import RecipeListView     from './views/RecipeListView'
import RecipeDetailsView  from './views/RecipeDetails'

const RR = () => {
  return (
    <Fragment>

      <Route path="/" exact component={HomeView} />

      <Route path="/recipelist" exact component={RecipeListView} />
      <Route path="/recipelist/:id"   component={RecipeDetailsView} />

      {/*<Route path="/addrecipe" component={AddRecipe} /> */}


    </Fragment>
  )
}


class Router extends Component {

  render(){

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/"  component={HomeView} exact/>
          {/*<Route path="/s2"  component={SearchView} exact />*/}
          <Route path="/recipelist"  component={RR} />

          <Route path="/cards"  exact component={ClearCardsExample} />

        </Switch>
      </BrowserRouter>
    )
  }
}

export { Router }
