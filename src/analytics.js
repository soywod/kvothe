import ReactGA from 'react-ga';

const updateLocation = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export default updateLocation;
