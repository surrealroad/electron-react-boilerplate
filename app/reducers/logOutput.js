// @flow
import { clipboard } from 'electron';
import { APPEND_LOG, SET_LOG } from '../actions/logOutput';
import { COPY_TO_CLIPBOARD } from '../actions/clipboard';
import initialState from '../store/initialState.json';

type logAction = { type: string }
| { type: string, payload: string }; // TODO WHY IS THIS SO MAD?

export type logOutputType = string;

export default function logOutput(state: logOutputType = initialState.logText, action: logAction) {
  switch (action.type) {
    case APPEND_LOG:
      return `${state}${action.payload}`;

    case SET_LOG:
      return `${action.payload}`;

    case COPY_TO_CLIPBOARD:
      clipboard.writeText(state);
      return state;

    default:
      return state;
  }
}
