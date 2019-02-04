import React, { Component, Fragment } from 'react';

import { Router } from './Router';

// import { ClearCardsExample } from './components/RecipeList'
//
// import LoadMoreList      from './components/RecipeList/More'
// import RecipeListExample from './components/RecipeList/RecipeList'
//


import {
  RecipeCard1,
  RecipeCard2,
  RecipeCard3,
  RecipeCard4,
  RecipeCard5,
} from './components/RecipeList'
















import { getFirstFiveRecipes } from "./selectors/selector";
import { List } from 'antd'
import "antd/dist/antd.css";








import styles from './cardsz.less'
import less_to_js from 'less-to-js';


less_to_js(styles, function(err){
  console.log(err ? "failed!" : "Done! created " + styles + ".js");
});


// const styles = {
//   card: {
//
//   }
// }












class App extends Component {
  render() {

    const list = getFirstFiveRecipes();

    return (

      <Fragment>

        <Router />



{/*}
        <List
                    rowKey="id"
                    loading={loading}
                    grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                    dataSource={['', ...list]}
                    renderItem={ item =>
                      item ? (
                        <List.Item key={item.id}>
                          <Card hoverable className={styles.card} actions={[<a>操作一</a>, <a>操作二</a>]}>
                            <Card.Meta
                              avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                              title={<a>{item.title}</a>}
                              description={
                                <Ellipsis className={styles.item} lines={3}>
                                  {item.description}
                                </Ellipsis>
                              }
                            />
                          </Card>
                        </List.Item>
                      ) : (
                        <List.Item>
                          <Button type="dashed" className={styles.newButton}>
                            <Icon type="plus" /> 新建产品
                          </Button>
                        </List.Item>
                      )
                    }




*/}






{/* <ClearCardsExample /> */}

      </Fragment>


    );
  }
}

export default App;
