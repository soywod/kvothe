// @flow

import React from 'react'
import {browserHistory, IndexRoute, Route} from 'react-router'

import AppContainer from '../container/App'
import Home from '../home/Home'
import ScaleHarmonizerContainer from '../container/ScaleHarmonizer'
import NoteSelection from '../note/components/NoteSelection'
import ScaleSelection from '../scale/ScaleSelection'
import ScaleList from '../scale/ScaleList'

function NoteSelectionWrapper() {
  return (
    <NoteSelection
      previous={() => '/'}
      next={(noteId: ?string) => {
        return `/scale-harmonizer${noteId ? `/${noteId}` : ''}`
      }}
    />
  );
}

function ScaleSelectionWrapper(props: any) {
  const {noteId} = props.params

  return (
    <ScaleSelection
      previous={() => `/scale-harmonizer`}
      next={(formula: number) => {
        return `/scale-harmonizer/${noteId}/${formula}`
      }}
    />
  )
}

function ScaleListWrapper(props: any) {
  const {noteId, formula} = props.params

  return (
    <ScaleList
      noteId={noteId}
      formula={+formula}
      previous={() => `/scale-harmonizer/${noteId}`}
    />
  )
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
