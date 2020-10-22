const BrowserPage = require("../global/BrowserPage");

module.exports = async function () {
  const page = await BrowserPage.getInstance();

  await page.click("#screenGame .content button:not(.disable)", {
    timeout: 300000,
  });
};
