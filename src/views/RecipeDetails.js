import React, { Component, Fragment } from 'react';
//
import {
  Tabs,
   // Button, Row, Col, Upload, Icon, message, Checkbox
} from 'antd'

import {
  IngredientList,
  DefaultList
} from '@groceristar/grocery-component';

// import RecipeHeader from './RecipeHeader/RecipeHeader';

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
} from '@groceristar/cards-wrapper'

import {
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById
} from "../selectors/selector"

const TabPane = Tabs.TabPane

const RecipeDetails = ({ id }) => {
  console.log("In Recipe Details");
  return (
    <div>
      123
    </div>
  )
}

export default RecipeDetails;
