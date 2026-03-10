import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly pageUrl = /checkout/;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly completeHeader: Locator;
  readonly completeText: Locator;
  readonly summarySubtotal: Locator;
  readonly summaryTax: Locator;
  readonly summaryTotal: Locator;
  readonly backHomeButton: Locator;
  readonly paymentInfo: Locator;
  readonly shippingInfo: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.completeHeader = page.locator('.complete-header');
    this.completeText = page.locator('.complete-text');
    this.summarySubtotal = page.locator('.summary_subtotal_label');
    this.summaryTax = page.locator('.summary_tax_label');
    this.summaryTotal = page.locator('.summary_total_label');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
    this.paymentInfo = page.locator('[data-test="payment-info-value"]');
    this.shippingInfo = page.locator('[data-test="shipping-info-value"]');
  }

  async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async continueAndVerify() {
    await this.continue();
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async finish() {
    await this.finishButton.click();
  }

  async finishAndVerify() {
    await this.finish();
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.completeHeader).toBeVisible();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    await this.waitForElement(this.errorMessage);
    return this.errorMessage.textContent();
  }

  async getSubtotal(): Promise<number> {
    const text = await this.summarySubtotal.textContent();
    return parseFloat(text?.replace('Item total: $', '') || '0');
  }

  async getTax(): Promise<number> {
    const text = await this.summaryTax.textContent();
    return parseFloat(text?.replace('Tax: $', '') || '0');
  }

  async getTotal(): Promise<number> {
    const text = await this.summaryTotal.textContent();
    return parseFloat(text?.replace('Total: $', '') || '0');
  }

  async verifyTotalCalculation() {
    const subtotal = await this.getSubtotal();
    const tax = await this.getTax();
    const total = await this.getTotal();
    expect(total).toBeCloseTo(subtotal + tax, 2);
  }

  async backToHome() {
    await this.backHomeButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async completeCheckout(firstName: string, lastName: string, postalCode: string) {
    await this.fillShippingInfo(firstName, lastName, postalCode);
    await this.continueAndVerify();
    await this.finishAndVerify();
  }
}
