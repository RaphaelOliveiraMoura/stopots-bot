const BrowserPage = require("../global/BrowserPage");
const selectors = require("../utils/selectors");

module.exports = async function () {
  const page = await BrowserPage.getInstance();

  await page.click(selectors.gamePage.finishGameButton, {
    timeout: 300000,
  });
};
