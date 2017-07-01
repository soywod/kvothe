// @flow

import React from 'react';
import {browserHistory, IndexRoute, Route} from 'react-router';

import AppContainer from '../container/App';
import Home from '../home/Home';
import ScaleHarmonizerContainer from '../container/ScaleHarmonizer';
import NoteSelection from '../note/components/NoteSelection';
import ScaleSelection from '../scale/ScaleSelection';
import ScaleList from '../scale/ScaleList';

class NoteSelectionWrapper extends React.Component {
  render() {
    return (
      <NoteSelection
        previous={() => '/'}
        next={(noteId: ?string) => `/scale-harmonizer${noteId ? `/${noteId}` : ''}`}
      />
    );
  }
}

class ScaleSelectionWrapper extends React.Component {
  render() {
    return (
      <ScaleSelection
        previous={() => `/scale-harmonizer`}
        next={(formula: number) => `/scale-harmonizer/${this.props.params.noteId}/${formula}`}
      />
    );
  }
}

class ScaleListWrapper extends React.Component {
  render() {
    return (
      <ScaleList
        noteId={this.props.params.noteId}
        formula={+this.props.params.formula}
        previous={() => `/scale-harmonizer/${this.props.params.noteId}`}
      />
    );
  }
}

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Home}/>
    <Route path="/scale-harmonizer" component={ScaleHarmonizerContainer}>
      <IndexRoute component={NoteSelectionWrapper}/>
      <Route path="/scale-harmonizer/:noteId" component={ScaleSelectionWrapper}/>
      <Route path="/scale-harmonizer/:noteId/:formula" component={ScaleListWrapper}/>
    </Route>
  </Route>
);

export default routes;
