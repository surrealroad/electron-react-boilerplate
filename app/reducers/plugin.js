// @flow
import { ADD_PLUGIN, EXEC_PLUGIN } from '../actions/plugin';

type actionType = {
  type: string
};

export type pluginType = {
  "path": string,
  "isRunning": boolean,
  "name": string,
  "description": string,
  "chooseFolder": boolean,
  "chooseFile": boolean,
  "saveFile": boolean,
  "quitAfter": boolean,
  "notifyAfter": boolean,
  "visible": boolean,
  "authenticateUser": boolean,
  "siteURL": string
};

export default function plugin(state: {} = {}, action: actionType) {
  switch (action.type) {
    case ADD_PLUGIN:
      return {};
    case EXEC_PLUGIN:
      return state;
    default:
      return state;
  }
}
