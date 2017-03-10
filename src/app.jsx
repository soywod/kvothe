import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import 'bootstrap';
import 'fontAwesome';

import App  from './components/App';
import Home from './containers/Home';
import ModeBuilder from './containers/mode-builder';
import reducers from './reducers';
import * as Alt from './models/Alt.const';
import './app.css';

const initialState = {
  note: {
    alt: Alt.NATURAL
  }
};

const store = createStore(reducers, initialState);

ReactGA.initialize('UA-83352674-3');

const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Provider store={store}>
		<Router history={browserHistory} onUpdate={logPageView}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="/mode-builder" component={ModeBuilder}/>
			</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
