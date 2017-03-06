import React from 'react';
import {
	IndexRoute,
	Router,
	Route,
	browserHistory
} from 'react-router';

import { Container } from './Container';
import { NoteSelectionComponent } from './note/Selection';
import { ScaleSelectionContainer } from '../containers/scale/Selection';
import { ScaleModesContainer } from '../containers/scale/Modes';

const App = () => (
	<Router history={browserHistory}>
		<Route path="/" component={Container}>
			<IndexRoute component={NoteSelectionComponent}/>
			<Route path="/:noteName/:noteAlt" component={ScaleSelectionContainer}/>
			<Route path="/:noteName/:noteAlt/:scaleName" component={ScaleModesContainer}/>
		</Route>
	</Router>
);

export default App;
