// @flow
import { ADD_PLUGIN, REMOVE_ALL_PLUGINS } from '../actions/allPlugins';
import plugin from './plugin';
import type { pluginType } from './plugin';
import initialPluginState from '../store/initialState.json';

type actionType = {
  type: string
};

export type allPluginsType = Array<?pluginType>;

export default function allPlugins(state: allPluginsType = initialPluginState.allPlugins,
  action: actionType) {
  // const hasScript = state.some(plugin === {});

  switch (action.type) {
    case ADD_PLUGIN:
      // return (hasScript) ?
      //     state :
      return [
        ...state,
        plugin(initialPluginState.allPlugins[0], action),
      ];
    case REMOVE_ALL_PLUGINS:
      return [];
    default:
      return state;
  }
}
