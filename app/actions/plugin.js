// @flow
export const ADD_PLUGIN = 'ADD_PLUGIN';
export const EXEC_PLUGIN = 'EXEC_PLUGIN';

export function create() {
  return {
    type: ADD_PLUGIN
  };
}

export function exec() {
  return {
    type: EXEC_PLUGIN
  };
}
