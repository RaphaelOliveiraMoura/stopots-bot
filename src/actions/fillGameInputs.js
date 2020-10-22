const BrowserPage = require("../global/BrowserPage");
const topicContentTable = require("../utils/words");

module.exports = async function () {
  const page = await BrowserPage.getInstance();

  await page.evaluate((topicContentTable) => {
    var letter = document
      .getElementById("letter")
      .lastChild.textContent.toLowerCase();

    console.log(`Current letter ${letter}`);

    var labels = [...document.querySelectorAll(".content label")];

    var inputsMapping = labels.map((label) => {
      const topic = label.firstChild.innerText.toLowerCase();
      const input = label.lastChild;

      return { topic, input };
    });

    console.log({ inputsMapping });

    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;

    function fillInput({ topic, input }) {
      const setDefaultValue =
        !topicContentTable[topic] ||
        !topicContentTable[topic][letter] ||
        topicContentTable[topic][letter] === "-";

      const defaultValue = `${letter}${letter}`;

      const value = setDefaultValue
        ? defaultValue
        : topicContentTable[topic][letter];

      nativeInputValueSetter.call(input, value);

      const event = new Event("input", { bubbles: true });
      input.dispatchEvent(event);
    }

    inputsMapping.forEach(fillInput);
  }, topicContentTable);
};
