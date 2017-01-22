/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import rootReducer from './reducers';

// Containers
import Home from './containers/Home';

const store = createStore(rootReducer);

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
);

render(<Routes />, document.getElementById('app'));
