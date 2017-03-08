import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
	IndexRoute,
	Router,
	Route,
	browserHistory
} from 'react-router';
import 'bootstrap';

import AppComponent  from './components/App';
import HomeComponent from './components/Home';
import NoteSelectionComponent from './components/note/Selection';
import reducers from './reducers';
import ScaleSelectionContainer from './containers/scale/Selection';
import ScaleModesContainer from './containers/scale/Modes';
import * as Alt from './models/Alt.const';

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
				<Route path="/builder" component={NoteSelectionComponent}/>
				<Route path="/builder/:noteAlt/:noteName" component={ScaleSelectionContainer}/>
				<Route path="/builder/:noteAlt/:noteName/:scaleName" component={ScaleModesContainer}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
