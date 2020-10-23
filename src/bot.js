/* eslint-disable no-console */

import createNewRoom from './actions/createNewRoom';
import startGame from './actions/startGame';
import fillGameInputs from './actions/fillGameInputs';
import finishGame from './actions/finishGame';

exports.run = async function run() {
  console.log('Creating room...');
  await createNewRoom();

  console.log('Starting game...');
  await startGame();

  console.log('Filling game fields...');
  await fillGameInputs();

  console.log('Finishing game...');
  await finishGame();
};
