import React from 'react';
import { browserHistory, Router as ReactRouter } from 'react-router';

import routes from './routes'
import updateLocation from '../analytics';

const Router = () => <ReactRouter history={browserHistory} routes={routes} onUpdate={updateLocation}/>;

export default Router;
