const waitAndClick = require("../utils/waitAndClick");

module.exports = async function () {
  await waitAndClick("#screenGame .start button");
};
