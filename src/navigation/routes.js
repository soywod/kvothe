// @flow

import React from 'react';
import {browserHistory, IndexRoute, Route} from 'react-router';

import Container from '../container/App';
import Home from '../home/Home';
import Harmonizer from '../container/Harmonizer';
import NoteSelection from '../note/NoteSelection';
import ScaleSelection from '../scale/ScaleSelection';
import HarmonizerResult from '../scale/ModeList';

const routes = (
  <Route path="/" component={Container}>
    <IndexRoute component={Home}/>
    <Route path="/harmonizer" component={Harmonizer}>
      <IndexRoute component={NoteSelection}/>
      <Route path="/harmonizer/:noteId" component={ScaleSelection}/>
      <Route path="/harmonizer/:noteId/:formula" component={HarmonizerResult}/>
    </Route>
  </Route>
);

export default routes;

