import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class OpenAccountPage extends BasePage {
  readonly pageUrl = /openaccount/;
  readonly accountTypeSelect: Locator;
  readonly fromAccountSelect: Locator;
  readonly openAccountButton: Locator;
  readonly successMessage: Locator;
  readonly newAccountId: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.accountTypeSelect = page.locator('#type');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.openAccountButton = page.locator('input[value="Open New Account"]');
    this.successMessage = page.locator('#openAccountResult h1');
    this.newAccountId = page.locator('#newAccountId');
    this.errorMessage = page.locator('.error');
  }

  async selectAccountType(type: 'CHECKING' | 'SAVINGS') {
    await this.accountTypeSelect.selectOption(type);
  }

  async selectFromAccount(accountId: string) {
    await this.fromAccountSelect.selectOption(accountId);
  }

  async clickOpenAccount() {
    await this.openAccountButton.click();
  }

  async openNewAccount(type: 'CHECKING' | 'SAVINGS', fromAccount: string) {
    await this.selectAccountType(type);
    await this.selectFromAccount(fromAccount);
    await this.clickOpenAccount();
  }

  async isAccountCreated(): Promise<boolean> {
    const message = await this.successMessage.textContent();
    return message?.includes('Account Opened') || false;
  }

  async getNewAccountId(): Promise<string | null> {
    return this.newAccountId.textContent();
  }

  async clickNewAccountLink() {
    await this.newAccountId.click();
  }
}
