// @flow
import { APPEND_LOG } from '../actions/logOutput';

type logAction = { type: string }
| { type: string, payload: string }; // TODO WHY IS THIS SO MAD?

export type logOutputType = string;

export default function logOutput(state: logOutputType = '', action: logAction) {
  switch (action.type) {
    case APPEND_LOG:
      return `${state}${action.payload}`;
    default:
      return state;
  }
}
