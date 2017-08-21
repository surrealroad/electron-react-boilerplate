// @flow
import { ADD_PLUGIN, REMOVE_ALL_PLUGINS } from '../actions/allPlugins';
import type { pluginType } from './plugin';
import initialState from '../store/initialState.json';

type actionType = { type: string } | { type: string, payload: {} }; // TODO WHY IS THIS SO MAD?

export type allPluginsType = Array<?pluginType>;

export default function allPlugins(
  state: allPluginsType = initialState.allPlugins,
  action: actionType,
) {
  // const hasScript = state.some(plugin === {});

  switch (action.type) {
    case ADD_PLUGIN:
      // return (hasScript) ?
      //     state :
      return [...state, action.payload];
    case REMOVE_ALL_PLUGINS:
      return [];

    default:
      return state;
  }
}
