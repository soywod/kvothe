import React from 'react';
import { Link } from 'react-router';
import * as Bootstrap from 'reactstrap';

const HomeComponent = () => (
  <div>
    <h1>
	    <i className="fa fa-magic"/>{' '}
      The composer assistant
    </h1>

    <p className="lead">
	    Kvothe (pronounce « quote ») is a web app that tries to help composers.
      It provides you only one tool for now : a mode builder.
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
        Added the <Link to="/mode-builder">mode builder tool</Link>.
      </li>
    </ul>

		<hr className="my-3"/>
		
		<h5>Coming soon :</h5>

    <ul>
      <li><strong>New tool</strong>: a harmonizer (build all matching chords for a specific scale)</li>
      <li>Update Modes builder: possibility to create a custom scale</li>
      <li>Integrate a scale / chord player</li>
    </ul>
	</div>
);

const styles = {
  copyright: {
    fontSize: 10
  }
};

export default HomeComponent;
