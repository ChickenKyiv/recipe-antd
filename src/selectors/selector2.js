import axios from 'axios';

// we're using this file in order to organize our api calls.
// later we'll use this file as source for moving into selector3.js - because it's have a better approach of handling our api calls
// here we have an actually worked before react app that send queries into our loopback server
// https://github.com/ChickenKyiv/loopback-tutor-intern-8/tree/frontend
// also check selectors/api-config.js file

import { API_ROOT } from './api-config'

const serverURL = '';


// aka chickenKyiv.getRandomRecipe()
function getRandomRecipe(){
  return ''
}
// aka chickenKyiv.getFirstFiveRecipes();
function getFirstFiveRecipes(){
  return ''
}

// aka chickenKyiv.getFiveRandomIngredients();
function getFiveRandomIngredients(){
  return ''
}

//@TODO i don't like this name too
// aka chickenKyiv.getRecipe()[id];
function getRecipeChickenKyivById( id ) {
  return ''
}


let chickenKyivAPI = {
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById
}


let GroceristarAPI = {

};





GroceristarAPI.methodA = function() => {

  console.log(serverURL)

};



export default GroceristarAPI;
