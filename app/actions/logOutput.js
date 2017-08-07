// @flow
export const APPEND_LOG = 'APPEND_LOG';
export const SET_LOG = 'SET_LOG';

export function appendLog() {
  return {
    type: APPEND_LOG
  };
}

export function setLog() {
  return {
    type: SET_LOG
  };
}
