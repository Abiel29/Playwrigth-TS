import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
  readonly pageUrl = /purchase/;
  readonly pageTitle: Locator;
  readonly nameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly cardTypeSelect: Locator;
  readonly creditCardInput: Locator;
  readonly creditCardMonth: Locator;
  readonly creditCardYear: Locator;
  readonly nameOnCardInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly purchaseButton: Locator;
  readonly totalPrice: Locator;
  readonly flightInfo: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h2');
    this.nameInput = page.locator('#inputName');
    this.addressInput = page.locator('#address');
    this.cityInput = page.locator('#city');
    this.stateInput = page.locator('#state');
    this.zipCodeInput = page.locator('#zipCode');
    this.cardTypeSelect = page.locator('#cardType');
    this.creditCardInput = page.locator('#creditCardNumber');
    this.creditCardMonth = page.locator('#creditCardMonth');
    this.creditCardYear = page.locator('#creditCardYear');
    this.nameOnCardInput = page.locator('#nameOnCard');
    this.rememberMeCheckbox = page.locator('#rememberMe');
    this.purchaseButton = page.locator('input[type="submit"]');
    this.totalPrice = page.locator('p:has-text("Total Cost")');
    this.flightInfo = page.locator('.container p');
  }

  async fillPassengerDetails(details: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  }) {
    await this.nameInput.fill(details.name);
    await this.addressInput.fill(details.address);
    await this.cityInput.fill(details.city);
    await this.stateInput.fill(details.state);
    await this.zipCodeInput.fill(details.zipCode);
  }

  async fillPaymentDetails(details: {
    cardType: string;
    cardNumber: string;
    month: string;
    year: string;
    nameOnCard: string;
  }) {
    await this.cardTypeSelect.selectOption(details.cardType);
    await this.creditCardInput.fill(details.cardNumber);
    await this.creditCardMonth.fill(details.month);
    await this.creditCardYear.fill(details.year);
    await this.nameOnCardInput.fill(details.nameOnCard);
  }

  async checkRememberMe() {
    await this.rememberMeCheckbox.check();
  }

  async clickPurchase() {
    await this.purchaseButton.click();
  }

  async getTotalPrice(): Promise<number> {
    const text = await this.totalPrice.textContent();
    return parseFloat(text?.replace(/[^0-9.]/g, '') || '0');
  }

  async completePurchase(passenger: {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  }, payment: {
    cardType: string;
    cardNumber: string;
    month: string;
    year: string;
    nameOnCard: string;
  }) {
    await this.fillPassengerDetails(passenger);
    await this.fillPaymentDetails(payment);
    await this.clickPurchase();
  }
}
