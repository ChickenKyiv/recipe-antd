import React, { Component, Fragment } from 'react';

import { Tabs, Button, Row, Col, Upload, Icon, message, Checkbox } from 'antd'


import {

    RecipeCard1,
    RecipeCard2,
    RecipeCard3,
    RecipeCard4,
    RecipeCard5,
} from './../components/RecipeList'




import {
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  getShowcaseFiveRecipes
} from './../selectors'

const TabPane = Tabs.TabPane

const RecipeDetails = ({ id }) => {
  return (
    <div>
      123
    </div>
  )
}

export default RecipeDetails;
