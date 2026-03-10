import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  abstract readonly pageUrl: string | RegExp;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async isElementVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async waitForElement(locator: Locator, timeout = 10000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async scrollToElement(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }
}
