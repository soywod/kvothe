// @flow

import React from 'react'
import {browserHistory, IndexRoute, Route} from 'react-router'

import AppContainer from '../container/App'
import Home from '../home/Home'
import ScaleHarmonizerContainer from '../container/ScaleHarmonizer'
import NoteSelection from '../note/components/NoteSelection'
// import ScaleSelection from '../scale/ScaleSelection'
// import ScaleList from '../scale/ScaleList'
// import ChordHarmonizerContainer from '../container/ChordHarmonizer'
// import ChordList from '../chord/ChordList'

function noteSelectionWrapper(url: string) {
  return (props: any) => {
    const {noteId} = props.params

    return (
      <NoteSelection
        previous={() => '/'}
        next={(param: ?string) => {
          const paramUrl = param ? `/${param}` : ''
          return `${url}${paramUrl}`
        }}
      />
    )
  }
}

// function scaleSelectionWrapper(url: string) {
//   return (props: any) => {
//     const { noteId } = props.params

//     return (
//       <ScaleSelection
//         previous={() => `/scale-harmonizer`}
//         next={(formula: number) => `${url}/${noteId}/${formula}`}
//       />
//     )
//   }
// }

// function scaleListWrapper(url: string) {
//   return (props: any) => {
//     const { noteId, formula } = props.params

//     return (
//       <ScaleList
//         noteId={noteId}
//         formula={+formula}
//         previous={() => `${url}/${noteId}`}
//       />
//     )
//   }
// }

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

const scaleHarmonizer = "/scale-harmonizer"
// const chordHarmonizer = "/chord-harmonizer"

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={Home}/>

    <Route path={scaleHarmonizer} component={ScaleHarmonizerContainer}>
      <IndexRoute component={noteSelectionWrapper(scaleHarmonizer)}/>
      {/* <Route
        path={`${scaleHarmonizer}/:noteId`}
        component={scaleSelectionWrapper(scaleHarmonizer)}/>
      <Route
        path={`${scaleHarmonizer}/:noteId/:formula`}
        component={scaleListWrapper(scaleHarmonizer)}/> */}
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
  </Route>
);

export default routes;
