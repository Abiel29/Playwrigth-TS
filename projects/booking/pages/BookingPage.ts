import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
  readonly pageUrl = /booking|checkout/;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly countrySelect: Locator;
  readonly specialRequestsInput: Locator;
  readonly termsCheckbox: Locator;
  readonly confirmButton: Locator;
  readonly totalPrice: Locator;
  readonly bookingSummary: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('input[name="firstname"], #first_name');
    this.lastNameInput = page.locator('input[name="lastname"], #last_name');
    this.emailInput = page.locator('input[name="email"], #email');
    this.phoneInput = page.locator('input[name="phone"], #phone');
    this.addressInput = page.locator('input[name="address"], #address');
    this.cityInput = page.locator('input[name="city"], #city');
    this.countrySelect = page.locator('select[name="country"], #country');
    this.specialRequestsInput = page.locator('textarea[name="requests"], #special_requests');
    this.termsCheckbox = page.locator('input[name="terms"], #terms');
    this.confirmButton = page.locator('button[type="submit"], .btn-confirm');
    this.totalPrice = page.locator('.total-price, .booking-total');
    this.bookingSummary = page.locator('.booking-summary, .order-summary');
    this.errorMessage = page.locator('.error-message, .alert-danger');
  }

  async fillGuestDetails(details: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    country?: string;
  }) {
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.emailInput.fill(details.email);
    await this.phoneInput.fill(details.phone);
    
    if (details.address) {
      await this.addressInput.fill(details.address);
    }
    if (details.city) {
      await this.cityInput.fill(details.city);
    }
    if (details.country) {
      await this.countrySelect.selectOption(details.country);
    }
  }

  async addSpecialRequests(requests: string) {
    await this.specialRequestsInput.fill(requests);
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async confirmBooking() {
    await this.confirmButton.click();
  }

  async getTotalPrice(): Promise<number> {
    const text = await this.totalPrice.textContent();
    return parseFloat(text?.replace(/[^0-9.]/g, '') || '0');
  }

  async getErrorMessage(): Promise<string | null> {
    if (await this.errorMessage.isVisible()) {
      return this.errorMessage.textContent();
    }
    return null;
  }

  async completeBooking(details: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }) {
    await this.fillGuestDetails(details);
    await this.acceptTerms();
    await this.confirmBooking();
  }
}
