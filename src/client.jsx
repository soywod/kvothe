import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'bootstrap';
import 'font-awesome';

import App from './components/App';
import './styles.css';

ReactGA.initialize('UA-83352674-3');

ReactDOM.render(
  <App/>,
  document.getElementById('kvothe')
);
