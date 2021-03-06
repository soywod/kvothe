// @flow

import React, {Component} from 'react'
import {Link} from 'react-router'
import {
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'

type State = {
  isNavOpened: boolean;
  isDropdownOpened: boolean;
}

class Navbar extends Component<{}, State> {
  state: State

  constructor() {
    super()

    this.state = {
      isNavOpened: false,
      isDropdownOpened: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleNav = () => {
    this.setState((oldState: State) => ({
      isNavOpened: ! oldState.isNavOpened
    }))
  }

  toggleDropdown = () => {
    this.setState((oldState: State) => ({
      isDropdownOpened: ! oldState.isDropdownOpened
    }))
  }

  render() {
    return (
      <BootstrapNavbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggleNav}/>

        <NavbarBrand tag={Link} to="/">
          Kvothe
        </NavbarBrand>

        <Collapse isOpen={this.state.isNavOpened} navbar>
          <Nav navbar>
            <NavItem>
              <Dropdown isOpen={this.state.isDropdownOpened} toggle={this.toggleDropdown}>
                <DropdownToggle caret nav={true}>
                  Tools
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/scale-harmonizer">
                    Scale harmonizer
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/soywod/kvothe" target="_blank">
                <i className="fa fa-github"/>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BootstrapNavbar>
    )
  }
}

export default Navbar
