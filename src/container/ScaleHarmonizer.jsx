// @flow

import React from 'react'

function ScaleHarmonizerContainer(props: any) {
  return (
    <div>
      <h1 className="text-warning mt-4 mb-4">
        <i className="fa fa-soundcloud mr-4" />
        Scale harmonizer
      </h1>

      {props.children}
    </div>
  )
}

export default ScaleHarmonizerContainer
