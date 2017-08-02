// @flow
import * as child from 'child_process';
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

export default function plugin(state = { isRunning: false }, action: actionType) {
  switch (action.type) {
    case ADD_PLUGIN:
      return {};
    case EXEC_PLUGIN:
    // Create a child process
      // tail = child.spawn('tail', ['/var/log/system.log']);
      // tail.stdout.on('data', data => {
      //   console.log(data.toString());
      // });
      return { ...state, isRunning: true };
    default:
      return state;
  }
}
