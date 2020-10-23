import BrowserPage from '../global/BrowserPage';
import waitAndClick from '../utils/waitAndClick';
import selectors from '../utils/selectors';
import { botName, stopotsGameUrl } from '../global/configs';

function clearInput(inputElement) {
  return Promise.all(
    Array(15)
      .fill(0)
      .map(() => inputElement.press('Backspace'))
  );
}

export default async function createNewRoom() {
  const page = await BrowserPage.getInstance();
  await page.goto(`${stopotsGameUrl}/pt`);

  await waitAndClick(selectors.landingPage.joinAnonymousButton);

  const nameInput = await page.waitForSelector(selectors.homePage.nameInput);
  await clearInput(nameInput);
  await nameInput.type(botName, { delay: 200 });

  await waitAndClick(selectors.homePage.createRoomButton);
  await waitAndClick(selectors.createRoomPage.createRoomButton);
  await waitAndClick(selectors.components.popout.closeButton);
}
