import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly pageUrl = /phptravels/;
  readonly flightsTab: Locator;
  readonly hotelsTab: Locator;
  readonly toursTab: Locator;
  readonly destinationInput: Locator;
  readonly checkInDate: Locator;
  readonly checkOutDate: Locator;
  readonly guestsDropdown: Locator;
  readonly searchButton: Locator;
  readonly adultsInput: Locator;
  readonly childrenInput: Locator;

  constructor(page: Page) {
    super(page);
    this.flightsTab = page.locator('[data-name="flights"]');
    this.hotelsTab = page.locator('[data-name="hotels"]');
    this.toursTab = page.locator('[data-name="tours"]');
    this.destinationInput = page.locator('#select2-hotels_city-container').first();
    this.checkInDate = page.locator('input[name="checkin"]');
    this.checkOutDate = page.locator('input[name="checkout"]');
    this.guestsDropdown = page.locator('.dropdown-toggle').first();
    this.searchButton = page.locator('button[type="submit"]').first();
    this.adultsInput = page.locator('input[name="adults"]');
    this.childrenInput = page.locator('input[name="children"]');
  }

  async goto() {
    await this.page.goto('/');
    await this.waitForPageLoad();
  }

  async selectHotelsTab() {
    await this.hotelsTab.click();
  }

  async selectFlightsTab() {
    await this.flightsTab.click();
  }

  async selectToursTab() {
    await this.toursTab.click();
  }

  async searchDestination(destination: string) {
    await this.destinationInput.click();
    await this.page.locator('.select2-search__field').fill(destination);
    await this.page.locator('.select2-results__option').first().click();
  }

  async setCheckInDate(date: string) {
    await this.checkInDate.fill(date);
  }

  async setCheckOutDate(date: string) {
    await this.checkOutDate.fill(date);
  }

  async setGuests(adults: number, children: number = 0) {
    await this.guestsDropdown.click();
    await this.adultsInput.fill(adults.toString());
    if (children > 0) {
      await this.childrenInput.fill(children.toString());
    }
  }

  async clickSearch() {
    await this.searchButton.click();
  }

  async searchHotel(destination: string, checkIn: string, checkOut: string, adults: number = 2) {
    await this.selectHotelsTab();
    await this.searchDestination(destination);
    await this.setCheckInDate(checkIn);
    await this.setCheckOutDate(checkOut);
    await this.setGuests(adults);
    await this.clickSearch();
  }
}
