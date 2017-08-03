import * as child from 'child_process';
import { APPEND_LOG } from '../actions/logOutput';
import { EXEC_PLUGIN } from '../actions/plugin';

function createStreamOutputMiddleware() {
  return (store) => (next) => (action) => {
    // Stream the output of a process to the logOutput
    // https://gist.github.com/dmichael/9dc767fca93624df58b423d01e485402
    let tail = {};
    switch (action.type) {
      case EXEC_PLUGIN:
        console.log('streamOutput!', store.getState().logOutput);
        tail = child.spawn('tail', ['/var/log/system.log']);
        tail.stdout.on('data', data => {
          console.log(data.toString());
          store.dispatch({ type: APPEND_LOG, payload: data.toString() });
        });
        break;

      default:
        break;
    }

    return next(action);
  };
}
const streamOutput = createStreamOutputMiddleware();

export default streamOutput;
