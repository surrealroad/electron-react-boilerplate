// @flow
import initialState from '../store/initialState.json';
import { START_RUNNING, STOP_RUNNING, SELECT_PLUGIN, SET_PLUGIN_PARAMS } from '../actions/currentPlugin';

type actionType = { type: string }
 | { type: string, payload: number }
 | { type: string, payload: {} }; // TODO WHY IS THIS SO MAD?

export type currentPluginType = {};

export default function currentPlugin(state: currentPluginType = initialState.currentPlugin,
  action: actionType) {
  switch (action.type) {
    case START_RUNNING:
      return { ...state, isRunning: true };
    case STOP_RUNNING:
      return { ...state, isRunning: false };
    case SELECT_PLUGIN:
      console.log(`Selected plugin ${action.payload}`);
      return { ...state, id: action.payload };
    case SET_PLUGIN_PARAMS:
      return { ...state, params: action.payload };

    default:
      return state;
  }
}
