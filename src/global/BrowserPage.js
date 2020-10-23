import 'puppeteer';

const BrowserPage = {
  /**
   * @return {Promise<import("puppeteer").Page>}
   */
  getInstance: async () => {
    const browser = await puppeteer.launch({ headless: false });
    return await browser.newPage();
  }
}

export default BrowserPage;
