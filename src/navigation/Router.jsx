// @flow

import React from 'react';
import { browserHistory, Router as ReactRouter } from 'react-router';

import routes from './routes'
import updateLocation from '../analytics';

class RouterComponent extends React.Component {
  render() {
    return (
      <ReactRouter history={browserHistory} routes={routes} onUpdate={updateLocation} />
    );
  }
}

export default RouterComponent;

