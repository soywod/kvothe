// @flow

import React from 'react'
import {browserHistory, IndexRoute, Route} from 'react-router'

import AppContainer from '../container/App'
import Home from '../home/Home'
import ScaleHarmonizerContainer from '../container/ScaleHarmonizer'
import NoteSelection from '../note/components/NoteSelection'
import FormulaSelection from '../formula/components/FormulaSelection'
// import ScaleList from '../scale/components/ScaleList'
// import ChordHarmonizerContainer from '../container/ChordHarmonizer'
// import ChordList from '../chord/ChordList'
import Randomizer from '../randomizer/components/RandomizerContainer'

const path = {
  harmonizer: {
    scale: "/scale-harmonizer",
  },
  randomizer: "/randomizer",
}

// function chordListWrapper(url: string) {
//   return (props: any) => {
//     const { noteId, formula } = props.params

//     return (
//       <ChordList
//         noteId={noteId}
//         formula={+formula}
//         previous={() => `${url}/${noteId}`}
//       />
//     )
//   }
// }

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Home}/>

    <Route path={path.harmonizer.scale} component={ScaleHarmonizerContainer}>
      <IndexRoute component={NoteSelectionWrapper()}/>

      <Route
        path={`${path.harmonizer.scale}/:noteSlug`}
        component={FormulaSelectionWrapper()}/>

      {/* <Route
        path={`${path.harmonizer.scale}/:noteSlug/:formulaSlug`}
        component={ScaleListWrapper()}/> */}
    </Route>

    {/* <Route path={chordHarmonizer} component={ChordHarmonizerContainer}>
      <IndexRoute component={noteSelectionWrapper(chordHarmonizer)}/>
      <Route
        path={`${chordHarmonizer}/:noteId`}
        component={scaleSelectionWrapper(chordHarmonizer)}/>
      <Route
        path={`${chordHarmonizer}/:noteId/:formula`}
        component={chordListWrapper(chordHarmonizer)}/>
    </Route> */}

    <Route path={path.randomizer} component={Randomizer}/>
  </Route>
);

function NoteSelectionWrapper() {
  return () => (
    <NoteSelection
      previous={() => '/'}
      next={(noteSlug: ?string) => {
        const url = noteSlug ? `/${noteSlug}` : ''
        return `${path.harmonizer.scale}${url}`
      }}
    />
  )
}

function FormulaSelectionWrapper() {
  return (props: any) => {
    const {noteSlug} = props.params

    return (
      <FormulaSelection
        previous={() => path.harmonizer.scale}
        next={(formulaSlug: ?string) => {
          const url = formulaSlug ? `/${formulaSlug}` : ''
          return `${path.harmonizer.scale}/${noteSlug}${url}`
        }}
      />
    )
  }
}

// function ScaleListWrapper() {
//   return (props: any) => {
//     const {noteSlug, formulaSlug} = props.params

//     return (
//       <ScaleList
//         noteSlug={noteSlug}
//         formulaSlug={formulaSlug}
//         previous={() => `${path.harmonizer.scale}/${noteSlug}`}
//       />
//     )
//   }
// }

export default routes;
