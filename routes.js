import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/home';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={App}/>
			  <Route path='/home' component={Home}/>
			</Switch>
		</BrowserRouter>
	)
}
