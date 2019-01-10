import React, { Component, Fragment } from 'react';

import { Card, Icon, Avatar, Col, Row } from 'antd';

const { Meta } = Card;


// @TODO replace with Router Link?
// add children stuff?

// <div style={{ background: '#ECECEC', padding: '30px' }}>
//   <Card title="Card title" bordered={false} style={{ width: 300 }}>
//     <p>Card content</p>
//     <p>Card content</p>
//     <p>Card content</p>
//   </Card>
// </div>



const RecipeCard2 = ({ title, children }) => {
  const styles = {
    width: 300
  };

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card
        title={title}
        bordered={false}
        style={styles}>
        {/*
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        */}
        {children}
      </Card>
    </div>
  )
}



export default RecipeCard2
