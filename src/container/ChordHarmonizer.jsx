// @flow

import React from 'react'

function ChordHarmonizerContainer(props: any) {
  return (
    <div>
      <h1>
        <i className="fa fa-soundcloud icon-left text-default" />
        Chord harmonizer
        </h1>

      {props.children}
    </div>
  )
}

export default ChordHarmonizerContainer
