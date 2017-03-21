import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'bootstrap';
import 'font-awesome';

import Router from './router';
import './app.css';

ReactGA.initialize('UA-83352674-3');

ReactDOM.render(
  <Router/>,
  document.getElementById('kvothe')
);
