
import {
  Form, Row, Col, Input, Button, Icon,
} from 'antd';



import AdvancedSearchForm from '../components/AdvancedSearchForm/AdvancedSearchForm'

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

const TheView = () => (

  <div>
    <WrappedAdvancedSearchForm />
    <div className="search-result-list">Search Result List</div>
  </div>

)

export default TheView
