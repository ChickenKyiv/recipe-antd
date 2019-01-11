import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RecipeListView     from './views/RecipeListView'
import RecipeDetailsView  from './views/RecipeDetails'

// https://quiet-citadel-22666.herokuapp.com/recipes/

class RecipeRouter extends Component {

  render(){
    
    return (
      {/*<main>
      <Fragment> */}
        <Switch>

          <Route path="/recipelist" exact component={RecipeListView} />
          <Route path="/recipelist/:id"   component={RecipeDetailsView} />





        </Switch>

      {/* </Fragment>
      </main> */}
    )
  }
}


export default RecipeRouter
