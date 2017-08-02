// @flow
export const ADD_PLUGIN = 'ADD_PLUGIN';
export const REMOVE_ALL_PLUGINS = 'REMOVE_ALL_PLUGINS';

export function addPlugin() {
  return {
    type: ADD_PLUGIN
  };
}

export function removeAllPlugins() {
  return {
    type: REMOVE_ALL_PLUGINS
  };
}
