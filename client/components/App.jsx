import { connect } from 'react-redux';
import React, { Component } from 'react';
import ConnectedSignIn from './SignIn.jsx';
import ConnectedSignUp from './SignUp.jsx';


const mapStateToProps = (state) => {
  return {
    signInModal: state.signInModal,
    signUpModal: state.signUpModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (modal) => dispatch(toggleModal(modal))
  };
};

class App extends Component {
  render() {
    return (
      <div>
        {this.props.signInModal ? <ConnectedSignIn /> : <div />}
        {this.props.signUpModal ? <ConnectedSignUp /> : <div />}
      </div>
    );
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

