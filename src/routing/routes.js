import React from 'react';
import { browserHistory, IndexRoute, Route } from 'react-router';

import Root from '../components/Root';
import Home from '../components/Home';
import Harmonizer from '../components/harmonizer';
import NoteSelection from '../components/note-selection';
import ScaleSelection from '../components/scale-selection';
import HarmonizerResult from '../components/harmonizer/ModeList';

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Home}/>
    <Route path="/harmonizer" component={Harmonizer}>
      <IndexRoute component={NoteSelection}/>
      <Route path="/harmonizer/:noteName/:noteAlt" component={ScaleSelection}/>
      <Route path="/harmonizer/:noteName/:noteAlt/:formula" component={HarmonizerResult}/>
    </Route>
  </Route>
);

export default routes;
