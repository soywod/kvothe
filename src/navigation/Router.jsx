// @flow

import React from 'react';
import {browserHistory, Router as ReactRouter} from 'react-router';

import routes from './routes'
import sendLocationToGoogle from '../analytics/google';

class Router extends React.Component {
  render() {
    return (
      <ReactRouter
        history={browserHistory}
        routes={routes}
        onUpdate={sendLocationToGoogle}
      />
    );
  }
}

export default Router;

