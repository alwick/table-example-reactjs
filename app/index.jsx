// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import './css/base';

// Some ES6+ features require the babel polyfill
// More info here: https://babeljs.io/docs/usage/polyfill/
// Uncomment the following line to enable the polyfill
// require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application/Application';
import {Provider} from 'react-redux';
import configureStore from './rootStore';

var store = configureStore();

ReactDOM.render(<Provider store={store}><Application /></Provider>, document.getElementById('app'));
