import React, { Fragment } from 'react'

import {
  RecipeCard1,
  RecipeCard2,
  RecipeCard3,
  RecipeCard4,
  RecipeCard5,
} from './index'


const RecipeCardsExample = () => {
  return (
    <Fragment>
      <br />

      <hr />

      <RecipeCard1 title="Card title">
      <hr />
      <hr />
      <hr />
      <hr />
      </RecipeCard1>
      <br />

      <RecipeCard2 title="Card title">
      <hr />
      <hr />
      <hr />
      </RecipeCard2>
      <br />
      <RecipeCard3 title="Card title" description="This is the description" />
      <br />


      <RecipeCard4 />
      <br />
      <RecipeCard5 />
      <br />
    </Fragment>
  )
}

export default RecipeCardsExample
