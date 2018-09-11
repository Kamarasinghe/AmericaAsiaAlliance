import ConnectedApp from './App.jsx';
import ConnectedSignIn from './SignIn.jsx';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path='/' component={ConnectedApp} />
            </Switch>
          </div>
          </BrowserRouter>
      </Provider>
    );
  }
};

export default Root;