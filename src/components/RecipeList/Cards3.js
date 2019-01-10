import React, { Component, Fragment } from 'react';

import { Card, Icon, Avatar, Col, Row } from 'antd';

const { Meta } = Card;

// <Card
//   style={{ width: 300 }}
//   cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
//   actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
// >
//   <Meta
//     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//     title="Card title"
//     description="This is the description"
//   />
// </Card>


const RecipeCard3 = ({ title, children, type = 'all' }) => {
  const styles = {
    width: 300
  };

  const cover = <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />

  // actions
  let actions
  switch (type) {
    case 'all':
      actions = [
        <Icon type="setting" />,
        <Icon type="edit" />,
        <Icon type="ellipsis" />
      ];
      break;
    default:
      actions = [];

  }


  return (
    <Card
      style={style}
      cover={cover}
      actions={actions}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  )
}

export default RecipeCard3
