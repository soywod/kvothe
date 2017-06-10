// @flow

import React from 'react';
import {browserHistory, IndexRoute, Route} from 'react-router';

import Container from '../container/AppContainer';
import Home from '../home/Home';
import Harmonizer from '../container/HarmonizerContainer';
import NoteSelection from '../note/Note';
import ScaleSelection from '../scale/ScaleSelection';
import HarmonizerResult from '../scale/ModeList';

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

