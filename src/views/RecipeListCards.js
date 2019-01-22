import React, { Component, Fragment } from 'react';

import _        from "lodash";

// import "./../styles.css";


import { getFirstFiveRecipes } from "../selectors";
import {

    RecipeCard1,
    RecipeCard2,
    RecipeCard3,
    RecipeCard4,
    RecipeCard5,
} from './../components/RecipeList'


class RecipeListCards extends Component {

  render() {

    return (
      <Fragment>
          <RecipeCard1 />
      </Fragment>
    );
  }
}

export default RecipeListCards;
