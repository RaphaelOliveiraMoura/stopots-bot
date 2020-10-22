const BrowserPage = require("./global/BrowserPage");

const createNewRoom = require("./actions/createNewRoom");
const startGame = require("./actions/startGame");
const fillGameInputs = require("./actions/fillGameInputs");
const finishGame = require("./actions/finishGame");

const timing = require("./utils/timing");

exports.run = async function run() {
  const page = await BrowserPage.getInstance();

  console.info("Creating room...");
  await createNewRoom();

  console.info("Starting game...");
  await startGame();

  await page.waitForTimeout(timing.selectingLetterTiming);

  console.info("Filling game fields...");
  await fillGameInputs();

  await page.waitForTimeout(timing.finishGameTiming);

  console.info("Finishing game...");
  await finishGame();
};
