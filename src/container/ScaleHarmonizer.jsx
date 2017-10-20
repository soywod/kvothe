// @flow

import React from 'react'

function ScaleHarmonizerContainer(props: any) {
  return (
    <div>
      <h1 className="text-warning">
        <i className="fa fa-soundcloud mr-4" />
        Scale harmonizer
      </h1>

      {props.children}
    </div>
  )
}

export default ScaleHarmonizerContainer
