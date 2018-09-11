import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { toggleModal } from './Redux/actions/index';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (modal) => dispatch(toggleModal(modal))
  };
};

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand>America Asia Alliance</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/' onClick={() => this.props.toggleModal('signUpModal')}>Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/' onClick={() => this.props.toggleModal('signInModal')}>Sign In</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
};

export default connect(null, mapDispatchToProps)(Navigation);