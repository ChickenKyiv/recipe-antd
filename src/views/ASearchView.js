import React, { Component } from 'react';

import {
  Form, Row, Col, Input, Button, Icon,
  Layout,

} from 'antd';

// import { Layout } from 'antd';



import AdvancedSearchForm from '../components/AdvancedSearchForm/AdvancedSearchForm'

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

const {
  Header, Footer, Content,
} = Layout;

const ASearchView = () => (

  <Layout>
  {/*
    <Header>
      header
    </Header>
    */}
      <Layout>
      <Content>

        <WrappedAdvancedSearchForm />
        </Content>
        <Content>
        <div className="search-result-list">Search Result List</div>
        </Content>
      </Layout>


    <Footer>footer</Footer>
  </Layout>


)

export default ASearchView
