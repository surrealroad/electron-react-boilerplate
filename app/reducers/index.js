// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import allPlugins from './allPlugins';
import plugin from './plugin';
import currentPlugin from './currentPlugin';
import logOutput from './logOutput';

const rootReducer = combineReducers({
  router,
  allPlugins,
  plugin,
  currentPlugin,
  logOutput,
});

export default rootReducer;
