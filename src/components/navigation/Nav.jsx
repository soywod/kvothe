import React from 'react';
import { Link } from 'react-router';

export const Nav = props => (
  <nav className="navbar navbar-toggleable-xl navbar-light bg-faded" style={styles.nav}>
		<Link className="navbar-brand" to="/">
			Kvothe
      {' '}
      <sub className="badge badge-pill badge-info" style={styles.version}>v0.0.1-alpha</sub>
		</Link>
	
		<div className="navbar-collapse collapse">
			<div className="mr-auto"></div>
			<div className="navbar-nav">
				<Link className="nav-item nav-link" to="/mode-builder">Mode builder</Link>
			</div>
		</div>
	</nav>
);

const styles = {
  nav    : {
    marginBottom: 30
  },
  version: {
    fontStyle: 'italic',
    fontSize : 8
  }
};
