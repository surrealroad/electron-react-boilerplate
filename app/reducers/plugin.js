// @flow

type actionType = {
  type: string
};

export type pluginType = {
  "id": number,
  "path": string,
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

    default:
      return state;
  }
}
