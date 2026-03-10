import { test, expect } from '../fixtures/test-fixtures';
import { SearchData } from '../utils/TestData';

test.describe('Hotel Search Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('should display home page correctly', async ({ homePage }) => {
    await expect(homePage.hotelsTab).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
  });

  test('should search for hotels in Dubai', async ({ homePage, searchResultsPage }) => {
    await homePage.searchHotel(
      SearchData.destinations.dubai,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );
    
    await searchResultsPage.waitForResults();
    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBe(true);
  });

  test('should search for hotels in Singapore', async ({ homePage, searchResultsPage }) => {
    await homePage.searchHotel(
      SearchData.destinations.singapore,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );
    
    await searchResultsPage.waitForResults();
    expect(await searchResultsPage.getResultsCount()).toBeGreaterThan(0);
  });

  test('should switch between tabs', async ({ homePage }) => {
    await homePage.selectFlightsTab();
    await expect(homePage.flightsTab).toHaveClass(/active/);
    
    await homePage.selectHotelsTab();
    await expect(homePage.hotelsTab).toHaveClass(/active/);
  });

  test('should set guest count', async ({ homePage }) => {
    await homePage.selectHotelsTab();
    await homePage.setGuests(3, 1);
    // Verify guests are set
  });
});

test.describe('Search Results Tests', () => {
  test.beforeEach(async ({ homePage, searchResultsPage }) => {
    await homePage.goto();
    await homePage.searchHotel(
      SearchData.destinations.dubai,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );
    await searchResultsPage.waitForResults();
  });

  test('should display search results', async ({ searchResultsPage }) => {
    const count = await searchResultsPage.getResultsCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should sort results by price low to high', async ({ searchResultsPage }) => {
    await searchResultsPage.sortByPrice('low');
    const prices = await searchResultsPage.getHotelPrices();
    
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
  });

  test('should sort results by price high to low', async ({ searchResultsPage }) => {
    await searchResultsPage.sortByPrice('high');
    const prices = await searchResultsPage.getHotelPrices();
    
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i - 1]);
    }
  });

  test('should navigate to hotel detail page', async ({ page, searchResultsPage }) => {
    await searchResultsPage.selectFirstHotel();
    await expect(page).toHaveURL(/hotel|property/);
  });
});
