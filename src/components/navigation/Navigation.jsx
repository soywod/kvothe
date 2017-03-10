import React from 'react';
import { Link } from 'react-router';
import * as Bootstrap from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen     : false,
      isDropDownOpen: false
    };
  }

  toggleNav() {
    this.setState(oldState => ({
      isNavOpen: !oldState.isNavOpen
    }));
  }

  toggleDropDown() {
    this.setState(oldState => ({
      isDropDownOpen: !oldState.isDropDownOpen
    }));
  }

  render() {
    return (
      <Bootstrap.Navbar color="faded" light toggleable>
        <Bootstrap.NavbarToggler right onClick={this.toggleNav.bind(this)}/>

        <Bootstrap.NavbarBrand tag={Link} to="/">
          Kvothe{' '}
          <Bootstrap.Badge tag="sub" color="info" pill style={styles.version}>ALPHA</Bootstrap.Badge>
        </Bootstrap.NavbarBrand>

        <Bootstrap.Collapse isOpen={this.state.isNavOpen} navbar>
          <Bootstrap.Nav navbar>
            <Bootstrap.NavItem>
              <Bootstrap.Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown.bind(this)}>
                <Bootstrap.DropdownToggle caret nav={true}>
                  Tools
                </Bootstrap.DropdownToggle>
                <Bootstrap.DropdownMenu>
                  <Bootstrap.DropdownItem tag={Link} to="/mode-builder" children="Mode builder"/>
                </Bootstrap.DropdownMenu>
              </Bootstrap.Dropdown>
            </Bootstrap.NavItem>
          </Bootstrap.Nav>

          <Bootstrap.Nav className="ml-auto" navbar>
            <Bootstrap.NavItem>
              <Bootstrap.NavLink href="https://github.com/soywod/kvothe" target="_blank">
                <i className="fa fa-github"/>
              </Bootstrap.NavLink>
            </Bootstrap.NavItem>
          </Bootstrap.Nav>
        </Bootstrap.Collapse>
      </Bootstrap.Navbar>
    );
  }
}

const styles = {
  version: {
    fontStyle: 'italic',
    fontSize : 9
  }
};

export default Navigation;
