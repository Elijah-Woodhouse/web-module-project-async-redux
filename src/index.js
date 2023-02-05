import React from 'react';
import ReactDOM from 'react-dom';
import catFactReducer from './reducer/combined';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension'
import { devToolsEnhancer } from 'redux-devtools-extension';



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


