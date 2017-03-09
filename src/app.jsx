import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import 'bootstrap';
import 'fontAwesome';

import AppComponent  from './components/App';
import HomeComponent from './components/Home';
import ModeBuilderContainer from './containers/mode-builder';
import reducers from './reducers';
import * as Alt from './models/Alt.const';
import './app.css';

const initialState = {
  note: {
    alt: Alt.NATURAL
  }
};

const store = createStore(reducers, initialState);

ReactDOM.render(
  <Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppComponent}>
				<IndexRoute component={HomeComponent}/>
				<Route path="/mode-builder" component={ModeBuilderContainer}/>
			</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);
