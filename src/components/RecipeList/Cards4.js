import React, { Component, Fragment } from 'react';

import { Card, Icon, Avatar, Col, Row } from 'antd';

const { Meta } = Card;


// <div style={{ background: '#ECECEC', padding: '30px' }}>
//   <Row gutter={16}>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>Card content</Card>
//     </Col>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>Card content</Card>
//     </Col>
//     <Col span={8}>
//       <Card title="Card title" bordered={false}>Card content</Card>
//     </Col>
//   </Row>
// </div>

const RecipeCard4 = ({ title, children, type = 'all' }) => {
  const styles = {
    width: 300
  };

  // const cover = <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
  //
  // // actions
  // let actions
  // switch (type) {
  //   case 'all':
  //     actions = [
  //       <Icon type="setting" />,
  //       <Icon type="edit" />,
  //       <Icon type="ellipsis" />
  //     ];
  //     break;
  //   default:
  //
  // }


  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>Card content</Card>
        </Col>
      </Row>
    </div>
  )
}

export default RecipeCard4
