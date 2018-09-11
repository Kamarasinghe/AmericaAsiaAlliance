import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.js';
import store from './components/Redux/store/index';

ReactDOM.render(<Root store={store} />, document.getElementById('app'));