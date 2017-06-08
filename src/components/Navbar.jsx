// @flow

import React from 'react';
import {Link} from 'react-router';
import {
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

type State = {
  isNavOpen: boolean;
  isDropDownOpen: boolean;
};

class NavbarComponent extends React.Component {
  state: State;

  constructor(props: any) {
    super(props);

    this.state = {
      isNavOpen: false,
      isDropDownOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleNav = () => {
    this.setState(oldState => ({
      isNavOpen: ! oldState.isNavOpen
    }));
  }

  toggleDropDown = () => {
    this.setState(oldState => ({
      isDropDownOpen: ! oldState.isDropDownOpen
    }));
  }

  resetModeBuilder() {
    this.props.resetNote();
    this.props.resetScale();
  }

  render() {
    return (
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggleNav}/>

        <NavbarBrand tag={Link} to="/">
          Kvothe
        </NavbarBrand>

        <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret nav={true}>
                  Tools
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/harmonizer">
                    Harmonizer
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
      </Navbar>
    );
  }
}

export default NavbarComponent;

