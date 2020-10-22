const BrowserPage = require("../global/BrowserPage");
const waitAndClick = require("../utils/waitAndClick");
const selectors = require("../utils/selectors");
const { botName, stopotsGameUrl } = require("../global/configs");

module.exports = async function () {
  const page = await BrowserPage.getInstance();
  await page.goto(`${stopotsGameUrl}/pt`);

  await waitAndClick(selectors.landingPage.joinAnonymousButton);

  const nameInput = await page.waitForSelector(selectors.homePage.nameInput);
  for (let index = 0; index < 15; index++) {
    await nameInput.press("Backspace");
  }
  await nameInput.type(botName, { delay: 200 });

  await waitAndClick(selectors.homePage.createRoomButton);
  await waitAndClick(selectors.createRoomPage.createRoomButton);
  await waitAndClick(selectors.components.popout.closeButton);
};
