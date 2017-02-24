import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { Container } from './Container';
import { ToneSelectionContainer } from '../containers/ToneSelection';
import { HarmonizationContainer } from '../containers/Harmonization';
import { About } from './About';

export const App = () => (
    <Router history={browserHistory}>
        <Route path='/' component={Container}>
            <IndexRoute component={ToneSelectionContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/:note/:alt" component={HarmonizationContainer}/>
        </Route>
    </Router>
);
