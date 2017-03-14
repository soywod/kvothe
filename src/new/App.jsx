import React from 'react';
import { Container } from 'reactstrap';

import Navbar from './menu/Navbar';

const AppComponent = props => (
  <div>
		<Navbar />

		<Container>
	    {props.children}
		</Container>
	</div>
);

export default AppComponent;
