// @flow

import React from 'react'
import {browserHistory, Router as ReactRouter} from 'react-router'

import routes from './routes'
import sendLocationToGoogle from '../analytics/google'

function Router() {
  return (
    <ReactRouter
      history={browserHistory}
      routes={routes}
      onUpdate={sendLocationToGoogle}
    />
  )
}

export default Router
