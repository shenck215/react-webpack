import React from 'react';
import ReactDOM from 'react-dom';
//import enUs from 'antd/lib/locale-provider/en_US';
//import { LocaleProvider } from 'antd';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
} from 'react-router-dom';
import IndexApp from '../page/page';
import StepsApp from '../Steps/Steps';
import DatePickerApp from '../DatePicker/myApp';
import AlertApp from '../Alert/alert';
import AutoComplete from '../AutoComplete/myApp';
import Badge from '../Badge/badge';
import LoginApp from '../Form/login';
import RegisterApp from '../Form/register';
import CustomApp from '../Form/custom';
import Table from '../Table/table';
import NotFoundPageApp from '../404/404';
import '../background/background';
import appStyle from '../../css/app/app';

/* eslint-disable */


const App = () => (
	<Router basename="/antd" >
		<div>
			<ul className={appStyle.nav}>
				<li><NavLink exact to="/" activeClassName={appStyle.selected}>Index</NavLink></li>
				<li><NavLink to="/Steps" activeClassName={appStyle.selected}>Step</NavLink></li>
				<li><NavLink to="/DatePicker/3" activeClassName={appStyle.selected}>DatePicker</NavLink></li>
				<li><NavLink to="/Alert" activeClassName={appStyle.selected}>Alert</NavLink></li>
				<li><NavLink to="/AutoComplete" activeClassName={appStyle.selected}>AutoComplete</NavLink></li>
				<li><NavLink to="/Badge" activeClassName={appStyle.selected}>Badge</NavLink></li>
				<li><NavLink to="/LoginApp" activeClassName={appStyle.selected}>LoginApp</NavLink></li>
				<li><NavLink to="/Table" activeClassName={appStyle.selected}>Table</NavLink></li>
			</ul>

			<Switch>
				<Route exact path="/" component={IndexApp} />
				<Route path="/Steps" component={StepsApp} />
				<Route path="/DatePicker" component={DatePickerApp} />
				<Route path="/Alert" component={AlertApp} />
				<Route exact path="/AutoComplete" component={AutoComplete} />
				<Route path="/Badge" component={Badge} />
				<Route path="/LoginApp" component={LoginApp} />
				<Route path="/RegisterApp" component={RegisterApp} />
				<Route path="/CustomApp" component={CustomApp} />
				<Route path="/Table" component={Table} />
				<Route component={NotFoundPageApp} />
			</Switch>

		</div>
	</Router>
)

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
