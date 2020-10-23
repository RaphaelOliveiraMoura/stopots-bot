import BrowserPage from '../global/BrowserPage';
import selectors from '../utils/selectors';

export default async function finishGame() {
  const page = await BrowserPage.getInstance();

  await page.waitForSelector(selectors.gamePage.isAbleToFinish, {
    timeout: 500000,
  });

  await page.click(selectors.gamePage.finishGameButton);
}
