import React, { Component, Fragment } from 'react';

import { Card, Col, Row, Icon } from 'antd'
import { Link } from 'react-router-dom'

import {
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  getShowcaseFiveRecipes
} from './../selectors'


const RecipeListView = () => {

  // componentWillMount = props => {
  //     this.props.fetchRecipe('https://quiet-citadel-22666.herokuapp.com/recipes/')
  //   }

  const data = getFirstFiveRecipes();
  console.log(data)

  return (
    {/*<div>
      123
    </div>*/}

    <div style={{ background: '#ECECEC', padding: '30px' }}>
  <Row gutter={8} style={{ cursor: 'default' }}>
    {recipes.map((recipe, idx) => {
      return (
        <Col span={8} key={recipe.id}>
          <br />

          <Card
            style={{
              width: 300,
              height: 260,
              lineHeight: 1.5,
              fontSize: 14
            }}
            bodyStyle={{ padding: 2 }}
          >
            <Link to={`/recipelist/${recipe.id}`}>
              <div className="custom-image">
                <img
                  alt="example"
                  width="100%"
                  height="225"
                  src={recipe.image}
                />
              </div>
            </Link>
            <div
              style={{ display: 'inline-block' }}
              className="custom-card"
            >
              <h3>
                {recipe.recipename}{' '}
              </h3>
            </div>
            <Icon
              id={recipe.id}
              onClick={e => this.deleteCall(e, idx)}
              style={{
                cursor: 'pointer',
                fontSize: 20,
                float: 'right',
                paddingRight: 7
              }}
              type="delete"
            />
            <Icon
              id={recipe.id}
              style={{
                cursor: 'pointer',
                fontSize: 20,
                float: 'right',
                paddingRight: 7
              }}
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
