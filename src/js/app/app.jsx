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
import StepsApp from '../Steps/Steps';
import DatePickerApp from '../DatePicker/myApp';
import AlertApp from '../Alert/alert';
import AutoComplete from '../AutoComplete/myApp';
import Badge from '../Badge/badge';
import LoginApp from '../Form/login';
import RegisterApp from '../Form/register';
import CustomApp from '../Form/custom';
import '../../css/app/app';

/* eslint-disable */


const App  = () => (
  <Router basename="/antd" >
    <div>
      <ul className="nav">
        <li><NavLink exact to="/" activeClassName="selected">Index</NavLink></li>
        <li><NavLink to="/Steps" activeClassName="selected">Step</NavLink></li>
        <li><NavLink to="/DatePicker/3" activeClassName="selected">DatePicker</NavLink></li>
        <li><NavLink to="/Alert" activeClassName="selected">Alert</NavLink></li>
        <li><NavLink to="/AutoComplete" activeClassName="selected">AutoComplete</NavLink></li>
        <li><NavLink to="/Badge" activeClassName="selected">Badge</NavLink></li>
        <li><NavLink to="/LoginApp" activeClassName="selected">LoginApp</NavLink></li>
      </ul>

      <Route exact path="/" component={IndexApp}/>
      <Route path="/Steps" component={StepsApp}/>
      <Route path="/DatePicker" component={DatePickerApp}/>
      <Route path="/Alert" component={AlertApp}/>
      <Route exact path="/AutoComplete" component={AutoComplete}/>
      <Route path="/Badge" component={Badge}/>
      <Route path="/LoginApp" component={LoginApp}/>
      <Route path="/RegisterApp" component={RegisterApp}/>
      <Route path="/CustomApp" component={CustomApp}/>
    </div>
  </Router>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
