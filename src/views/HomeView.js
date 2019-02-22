import React, { Component, Fragment } from 'react';


import _        from "lodash";
import "antd/dist/antd.css";
// import "./../styles.css";



// import Header from '../components/Header/Header';
// import Header   from '@groceristar/antd-showcase-components';
import { Main }   from '@groceristar/antd-showcase-components';

import { getFirstFiveRecipes } from "../selectors/selector";

class HomeView extends Component {

    state = {
      // data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method

    };

  render() {

    const list = getFirstFiveRecipes();
    console.log(list);
    // const data = this.state.data;

    return (
      <Fragment>
        <div className="main">

            <Header />
            123
            {/*
            <Main data={getFirstFiveRecipes()} />
            */}

                    <ListWrapper list={list} />
                    <Cards />
        </div>
      </Fragment>

    );
  }
}

export default HomeView;
