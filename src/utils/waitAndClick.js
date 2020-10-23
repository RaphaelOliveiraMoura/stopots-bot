import BrowserPage from '../global/BrowserPage';

export default async function waitAndClick(
  selector,
  { delay } = { delay: 2000 }
) {
  const page = await BrowserPage.getInstance();

  const element = await page.waitForSelector(selector);

  await page.waitForTimeout(delay);

  element.click();
}
