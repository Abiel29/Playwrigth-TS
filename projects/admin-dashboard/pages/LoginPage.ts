import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly pageUrl = /orangehrm/;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly forgotPasswordLink: Locator;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content');
    this.forgotPasswordLink = page.locator('.orangehrm-login-forgot-header');
    this.logo = page.locator('.orangehrm-login-branding img');
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
    await this.waitForPageLoad();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginAndVerify(username: string, password: string) {
    await this.login(username, password);
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return this.errorMessage.textContent();
    }
    return null;
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}
