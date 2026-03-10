import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransferPage extends BasePage {
  readonly pageUrl = /transfer/;
  readonly amountInput: Locator;
  readonly fromAccountSelect: Locator;
  readonly toAccountSelect: Locator;
  readonly transferButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;
  readonly transferAmount: Locator;
  readonly fromAccountResult: Locator;
  readonly toAccountResult: Locator;

  constructor(page: Page) {
    super(page);
    this.amountInput = page.locator('#amount');
    this.fromAccountSelect = page.locator('#fromAccountId');
    this.toAccountSelect = page.locator('#toAccountId');
    this.transferButton = page.locator('input[value="Transfer"]');
    this.successMessage = page.locator('#showResult h1');
    this.errorMessage = page.locator('.error, #showError');
    this.transferAmount = page.locator('#amountResult');
    this.fromAccountResult = page.locator('#fromAccountIdResult');
    this.toAccountResult = page.locator('#toAccountIdResult');
  }

  async setAmount(amount: string) {
    await this.amountInput.fill(amount);
  }

  async selectFromAccount(accountId: string) {
    await this.fromAccountSelect.selectOption(accountId);
  }

  async selectToAccount(accountId: string) {
    await this.toAccountSelect.selectOption(accountId);
  }

  async clickTransfer() {
    await this.transferButton.click();
  }

  async transfer(amount: string, fromAccount: string, toAccount: string) {
    await this.setAmount(amount);
    await this.selectFromAccount(fromAccount);
    await this.selectToAccount(toAccount);
    await this.clickTransfer();
  }

  async isTransferSuccessful(): Promise<boolean> {
    const message = await this.successMessage.textContent();
    return message?.includes('Transfer Complete') || false;
  }

  async getTransferredAmount(): Promise<string | null> {
    return this.transferAmount.textContent();
  }

  async getFromAccountOptions(): Promise<string[]> {
    return this.fromAccountSelect.locator('option').allTextContents();
  }

  async getToAccountOptions(): Promise<string[]> {
    return this.toAccountSelect.locator('option').allTextContents();
  }

  async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return this.errorMessage.textContent();
    }
    return null;
  }
}
