import React, { Component, Fragment } from 'react';
import _        from "lodash";

// import "./../styles.css";

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
} from '@groceristar/cards-wrapper'

import { getFirstFiveRecipes } from "../selectors/selector";


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
