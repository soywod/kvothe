// @flow

import React from 'react'
import Elm from 'react-elm-components'

// $FlowFixMe: Elm import not recognized
import {Randomizer} from './Randomizer'

console.log('Randomizer = ', JSON.stringify(Randomizer, null, 5));
function RandomizerContainer() {
  return (
    <Elm src={Randomizer} />
  )
}

export default RandomizerContainer

