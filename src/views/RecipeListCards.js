import React, { Component, Fragment } from 'react';
import _        from "lodash";

// import "./../styles.css";

// import Main   from '@groceristar/antd-showcase-components';

import {
    RecipeCard1,
    RecipeCard2,
    RecipeCard3,
    RecipeCard4,
    RecipeCard5,
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
