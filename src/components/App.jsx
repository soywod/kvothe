import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { Container } from './Container';
import { NoteSelectionComponent } from './NoteSelection';
import { HarmonizationContainer } from '../containers/Harmonization';
import { ScaleSelectionComponent } from './ScaleSelection';
import { About } from './About';

export const App = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={NoteSelectionComponent}/>
			<Route path="/about" component={About}/>
			<Route path="/:note/:alt" component={ScaleSelectionComponent}/>
			<Route path="/:note/:alt/:scale" component={HarmonizationContainer}/>
		</Route>
	</Router>
);
