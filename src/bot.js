const BrowserPage = require("./global/BrowserPage");

const createNewRoom = require("./actions/createNewRoom");
const startGame = require("./actions/startGame");
const fillGameInputs = require("./actions/fillGameInputs");
const finishGame = require("./actions/finishGame");

exports.run = async function run() {
  const page = await BrowserPage.getInstance();

  console.info("Creating room...");
  await createNewRoom();

  console.info("Starting game...");
  await startGame();

  await page.waitFor(8000);

  console.info("Filling game fields...");
  await fillGameInputs();

  await page.waitFor(25000);

  console.info("Finishing game...");
  await finishGame();
};
