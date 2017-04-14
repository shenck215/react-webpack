import React from 'react';
import ReactDOM from 'react-dom';
//import enUs from 'antd/lib/locale-provider/en_US';
//import { LocaleProvider } from 'antd';
import { 
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import IndexApp from '../page/page';
import DatePickerApp from '../DatePicker/DatePicker';
import '../../css/app/app';

/* eslint-disable */


const App  = () => (
  <Router basename="/antd">
    <div>
      <ul className="nav">
        <li><NavLink exact to="/" activeClassName="selected">Index</NavLink></li>
        <li><NavLink to="/DatePicker" activeClassName="selected">DatePicker</NavLink></li>
      </ul>

      <Route exact path="/" component={IndexApp}/>
      <Route path="/DatePicker" component={DatePickerApp}/>
    </div>
  </Router>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
