import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly pageUrl = /.*saucedemo.com\/?$/;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorCloseButton: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.locator('.error-button');
    this.logo = page.locator('.login_logo');
  }

  async goto() {
    await this.page.goto('/');
    await this.waitForPageLoad();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAndVerify(username: string, password: string) {
    await this.login(username, password);
    await expect(this.page).toHaveURL(/inventory/);
  }

  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return this.errorMessage.textContent();
  }

  async closeError() {
    await this.errorCloseButton.click();
  }

  async isErrorVisible(): Promise<boolean> {
    return this.isElementVisible(this.errorMessage);
  }

  async clearInputs() {
    await this.usernameInput.clear();
    await this.passwordInput.clear();
  }
}
