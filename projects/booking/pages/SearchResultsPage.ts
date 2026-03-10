import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchResultsPage extends BasePage {
  readonly pageUrl = /search/;
  readonly hotelCards: Locator;
  readonly priceFilter: Locator;
  readonly starRatingFilter: Locator;
  readonly sortDropdown: Locator;
  readonly noResultsMessage: Locator;
  readonly loadingSpinner: Locator;
  readonly resultsCount: Locator;

  constructor(page: Page) {
    super(page);
    this.hotelCards = page.locator('.hotel-card, .property-card, .search-result-item');
    this.priceFilter = page.locator('[data-filter="price"]');
    this.starRatingFilter = page.locator('[data-filter="stars"]');
    this.sortDropdown = page.locator('select[name="sort"], .sort-dropdown');
    this.noResultsMessage = page.locator('.no-results, .empty-state');
    this.loadingSpinner = page.locator('.loading, .spinner');
    this.resultsCount = page.locator('.results-count, .total-results');
  }

  async waitForResults() {
    await this.page.waitForLoadState('networkidle');
  }

  async getResultsCount(): Promise<number> {
    return this.hotelCards.count();
  }

  async selectHotelByIndex(index: number) {
    await this.hotelCards.nth(index).click();
  }

  async selectFirstHotel() {
    await this.selectHotelByIndex(0);
  }

  async sortByPrice(order: 'low' | 'high') {
    await this.sortDropdown.selectOption(order === 'low' ? 'price_asc' : 'price_desc');
    await this.waitForResults();
  }

  async filterByStarRating(stars: number) {
    await this.page.locator(`[data-stars="${stars}"]`).click();
    await this.waitForResults();
  }

  async filterByPriceRange(min: number, max: number) {
    await this.page.locator('input[name="price_min"]').fill(min.toString());
    await this.page.locator('input[name="price_max"]').fill(max.toString());
    await this.page.locator('button.apply-filter').click();
    await this.waitForResults();
  }

  async getHotelNames(): Promise<string[]> {
    return this.page.locator('.hotel-name, .property-name').allTextContents();
  }

  async getHotelPrices(): Promise<number[]> {
    const priceTexts = await this.page.locator('.hotel-price, .price').allTextContents();
    return priceTexts.map(p => parseFloat(p.replace(/[^0-9.]/g, '')));
  }

  async hasResults(): Promise<boolean> {
    const count = await this.getResultsCount();
    return count > 0;
  }
}
