import { test, expect } from '../fixtures/test-fixtures';
import { FlightData } from '../utils/TestData';

test.describe('Flight Search Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('should display home page correctly', async ({ homePage }) => {
    await expect(homePage.departureSelect).toBeVisible();
    await expect(homePage.destinationSelect).toBeVisible();
    await expect(homePage.findFlightsButton).toBeVisible();
    await expect(homePage.welcomeMessage).toContainText('Welcome');
  });

  test('should have departure city options', async ({ homePage }) => {
    const options = await homePage.getDepartureOptions();
    expect(options.length).toBeGreaterThan(0);
    expect(options).toContain('Paris');
    expect(options).toContain('Boston');
  });

  test('should have destination city options', async ({ homePage }) => {
    const options = await homePage.getDestinationOptions();
    expect(options.length).toBeGreaterThan(0);
    expect(options).toContain('London');
    expect(options).toContain('Rome');
  });

  test('should search for flights from Paris to London', async ({ homePage, searchResultsPage }) => {
    await homePage.searchFlight(
      FlightData.departures.paris,
      FlightData.destinations.london
    );
    
    await searchResultsPage.waitForResults();
    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBe(true);
  });

  test('should search for flights from Boston to Rome', async ({ homePage, searchResultsPage }) => {
    await homePage.searchFlight(
      FlightData.departures.boston,
      FlightData.destinations.rome
    );
    
    await searchResultsPage.waitForResults();
    expect(await searchResultsPage.getResultsCount()).toBeGreaterThan(0);
  });

  test('should select departure and destination cities', async ({ homePage }) => {
    await homePage.selectDeparture(FlightData.departures.philadelphia);
    await expect(homePage.departureSelect).toHaveValue('Philadelphia');
    
    await homePage.selectDestination(FlightData.destinations.berlin);
    await expect(homePage.destinationSelect).toHaveValue('Berlin');
  });
});

test.describe('Search Results Tests', () => {
  test.beforeEach(async ({ homePage, searchResultsPage }) => {
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.paris,
      FlightData.destinations.buenosAires
    );
    await searchResultsPage.waitForResults();
  });

  test('should display search results', async ({ searchResultsPage }) => {
    const count = await searchResultsPage.getResultsCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should display flight table', async ({ searchResultsPage }) => {
    await expect(searchResultsPage.flightTable).toBeVisible();
  });

  test('should show page title with route info', async ({ searchResultsPage }) => {
    const title = await searchResultsPage.getPageTitle();
    expect(title).toContain('Paris');
    expect(title).toContain('Buenos Aires');
  });

  test('should get flight details', async ({ searchResultsPage }) => {
    const details = await searchResultsPage.getFlightDetails(0);
    expect(details.airline).toBeTruthy();
    expect(details.price).toBeGreaterThan(0);
  });

  test('should navigate to booking page when selecting flight', async ({ page, searchResultsPage }) => {
    await searchResultsPage.selectFirstFlight();
    await expect(page).toHaveURL(/purchase/);
  });
});
