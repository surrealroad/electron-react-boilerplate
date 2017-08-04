// @flow
export const EXEC_PLUGIN = 'EXEC_PLUGIN';
export const START_RUNNING = 'START_RUNNING';
export const STOP_RUNNING = 'STOP_RUNNING';
export const SELECT_PLUGIN = 'SELECT_PLUGIN';

export function exec() {
  return {
    type: EXEC_PLUGIN
  };
}

export function selectPlugin(id: number) {
  return {
    type: SELECT_PLUGIN,
    payload: id
  };
}
