import React, { Component, Fragment } from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

import HomeView    from './views/HomeView'
import SearchView  from './views/SearchView'

import ASearchView from './views/ASearchView'



// import RecipeRouter from './RecipeRouter'


// import Recipes from './Recipes'

// import AddRecipe from './AddRecipe'


import RecipeListView     from './views/RecipeListView'
import RecipeDetailsView  from './views/RecipeDetails'
const RR = () => {
  return (
    <Fragment>
      <Route path="/recipelist" exact component={RecipeListView} />
      <Route path="/recipelist/:id"   component={RecipeDetailsView} />
    </Fragment>
  )
}



class Router extends Component {

  render(){

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/" exact component={HomeView} />

          <Route path="/s" exact component={SearchView} />

          <Route path="/s2" exact component={ASearchView} />


          <Route path="/recipelist" exact component={RR} />

          {/*<Route path="/recipelist" component={Recipes} /> */}
          {/*<Route path="/addrecipe" component={AddRecipe} /> */}

        </Switch>
      </BrowserRouter>
    )
  }
}


export { Router }
