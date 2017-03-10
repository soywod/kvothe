import React from 'react';
import { Link } from 'react-router';
import * as Bootstrap from 'reactstrap';

class NavigationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen     : false,
      isDropDownOpen: false
    };

    this.resetModeBuilder = this.resetModeBuilder.bind(this);
    this.toggleDropDown   = this.toggleDropDown.bind(this);
    this.toggleNav        = this.toggleNav.bind(this);
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

  resetModeBuilder() {
    this.props.resetNote();
    this.props.resetScale();
  }

  render() {
    return (
      <Bootstrap.Navbar color="faded" light toggleable>
        <Bootstrap.NavbarToggler right onClick={this.toggleNav}/>

        <Bootstrap.NavbarBrand tag={Link} to="/">
          Kvothe{' '}
          <Bootstrap.Badge tag="sub" color="info" pill style={styles.version}>ALPHA</Bootstrap.Badge>
        </Bootstrap.NavbarBrand>

        <Bootstrap.Collapse isOpen={this.state.isNavOpen} navbar>
          <Bootstrap.Nav navbar>
            <Bootstrap.NavItem>
              <Bootstrap.Dropdown isOpen={this.state.isDropDownOpen} toggle={this.toggleDropDown}>
                <Bootstrap.DropdownToggle caret nav={true}>
                  Tools
                </Bootstrap.DropdownToggle>
                <Bootstrap.DropdownMenu>
                  <Bootstrap.DropdownItem tag={Link} to="/mode-builder" onClick={this.resetModeBuilder}>
                    Mode builder
                  </Bootstrap.DropdownItem>
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

NavigationComponent.propTypes = {
  resetNote : React.PropTypes.func.isRequired,
  resetScale: React.PropTypes.func.isRequired
};

const styles = {
  version: {
    fontStyle: 'italic',
    fontSize : 9
  }
};

export default NavigationComponent;
