import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Component imports
import App from './App';

// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { newsReducer } from './reducers/newsReducer';

// The redux store
const store = createStore(newsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);