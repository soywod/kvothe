// @flow

import ReactGA from 'react-ga';

const sendLocationToGoogle = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

export default sendLocationToGoogle;

