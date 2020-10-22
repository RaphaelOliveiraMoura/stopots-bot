const createNewRoom = require("./actions/createNewRoom");
const startGame = require("./actions/startGame");
const fillGameInputs = require("./actions/fillGameInputs");
const finishGame = require("./actions/finishGame");

exports.run = async function run() {
  console.info("Creating room...");
  await createNewRoom();

  console.info("Starting game...");
  await startGame();

  console.info("Filling game fields...");
  await fillGameInputs();

  console.info("Finishing game...");
  await finishGame();
};
