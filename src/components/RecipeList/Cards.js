<Icon type="picture" />

import { Card } from 'antd';

ReactDOM.render(
  <Card
    title="Card title"
    extra={<a href="#">More</a>}
    style={{ width: 300 }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>,
  mountNode
);


import { Card } from 'antd';

ReactDOM.render(
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>,
  mountNode
);

import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

ReactDOM.render(
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
  </Card>,
  mountNode
);

https://codesandbox.io/s/vvvpj6y603
