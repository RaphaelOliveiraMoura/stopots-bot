import BrowserPage from '../global/BrowserPage';
import selectors from '../utils/selectors';
import words from '../utils/words';

export default async function fillGameInputs() {
  const page = await BrowserPage.getInstance();

  await page.waitForSelector(selectors.gamePage.isAbleToFillAnswers, {
    timeout: 500000,
  });

  await page.evaluate((topicContentTable) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    ).set;

    const letter = document
      .getElementById('letter')
      .lastChild.textContent.toLowerCase();

    const labels = [...document.querySelectorAll('.content label')];

    const inputsMapping = labels.map((label) => {
      const topic = label.firstChild.innerText.toLowerCase();
      const input = label.lastChild;

      return { topic, input };
    });

    function fillInput({ topic, input }) {
      const setDefaultValue =
        !topicContentTable[topic] ||
        !topicContentTable[topic][letter] ||
        topicContentTable[topic][letter] === '-';

      const defaultValue = `${letter}${letter}`;

      const value = setDefaultValue
        ? defaultValue
        : topicContentTable[topic][letter];

      nativeInputValueSetter.call(input, value);

      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);
    }

    inputsMapping.forEach(fillInput);
  }, words);
}
