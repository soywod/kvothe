import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap';

import App from './components/App';
import reducers from './reducers';
import * as Alt from './models/Alt.const';

const initialState = {
	note: {
		alt: Alt.NATURAL
	}
};

const store = createStore(reducers, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
