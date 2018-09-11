import ConnectedSignIn from './SignIn.jsx';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const mapStateToProps = (state) => {
  return {
    signInModal: state.signInModal
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
      </div>
    );
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

