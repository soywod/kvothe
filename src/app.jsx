import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import 'bootstrap';
import 'fontAwesome';

import App  from './new/App';
import Home from './new/Home';
import Harmonizer from './new/harmonizer/Harmonizer';
import './app.css';

ReactGA.initialize('UA-83352674-3');

const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/harmonizer" component={Harmonizer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
