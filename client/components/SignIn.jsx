import { connect } from 'react-redux';
import React, { Component } from 'react';
import { toggleModal } from './Redux/actions/index';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input 
} from 'reactstrap';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (modal) => dispatch(toggleModal(modal))
  };
};

class SignIn extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Sign Into Account</ModalHeader>
          <ModalBody>
            <InputGroup size='lg'>
              <InputGroupAddon addonType='prepend' className='username'>Username</InputGroupAddon>
              <Input name='username' onChange={'TODO'} />
            </InputGroup>
            <InputGroup size='lg'>
              <InputGroupAddon addonType='prepend' className='password'>Password</InputGroupAddon>
              <Input type='password' name='password' onChange={'TODO'} />
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' className='signin' onClick={() => { 'TODO' }}>Sign In</Button>
            <Button color='secondary' onClick={() => this.props.toggleModal('signInModal')}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

const ConnectedSignIn = connect(null, mapDispatchToProps)(SignIn);

export default ConnectedSignIn;