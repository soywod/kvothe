// @flow

import React from 'react';
import {browserHistory, IndexRoute, Route} from 'react-router';

import AppContainer from '../container/App';
import Home from '../home/Home';
import HarmonizerContainer from '../container/Harmonizer';
import NoteSelection from '../note/NoteSelection';
import ScaleSelection from '../scale/ScaleSelection';
import ScaleList from '../scale/ScaleList';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Home}/>
    <Route path="/harmonizer" component={HarmonizerContainer}>
      <IndexRoute component={NoteSelection}/>
      <Route path="/harmonizer/:noteId" component={ScaleSelection}/>
      <Route path="/harmonizer/:noteId/:formula" component={ScaleList}/>
    </Route>
  </Route>
);

export default routes;

