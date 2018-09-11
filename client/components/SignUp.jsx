import { connect } from 'react-redux';
import React, { Component } from 'react';
import { toggleModal } from './Redux/actions/index';
import { Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  FormGroup,
  Label,
  Form,
  Input 
} from 'reactstrap';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (modal) => dispatch(toggleModal(modal))
  };
};

class SignUp extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Create an Account</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='firstName'>First Name</Label>
                <Input type='text' name='first' className='firstName' onChange={'TODO'} />
              </FormGroup>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input type='text' name='username' className='username' onChange={'TODO'} />
              </FormGroup>
              <FormGroup>
                <Label for='email'>E-Mail</Label>
                <Input type='email' name='email' className='email' onChange={'TODO'} />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' className='password' onChange={'TODO'} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => { 'TODO' }}>Register</Button>
            <Button color='secondary' onClick={() => this.props.toggleModal('signUpModal')}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

const ConnectedSignUp = connect(null, mapDispatchToProps)(SignUp);

export default ConnectedSignUp;