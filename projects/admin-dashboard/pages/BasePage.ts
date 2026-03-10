import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  abstract readonly pageUrl: string | RegExp;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
    // Extra wait for slow OrangeHRM server
    await this.page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {
      // Ignore networkidle timeout - page may still be usable
    });
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

  async waitForElement(locator: Locator, timeout = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
  }
}
