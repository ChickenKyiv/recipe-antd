import React, { Component, Fragment } from 'react';

import { Card, Col, Row, Icon, Empty } from 'antd'
import { Link } from 'react-router-dom'

import Img from 'react-image'

import {

    RecipeCard1,
    RecipeCard2,
    RecipeCard3,
    RecipeCard4,
    RecipeCard5,

} from './../components/RecipeList'

// import {
//   RecipeCard1,
//   RecipeCard2,
//   RecipeCard3,
//   RecipeCard4,
//   RecipeCard5,
// } from ''


import {
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById

} from "../selectors/selector"




const styles = {
  icon: {
    cursor: 'pointer',
    fontSize: 20,
    float: 'right',
    paddingRight: 7
  },
  card: {
    width: 300,
    height: 260,
    lineHeight: 1.5,
    fontSize: 14
  }
}

const old = () => {

}


const RecipeListView = () => {

  // componentWillMount = props => {
  //     this.props.fetchRecipe('https://quiet-citadel-22666.herokuapp.com/recipes/')
  //   }

  const recipes = getFirstFiveRecipes();
  console.log(recipes)

  return (


    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={8} style={{ cursor: 'default' }}>

        {recipes.map((item, idx) => {

          const recipe = item.recipe;
          return (

            <Col span={8} key={item.key}>
              <br />

              <Card
                style={styles.card}
                bodyStyle={{ padding: 2 }}
              >
                <Link to={`/recipelist/${item.key}`}>
                  <div className="custom-image">

                    <Img src={recipe.image} unloader={<Empty />} />
                  </div>
                </Link>

                <div
                  style={{ display: 'inline-block' }}
                  className="custom-card"
                >
                  <h3>
                    {recipe.title}{' '}
                  </h3>
                </div>
                <Icon
                  id={item.key}
                  onClick={e => this.deleteCall(e, idx)}
                  style={styles.icon}
                  type="delete"
                />
                <Icon
                  id={item.key}
                  style={styles.icon}
                  type="edit"
                />
              </Card>




            </Col>
          )
        })}

      </Row>
    </div>
  )
}

export default RecipeListView
