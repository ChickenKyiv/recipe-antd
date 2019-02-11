

import { chickenKyiv } from "@groceristar/groceristar-fetch";


function getRandomRecipe(){
  return chickenKyiv.getRandomRecipe()
}

function getFirstFiveRecipes(){
  return chickenKyiv.getFirstFiveRecipes();
}

//
// function getShowcaseFiveRecipes(){
//   return chickenKyiv.getShowcaseFiveRecipes();
// }


function getFiveRandomIngredients(){
  return chickenKyiv.getFiveRandomIngredients();
}

//@TODO i don't like this name too
function getRecipeChickenKyivById(id) {
  return chickenKyiv.getRecipe()[id];
}


export {

  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  // getShowcaseFiveRecipes

}
