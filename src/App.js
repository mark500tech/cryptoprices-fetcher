import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {rootReducer} from "./reducers/rootReducer";

import Main from "./components/Main";

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
