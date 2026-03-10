import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly pageUrl = /parabank/;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly registerLink: Locator;
  readonly forgotLoginLink: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
    this.errorMessage = page.locator('.error');
    this.registerLink = page.locator('a[href*="register"]');
    this.forgotLoginLink = page.locator('a[href*="lookup"]');
  }

  async goto() {
    await this.page.goto('/parabank/index.htm');
    await this.waitForPageLoad();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAndVerify(username: string, password: string) {
    await this.login(username, password);
    await expect(this.page).toHaveURL(/overview/);
  }

  async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return this.errorMessage.textContent();
    }
    return null;
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async clickForgotLogin() {
    await this.forgotLoginLink.click();
  }
}
