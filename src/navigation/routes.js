// @flow

import React from 'react';
import {browserHistory, IndexRoute, Route} from 'react-router';

import Container from '../app/Container';
import Home from '../home/Home';
import Harmonizer from '../components/harmonizer';
import NoteSelection from '../note/Note';
import ScaleSelection from '../components/scale-selection';
import HarmonizerResult from '../components/harmonizer/ModeList';

const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={Home}/>
    <Route path="/harmonizer" component={Harmonizer}>
      <IndexRoute component={NoteSelection}/>
      <Route path="/harmonizer/:noteName/:noteAlt" component={ScaleSelection}/>
      <Route path="/harmonizer/:noteName/:noteAlt/:formula" component={HarmonizerResult}/>
    </Route>
  </Route>
);

export default routes;

