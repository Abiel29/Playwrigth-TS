import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConfirmationPage extends BasePage {
  readonly pageUrl = /confirmation/;
  readonly pageTitle: Locator;
  readonly confirmationId: Locator;
  readonly statusMessage: Locator;
  readonly bookingDetails: Locator;
  readonly amountPaid: Locator;
  readonly cardNumber: Locator;
  readonly expirationDate: Locator;
  readonly authCode: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h1');
    this.confirmationId = page.locator('tr:has-text("Id") td:nth-child(2)');
    this.statusMessage = page.locator('tr:has-text("Status") td:nth-child(2)');
    this.bookingDetails = page.locator('table.table');
    this.amountPaid = page.locator('tr:has-text("Amount") td:nth-child(2)');
    this.cardNumber = page.locator('tr:has-text("Card Number") td:nth-child(2)');
    this.expirationDate = page.locator('tr:has-text("Expiration") td:nth-child(2)');
    this.authCode = page.locator('tr:has-text("Auth Code") td:nth-child(2)');
  }

  async isBookingConfirmed(): Promise<boolean> {
    const title = await this.pageTitle.textContent();
    return title?.toLowerCase().includes('thank you') || false;
  }

  async getConfirmationId(): Promise<string | null> {
    return this.confirmationId.textContent();
  }

  async getStatus(): Promise<string | null> {
    return this.statusMessage.textContent();
  }

  async getAmountPaid(): Promise<number> {
    const text = await this.amountPaid.textContent();
    return parseFloat(text?.replace(/[^0-9.]/g, '') || '0');
  }

  async getCardNumber(): Promise<string | null> {
    return this.cardNumber.textContent();
  }

  async getAuthCode(): Promise<string | null> {
    return this.authCode.textContent();
  }

  async verifyConfirmationDetails(): Promise<{
    id: string | null;
    status: string | null;
    amount: number;
    cardNumber: string | null;
    authCode: string | null;
  }> {
    return {
      id: await this.getConfirmationId(),
      status: await this.getStatus(),
      amount: await this.getAmountPaid(),
      cardNumber: await this.getCardNumber(),
      authCode: await this.getAuthCode(),
    };
  }
}
