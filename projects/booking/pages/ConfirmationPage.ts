import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ConfirmationPage extends BasePage {
  readonly pageUrl = /confirmation|success|thank/;
  readonly confirmationMessage: Locator;
  readonly bookingReference: Locator;
  readonly bookingDetails: Locator;
  readonly hotelName: Locator;
  readonly checkInDate: Locator;
  readonly checkOutDate: Locator;
  readonly guestName: Locator;
  readonly totalPaid: Locator;
  readonly printButton: Locator;
  readonly emailConfirmation: Locator;

  constructor(page: Page) {
    super(page);
    this.confirmationMessage = page.locator('.confirmation-message, .success-message, h1');
    this.bookingReference = page.locator('.booking-reference, .confirmation-number');
    this.bookingDetails = page.locator('.booking-details, .reservation-details');
    this.hotelName = page.locator('.hotel-name, .property-name');
    this.checkInDate = page.locator('.check-in-date, [data-field="checkin"]');
    this.checkOutDate = page.locator('.check-out-date, [data-field="checkout"]');
    this.guestName = page.locator('.guest-name, .customer-name');
    this.totalPaid = page.locator('.total-paid, .amount-paid');
    this.printButton = page.locator('button.print, .btn-print');
    this.emailConfirmation = page.locator('.email-sent, .confirmation-email');
  }

  async isBookingConfirmed(): Promise<boolean> {
    const message = await this.confirmationMessage.textContent();
    return message?.toLowerCase().includes('confirm') || 
           message?.toLowerCase().includes('success') ||
           message?.toLowerCase().includes('thank') || false;
  }

  async getBookingReference(): Promise<string | null> {
    return this.bookingReference.textContent();
  }

  async getHotelName(): Promise<string | null> {
    return this.hotelName.textContent();
  }

  async getTotalPaid(): Promise<number> {
    const text = await this.totalPaid.textContent();
    return parseFloat(text?.replace(/[^0-9.]/g, '') || '0');
  }

  async printConfirmation() {
    await this.printButton.click();
  }

  async verifyBookingDetails(expected: {
    hotelName?: string;
    guestName?: string;
  }) {
    if (expected.hotelName) {
      await expect(this.hotelName).toContainText(expected.hotelName);
    }
    if (expected.guestName) {
      await expect(this.guestName).toContainText(expected.guestName);
    }
  }
}
