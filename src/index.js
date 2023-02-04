import React from 'react';
import ReactDOM from 'react-dom';
import catFactReducer from './reducer';
import reducer from './reducer';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
