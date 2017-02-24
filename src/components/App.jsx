import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { Container } from './Container';
import { ToneSelectionContainer } from '../containers/ToneSelection';
import { About } from './About';

export class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={ToneSelectionContainer}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        );
    }
}
