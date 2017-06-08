// @flow

import React from 'react';
import {Container} from 'reactstrap';

import Navbar from './Navbar';

class RootComponent extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}

export default RootComponent;

