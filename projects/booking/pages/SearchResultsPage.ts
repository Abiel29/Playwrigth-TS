import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  readonly pageUrl = /reserve/;
  readonly pageTitle: Locator;
  readonly flightTable: Locator;
  readonly flightRows: Locator;
  readonly chooseFlightButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('h3');
    this.flightTable = page.locator('table.table');
    this.flightRows = page.locator('table.table tbody tr');
    this.chooseFlightButtons = page.locator('input[type="submit"][value="Choose This Flight"]');
  }

  async waitForResults() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.flightTable.waitFor({ state: 'visible' });
  }

  async getResultsCount(): Promise<number> {
    return this.flightRows.count();
  }

  async hasResults(): Promise<boolean> {
    const count = await this.getResultsCount();
    return count > 0;
  }

  async selectFlightByIndex(index: number) {
    await this.chooseFlightButtons.nth(index).click();
  }

  async selectFirstFlight() {
    await this.selectFlightByIndex(0);
  }

  async getFlightDetails(index: number): Promise<{
    airline: string;
    flightNumber: string;
    departTime: string;
    arriveTime: string;
    price: number;
  }> {
    const row = this.flightRows.nth(index);
    const cells = row.locator('td');
    
    return {
      airline: await cells.nth(2).textContent() || '',
      flightNumber: await cells.nth(1).textContent() || '',
      departTime: await cells.nth(3).textContent() || '',
      arriveTime: await cells.nth(4).textContent() || '',
      price: parseFloat((await cells.nth(5).textContent())?.replace(/[^0-9.]/g, '') || '0'),
    };
  }

  async getFlightPrices(): Promise<number[]> {
    const prices: number[] = [];
    const count = await this.getResultsCount();
    
    for (let i = 0; i < count; i++) {
      const details = await this.getFlightDetails(i);
      prices.push(details.price);
    }
    
    return prices;
  }

  async getPageTitle(): Promise<string | null> {
    return this.pageTitle.textContent();
  }
}
