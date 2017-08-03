// @flow
export const START_RUNNING = 'START_RUNNING';
export const STOP_RUNNING = 'STOP_RUNNING';

type actionType = {
  type: string
};

export default function currentPlugin(state: {} = { isRunning: false }, action: actionType) {
  switch (action.type) {
    case START_RUNNING:
      return { ...state, isRunning: true };
    case STOP_RUNNING:
      return { ...state, isRunning: false };
    default:
      return state;
  }
}
