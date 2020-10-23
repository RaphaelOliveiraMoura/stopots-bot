import puppeteer from 'puppeteer';

let pageInstance = null;

class BrowserPage {
  /**
   * @return {Promise<import("puppeteer").Page>}
   */
  static async getInstance() {
    if (!pageInstance) {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      pageInstance = page;
    }

    return pageInstance;
  }
}

module.exports = BrowserPage;
