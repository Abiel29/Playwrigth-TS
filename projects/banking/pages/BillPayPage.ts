import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BillPayPage extends BasePage {
  readonly pageUrl = /billpay/;
  readonly payeeNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly accountNumberInput: Locator;
  readonly verifyAccountInput: Locator;
  readonly amountInput: Locator;
  readonly fromAccountSelect: Locator;
  readonly sendPaymentButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.payeeNameInput = page.locator('input[name="payee.name"]');
    this.addressInput = page.locator('input[name="payee.address.street"]');
    this.cityInput = page.locator('input[name="payee.address.city"]');
    this.stateInput = page.locator('input[name="payee.address.state"]');
    this.zipCodeInput = page.locator('input[name="payee.address.zipCode"]');
    this.phoneInput = page.locator('input[name="payee.phoneNumber"]');
    this.accountNumberInput = page.locator('input[name="payee.accountNumber"]');
    this.verifyAccountInput = page.locator('input[name="verifyAccount"]');
    this.amountInput = page.locator('input[name="amount"]');
    this.fromAccountSelect = page.locator('select[name="fromAccountId"]');
    this.sendPaymentButton = page.locator('input[value="Send Payment"]');
    this.successMessage = page.locator('#billpayResult h1');
    this.errorMessage = page.locator('.error');
  }

  async fillPayeeInfo(payee: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    accountNumber: string;
  }) {
    await this.payeeNameInput.fill(payee.name);
    await this.addressInput.fill(payee.address);
    await this.cityInput.fill(payee.city);
    await this.stateInput.fill(payee.state);
    await this.zipCodeInput.fill(payee.zipCode);
    await this.phoneInput.fill(payee.phone);
    await this.accountNumberInput.fill(payee.accountNumber);
    await this.verifyAccountInput.fill(payee.accountNumber);
  }

  async setAmount(amount: string) {
    await this.amountInput.fill(amount);
  }

  async selectFromAccount(accountId: string) {
    await this.fromAccountSelect.selectOption(accountId);
  }

  async sendPayment() {
    await this.sendPaymentButton.click();
  }

  async payBill(payee: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    accountNumber: string;
  }, amount: string, fromAccount: string) {
    await this.fillPayeeInfo(payee);
    await this.setAmount(amount);
    await this.selectFromAccount(fromAccount);
    await this.sendPayment();
  }

  async isPaymentSuccessful(): Promise<boolean> {
    const message = await this.successMessage.textContent();
    return message?.includes('Bill Payment Complete') || false;
  }

  async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return this.errorMessage.textContent();
    }
    return null;
  }
}
