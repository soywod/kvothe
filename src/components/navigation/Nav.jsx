import React from 'react';
import { Link } from 'react-router';

export const Nav = props => (
	<nav className="navbar navbar-toggleable-xl navbar-light bg-faded" style={styles.nav}>
		<Link className="navbar-brand" to="/">
			Kvothe
			{' '}
			<sub className="badge badge-pill badge-warning" style={styles.version}>ALPHA</sub>
		</Link>
	
		<div className="navbar-collapse collapse">
			<div className="mr-auto"></div>
			<div className="navbar-nav">
				<Link className="nav-item nav-link" to="/builder">Modes builder</Link>
			</div>
		</div>
	</nav>
);

const styles = {
	nav: {
		marginBottom: 15
	},
	version: {
		fontStyle: 'italic',
		fontSize: 8
	}
};
