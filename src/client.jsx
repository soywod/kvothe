import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'bootstrap';
import 'font-awesome';

import AppComponent from './app/App';
import './styles.css';

ReactGA.initialize('UA-83352674-3');

ReactDOM.render(
  <AppComponent />,
  document.getElementById('kvothe')
);
