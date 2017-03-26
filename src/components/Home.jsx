import React from 'react';
import { Link } from 'react-router';

const Home = props => (
  <div>
    <h1>
      <i className="fa fa-magic icon-left text-info"/>
      The composer assistant
    </h1>

    <p className="lead">
      Kvothe (pronounce « quote ») is a web app that tries to help composers.
      For now, it provides you only one tool : a <Link to="/harmonizer">Harmonizer</Link>.
      Many more tools will soon be available :)
    </p>

    <p className="lead">
      The project is open source, feel free to contribute either by{' '}
      <a href="https://github.com/soywod/kvothe" target="_blank">GitHub</a> or by{' '}
      <a href="mailto:clement.douin@gmail.com">contacting me</a>.
      If you find some bug, report <a href="https://github.com/soywod/kvothe/issues" target="_blank">here</a>.
    </p>

    <hr className="my-3"/>

    <h5>New content :</h5>

    <ul>
      <li>
        Added the <Link to="/harmonizer">Harmonizer tool</Link>.
      </li>
    </ul>

    <hr className="my-3"/>

    <h5>Coming soon :</h5>

    <ul>
      <li>Possibility to create a custom scale in the Harmonizer</li>
      <li>Integrate a scale / chord player</li>
    </ul>
  </div>
);

export default Home;
