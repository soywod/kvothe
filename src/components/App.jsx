import React from 'react';
import {
	IndexRoute,
	Router,
	Route,
	browserHistory
} from 'react-router';

import { Container } from './Container';
import { NoteSelectionComponent } from './note/Selection';
import { ScaleSelectionComponent } from './scale/Selection';
import { ScaleModesContainer } from '../containers/scale/Modes';

const App = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={NoteSelectionComponent}/>
			<Route path="/:note/:alt" component={ScaleSelectionComponent}/>
			<Route path="/:note/:alt/:scale" component={ScaleModesContainer}/>
		</Route>
	</Router>
);

export default App;
