import React from 'react';
import { Link } from 'react-router';

const HomeComponent = () => (
  <div className="jumbotron-fluid">
    <h1 className="display-4">
	    <i className="fa fa-magic"/> The composer assistant
    </h1>
		
    <p className="lead">
	    Kvothe (pronounce « quote ») is a web app that tries to help composers.
      It provides you only one tool for now : a mode builder.
      Many more tools will soon be available :)
    </p>
		
		<p className="lead">
	    The project is open source, feel free to contribute either by
      {' '}
      <a href="https://github.com/soywod/kvothe" target="_blank">GitHub</a> or by
      {' '}
      <a href="mailto:clement.douin@gmail.com">contacting me</a>.
	    If you find some bug, report <a href="https://github.com/soywod/kvothe/issues" target="_blank">here</a>.
    </p>
		
    <hr className="my-4"/>
		
		<h5>News</h5>

    <ul>
      <li>
        <em>07/03/17</em> - Added the mode builder tool.
        {' '}
        <Link className="btn btn-primary btn-sm" to="/mode-builder">Start the tool</Link>
      </li>
    </ul>

		<hr className="my-4"/>
		
		<h5>Coming soon</h5>

    <ul>
      <li><em>03/17</em> - New tool: a harmonizer (build all matching chords for a specific scale)</li>
      <li><em>04/17</em> - Update Modes builder: possibility to create a custom scale</li>
      <li><em>05/17</em> - Integrate a scale / chord player (piano or guitar song)</li>
    </ul>
	</div>
);

const styles = {
  copyright: {
    fontSize: 10
  }
};

export default HomeComponent;
