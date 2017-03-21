import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Harmonizer from '../components/harmonizer';
import NoteSelection from '../components/note-selection';
import ScaleSelection from '../components/scale-selection';
import HarmonizerResult from '../components/harmonizer/ResultList';
import updateLocation from '../analytics';

const AppRouter = () => (
  <Router history={browserHistory} onUpdate={updateLocation}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/harmonizer" component={Harmonizer}>
        <IndexRoute component={NoteSelection}/>
        <Route path="/harmonizer/:noteName/:noteAlt" component={ScaleSelection}/>
        <Route path="/harmonizer/:noteName/:noteAlt/:formula" component={HarmonizerResult}/>
      </Route>
    </Route>
  </Router>
);

export default AppRouter;
