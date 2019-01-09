import React, { Component } from 'react'


// <Icon type="picture" />

// import { Card } from 'antd';
// import { Card, Icon, Avatar } from 'antd';

// import { Card, Col, Row } from 'antd';

import { Card, Icon, Avatar, Col, Row } from 'antd';

const { Meta } = Card;


const TheCard1 = () => {

  return (
    <Card
      title="Card title"
      extra={<a href="#">More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )

}

const TheCard2 = () => {

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

const TheCard3 = () => {
  return (
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
  )
}


// https://codesandbox.io/s/vvvpj6y603

const TheCard4 = () => {
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

export {
  TheCard1, TheCard2, TheCard3. TheCard4
}
