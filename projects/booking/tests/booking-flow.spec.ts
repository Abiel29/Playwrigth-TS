import { test, expect } from '../fixtures/test-fixtures';
import { FlightData, TestUsers } from '../utils/TestData';

test.describe('Flight Booking Flow', () => {
  test('complete booking flow - search to confirmation', async ({
    homePage,
    searchResultsPage,
    bookingPage,
    confirmationPage,
  }) => {
    // Step 1: Search for flight
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.paris,
      FlightData.destinations.london
    );

    // Step 2: Select flight from results
    await searchResultsPage.waitForResults();
    expect(await searchResultsPage.hasResults()).toBe(true);
    await searchResultsPage.selectFirstFlight();

    // Step 3: Fill booking details and purchase
    await bookingPage.completePurchase(TestUsers.passenger, TestUsers.payment);

    // Step 4: Verify confirmation
    expect(await confirmationPage.isBookingConfirmed()).toBe(true);
  });

  test('should display booking page with flight info', async ({
    homePage,
    searchResultsPage,
    bookingPage,
  }) => {
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.boston,
      FlightData.destinations.rome
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstFlight();

    await expect(bookingPage.pageTitle).toBeVisible();
    await expect(bookingPage.nameInput).toBeVisible();
    await expect(bookingPage.purchaseButton).toBeVisible();
  });

  test('should show total price on booking page', async ({
    homePage,
    searchResultsPage,
    bookingPage,
  }) => {
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.portland,
      FlightData.destinations.berlin
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstFlight();

    const totalPrice = await bookingPage.getTotalPrice();
    expect(totalPrice).toBeGreaterThan(0);
  });

  test('should fill passenger details correctly', async ({
    homePage,
    searchResultsPage,
    bookingPage,
  }) => {
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.sanDiego,
      FlightData.destinations.dublin
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstFlight();

    await bookingPage.fillPassengerDetails(TestUsers.passenger);

    await expect(bookingPage.nameInput).toHaveValue(TestUsers.passenger.name);
    await expect(bookingPage.addressInput).toHaveValue(TestUsers.passenger.address);
    await expect(bookingPage.cityInput).toHaveValue(TestUsers.passenger.city);
  });

  test('should fill payment details correctly', async ({
    homePage,
    searchResultsPage,
    bookingPage,
  }) => {
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.mexicoCity,
      FlightData.destinations.cairo
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstFlight();

    await bookingPage.fillPaymentDetails(TestUsers.payment);

    await expect(bookingPage.creditCardInput).toHaveValue(TestUsers.payment.cardNumber);
    await expect(bookingPage.nameOnCardInput).toHaveValue(TestUsers.payment.nameOnCard);
  });
});

test.describe('Confirmation Page Tests', () => {
  test.beforeEach(async ({ homePage, searchResultsPage, bookingPage }) => {
    await homePage.goto();
    await homePage.searchFlight(
      FlightData.departures.paris,
      FlightData.destinations.newYork
    );
    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstFlight();
    await bookingPage.completePurchase(TestUsers.passenger, TestUsers.payment);
  });

  test('should display confirmation page', async ({ confirmationPage }) => {
    expect(await confirmationPage.isBookingConfirmed()).toBe(true);
  });

  test('should show confirmation ID', async ({ confirmationPage }) => {
    const id = await confirmationPage.getConfirmationId();
    expect(id).toBeTruthy();
  });

  test('should show booking status', async ({ confirmationPage }) => {
    const status = await confirmationPage.getStatus();
    expect(status).toBeTruthy();
  });

  test('should show amount paid', async ({ confirmationPage }) => {
    const amount = await confirmationPage.getAmountPaid();
    expect(amount).toBeGreaterThan(0);
  });

  test('should verify all confirmation details', async ({ confirmationPage }) => {
    const details = await confirmationPage.verifyConfirmationDetails();
    
    expect(details.id).toBeTruthy();
    expect(details.status).toBeTruthy();
    expect(details.amount).toBeGreaterThan(0);
  });
});
