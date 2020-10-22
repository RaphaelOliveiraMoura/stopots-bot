const BrowserPage = require("../global/BrowserPage");

module.exports = async function waitAndClick(
  selector,
  { delay } = { delay: 2000 }
) {
  const page = await BrowserPage.getInstance();

  const element = await page.waitForSelector(selector);

  await page.waitFor(delay);

  element.click();
};
