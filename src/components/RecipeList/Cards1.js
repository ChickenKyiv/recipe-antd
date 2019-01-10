import React, { Component, Fragment } from 'react';

import { Card, Icon, Avatar, Col, Row } from 'antd';

const { Meta } = Card;

// @TODO replace with Router Link?
// add children stuff?

// <Card
//   title="Card title"
//   extra={<a href="#">More</a>}
//   style={styles}
// >
//   <p>Card content</p>
//   <p>Card content</p>
//   <p>Card content</p>
//
// </Card>

const RecipeCard1 = ({ title, path, children }) => {

  const styles = {
    width: 300
  };

  return (
    <Card
      title={title}
      extra={<a href={path}>More</a>}
      style={styles}
    >

      {/*

      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>

      */}
      {children}
    </Card>
  )

}
export default RecipeCard1
