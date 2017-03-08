import React from 'react';
import { Link } from 'react-router';

const HomeComponent = () => (
	<div className="jumbotron-fluid" style={styles.jumbotron}>
    <h1 className="display-4">
	    The composer assistant <i className="fa fa-magic"/>
    </h1>
		
    <p className="lead">
	    Kvothe (pronounce « quote ») is a web app that tries to help composers
	    . It provides you only one tool for now : a scales & modes builder
	    . A lot of new tools will come soon :)
    </p>
		
		<p className="lead">
	    The project is open source, feel free to contribute either by
			{' '}
			<a href="https://github.com/soywod/kvothe">GitHub</a> or by
			{' '}
			<a href="mailto:clement.douin@gmail.com">contacting me</a>.
	    If you find some bug, report <a href="https://github.com/soywod/kvothe/issues">here</a>.
    </p>
		
    <hr className="my-4"/>
		
		<h5>News</h5>
		
    <p>
	    <em>2017/03/07</em> - Added the modes builder tool. <Link className="btn btn-primary btn-sm" to="/builder">Start the tool</Link>
    </p>
		
		<hr className="my-4"/>
		
		<h5>Coming soon</h5>
		
    <p>
	    - <em>2017/03</em> - New tool: a harmonizer (build all matching chords for a specific scale)
	    - <em>2017/04</em> - Update Modes builder: possibility to create a custom scale
	    - <em>2017</em> - Integrate a scale / chord player (piano / guitar)
    </p>
	</div>
);

const styles = {
	jumbotron: {
		marginTop: 45
	}
};

export default HomeComponent;
