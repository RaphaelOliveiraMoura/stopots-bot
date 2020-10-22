const waitAndClick = require("../utils/waitAndClick");
const selectors = require("../utils/selectors");

module.exports = async function () {
  await waitAndClick(selectors.gamePage.startGameButton);
};
