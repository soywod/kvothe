import React from 'react';

import { Nav } from './navigation/Nav';

const AppComponent = props => (
	<div>
		<Nav />
		
		<div className="container">
	    {props.children}
		</div>
	</div>
);

export default AppComponent;
