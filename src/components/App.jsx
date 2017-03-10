import React from 'react';
import { Container } from 'reactstrap';

import Navigation from './navigation/Navigation';

const AppComponent = props => (
  <div>
		<Navigation />

		<Container>
	    {props.children}
		</Container>
	</div>
);

export default AppComponent;
