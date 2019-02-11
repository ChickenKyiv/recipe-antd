import React, { Component, Fragment } from 'react';

import { Router } from './Router';




import {
  RecipeCard1,
  RecipeCard2,
  RecipeCard3,
  RecipeCard4,
  RecipeCard5,

  // ClearCardsExample,
  // LoadMoreList,
  //RecipeListExample
} from './components/RecipeList'
















import { getFirstFiveRecipes } from "./selectors/selector";

import { List, Card, Ellipsis, Icon, Button } from 'antd'

import "antd/dist/antd.css";









// const styles = {
//   card: {
//
//   }
// }












        //
        // <List
        //             rowKey="id"
        //
        //             grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
        //             dataSource={['', ...list]}
        //             renderItem={ item =>
        //               item ? (
        //                 <List.Item key={item.id}>
        //                   <Card hoverable className={styles.card} actions={[<a>操作一</a>, <a>操作二</a>]}>
        //                     <Card.Meta
        //                       avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
        //                       title={<a>{item.title}</a>}
        //                       description={
        //                         <Ellipsis className={styles.item} lines={3}>
        //                           {item.description}
        //                         </Ellipsis>
        //                       }
        //                     />
        //                   </Card>
        //                 </List.Item>
        //               ) : (
        //                 <List.Item>
        //                   <Button type="dashed" className={styles.newButton}>
        //                     <Icon type="plus" /> 新建产品
        //                   </Button>
        //                 </List.Item>
        //               )
        //             }
        //   />
        //
        //

const ItemCard = (item) => (
  <List.Item key={item.id}>
    <Card hoverable className="card" actions={[<a>操作一</a>, <a>操作二</a>]}>
      <Card.Meta
        avatar={<img alt="" className="cardAvatar" src={item.avatar} />}
        title={<a>{item.title}</a>}
        description={
          <h2>
            {item.description}
          </h2>
        }
      />
    </Card>
  </List.Item>
)

const ItemCardEmpty = () => (
  <List.Item>
    <Button type="dashed" className="newButton">
      <Icon type="plus" /> Add new
    </Button>
  </List.Item>
)

const renderItem = ( item ) => {
  // can be replaced with <ItemCard />
  return (
    ( item ) ? ItemCard(item) : ItemCardEmpty
  )
}

const gridStyles = {

}


class App extends Component {
  render() {

    const list = getFirstFiveRecipes();

    return (

      <Fragment>

        <Router />

        <List
            rowKey="id"
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={['', ...list]}
            renderItem={ item => renderItem( item ) }
          />



        {/* <ClearCardsExample /> */}

      </Fragment>


    );
  }
}

export default App;
