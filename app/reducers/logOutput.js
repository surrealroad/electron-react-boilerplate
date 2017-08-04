// @flow
import { clipboard } from 'electron';
import { APPEND_LOG } from '../actions/logOutput';
import { COPY_TO_CLIPBOARD } from '../actions/clipboard';

type logAction = { type: string }
| { type: string, payload: string }; // TODO WHY IS THIS SO MAD?

export type logOutputType = string;

export default function logOutput(state: logOutputType = '', action: logAction) {
  switch (action.type) {
    case APPEND_LOG:
      return `${state}${action.payload}`;

    case COPY_TO_CLIPBOARD:
      clipboard.writeText(state);
      return state;

    default:
      return state;
  }
}
