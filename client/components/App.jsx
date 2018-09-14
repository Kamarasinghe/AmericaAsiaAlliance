import Map from './Map.jsx';
import Welcome from './Welcome.jsx';
import Contact from './Contact.jsx';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import React, { Component } from 'react';
import ConnectedSignIn from './SignIn.jsx';
import ConnectedSignUp from './SignUp.jsx';
import IntroTeamMission from './IntroTeamMission.jsx';


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
        <Welcome />
        <IntroTeamMission />
        <Row>
          <Col>
            <Contact />
          </Col>
          <Col>
            <Map
              googleMapURL={process.env.GOOGLE_MAP_URL}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </Col>
        </Row>
        {this.props.signInModal ? <ConnectedSignIn /> : <div />}
        {this.props.signUpModal ? <ConnectedSignUp /> : <div />}
      </div>
    );
  }
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;

