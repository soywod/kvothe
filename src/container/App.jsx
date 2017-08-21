// @flow

import React from 'react'
import {Container} from 'reactstrap'

import Navbar from '../navigation/Navbar'

function AppContainer(props: any) {
  return (
    <div>
      <Navbar />

      <Container>
        {props.children}
      </Container>
    </div>
  )
}

export default AppContainer
