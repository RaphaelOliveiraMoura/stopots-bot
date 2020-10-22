const BrowserPage = require("../global/BrowserPage");
const waitAndClick = require("../utils/waitAndClick");

const stopotsUrl = "https://stopots.com";

module.exports = async function () {
  const page = await BrowserPage.getInstance();
  await page.goto(`${stopotsUrl}/pt`);

  await waitAndClick("form button");

  await page.waitFor(1000);

  const nameInput = await page.waitForSelector("#screenHome input");
  for (let index = 0; index < 15; index++) {
    await nameInput.press("Backspace");
  }
  await nameInput.type("Botizin =)", { delay: 200 });

  await waitAndClick("#screenHome .actions .icon-gear");
  await waitAndClick("#screenCreate .actions button");
  await waitAndClick("#popup button.close");
};
