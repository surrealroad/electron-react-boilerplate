import * as child from 'child_process';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, routerActions } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import * as pluginActions from '../actions/plugin';
import * as allPluginsActions from '../actions/allPlugins';
import { APPEND_LOG } from '../actions/logOutput';
import type { allPluginsType } from '../reducers/allPlugins';

const history = createHashHistory();

const streamOutput = (store) => (next) => (action) => {
  // Stream the output of a process to the logOutput
  // https://gist.github.com/dmichael/9dc767fca93624df58b423d01e485402
  let tail = {};
  switch (action.type) {
    case pluginActions.EXEC_PLUGIN:
      console.log('streamOutput!', store.getState().logOutput);
      tail = child.spawn('tail', ['/var/log/system.log']);
      tail.stdout.on('data', data => {
        console.log(data.toString());
        store.dispatch({ type: APPEND_LOG, payload: data.toString() });
      });
      break;

    default:
      break;
  }

  return next(action);
};

const configureStore = (initialState: ?allPluginsType) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];


  // Thunk Middleware
  middleware.push(thunk);

  // my middleware
  middleware.push(streamOutput);

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...allPluginsActions,
    ...pluginActions,
    ...routerActions,
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  console.log(
    'Initial STATE: ', initialState
  );

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
};

export default { configureStore, history };
