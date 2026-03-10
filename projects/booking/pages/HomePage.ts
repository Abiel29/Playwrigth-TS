import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly pageUrl = /blazedemo/;
  readonly departureSelect: Locator;
  readonly destinationSelect: Locator;
  readonly findFlightsButton: Locator;
  readonly pageTitle: Locator;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.departureSelect = page.locator('select[name="fromPort"]');
    this.destinationSelect = page.locator('select[name="toPort"]');
    this.findFlightsButton = page.locator('input[type="submit"]');
    this.pageTitle = page.locator('h1');
    this.welcomeMessage = page.locator('.jumbotron h1');
  }

  async goto() {
    await this.page.goto('/');
    await this.waitForPageLoad();
  }

  async selectDeparture(city: string) {
    await this.departureSelect.selectOption(city);
  }

  async selectDestination(city: string) {
    await this.destinationSelect.selectOption(city);
  }

  async clickFindFlights() {
    await this.findFlightsButton.click();
  }

  async searchFlight(departure: string, destination: string) {
    await this.selectDeparture(departure);
    await this.selectDestination(destination);
    await this.clickFindFlights();
  }

  async getDepartureOptions(): Promise<string[]> {
    return this.departureSelect.locator('option').allTextContents();
  }

  async getDestinationOptions(): Promise<string[]> {
    return this.destinationSelect.locator('option').allTextContents();
  }
}
