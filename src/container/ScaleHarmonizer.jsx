// @flow

import React from 'react'

function ScaleHarmonizerContainer(props: any) {
  return (
    <div>
      <h1>
        <i className="fa fa-soundcloud icon-left text-warning" />
        Scale harmonizer
        </h1>

      {props.children}
    </div>
  )
}

export default ScaleHarmonizerContainer
