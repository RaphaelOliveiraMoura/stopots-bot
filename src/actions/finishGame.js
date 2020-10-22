const BrowserPage = require("../global/BrowserPage");
const selectors = require("../utils/selectors");

module.exports = async function () {
  const page = await BrowserPage.getInstance();

  await page.waitForSelector(selectors.gamePage.isAbleToFinish, {
    timeout: 500000,
  });

  await page.click(selectors.gamePage.finishGameButton);
};
