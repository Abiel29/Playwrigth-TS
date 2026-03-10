import { test, expect } from '../fixtures/test-fixtures';
import { SearchData, TestUsers } from '../utils/TestData';

test.describe('Hotel Booking Flow', () => {
  test('complete booking flow - search to confirmation', async ({
    homePage,
    searchResultsPage,
    hotelDetailPage,
    bookingPage,
    confirmationPage,
  }) => {
    // Step 1: Search for hotel
    await homePage.goto();
    await homePage.searchHotel(
      SearchData.destinations.dubai,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );

    // Step 2: Select hotel from results
    await searchResultsPage.waitForResults();
    expect(await searchResultsPage.hasResults()).toBe(true);
    await searchResultsPage.selectFirstHotel();

    // Step 3: View hotel details and book
    await expect(hotelDetailPage.hotelName).toBeVisible();
    await hotelDetailPage.clickBookNow();

    // Step 4: Fill booking details
    await bookingPage.fillGuestDetails(TestUsers.guest);
    await bookingPage.acceptTerms();
    await bookingPage.confirmBooking();

    // Step 5: Verify confirmation
    expect(await confirmationPage.isBookingConfirmed()).toBe(true);
  });

  test('should display hotel details correctly', async ({
    homePage,
    searchResultsPage,
    hotelDetailPage,
  }) => {
    await homePage.goto();
    await homePage.searchHotel(
      SearchData.destinations.singapore,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstHotel();

    await expect(hotelDetailPage.hotelName).toBeVisible();
    await expect(hotelDetailPage.hotelPrice).toBeVisible();
    
    const roomCount = await hotelDetailPage.getRoomTypesCount();
    expect(roomCount).toBeGreaterThan(0);
  });

  test('should show booking form validation errors', async ({
    homePage,
    searchResultsPage,
    hotelDetailPage,
    bookingPage,
  }) => {
    await homePage.goto();
    await homePage.searchHotel(
      SearchData.destinations.dubai,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstHotel();
    await hotelDetailPage.clickBookNow();

    // Try to submit without filling form
    await bookingPage.confirmBooking();
    
    const error = await bookingPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should calculate correct total price', async ({
    homePage,
    searchResultsPage,
    hotelDetailPage,
    bookingPage,
  }) => {
    await homePage.goto();
    await homePage.searchHotel(
      SearchData.destinations.dubai,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );

    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstHotel();
    
    const hotelPrice = await hotelDetailPage.getPrice();
    await hotelDetailPage.clickBookNow();
    
    const totalPrice = await bookingPage.getTotalPrice();
    expect(totalPrice).toBeGreaterThan(0);
  });
});

test.describe('Booking Form Validation', () => {
  test.beforeEach(async ({ homePage, searchResultsPage, hotelDetailPage }) => {
    await homePage.goto();
    await homePage.searchHotel(
      SearchData.destinations.dubai,
      SearchData.dates.getCheckIn(),
      SearchData.dates.getCheckOut(),
      2
    );
    await searchResultsPage.waitForResults();
    await searchResultsPage.selectFirstHotel();
    await hotelDetailPage.clickBookNow();
  });

  test('should require first name', async ({ bookingPage }) => {
    await bookingPage.fillGuestDetails({
      firstName: '',
      lastName: TestUsers.guest.lastName,
      email: TestUsers.guest.email,
      phone: TestUsers.guest.phone,
    });
    await bookingPage.confirmBooking();
    
    const error = await bookingPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should require valid email', async ({ bookingPage }) => {
    await bookingPage.fillGuestDetails({
      firstName: TestUsers.guest.firstName,
      lastName: TestUsers.guest.lastName,
      email: 'invalid-email',
      phone: TestUsers.guest.phone,
    });
    await bookingPage.confirmBooking();
    
    const error = await bookingPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should require terms acceptance', async ({ bookingPage }) => {
    await bookingPage.fillGuestDetails(TestUsers.guest);
    // Don't accept terms
    await bookingPage.confirmBooking();
    
    const error = await bookingPage.getErrorMessage();
    expect(error).not.toBeNull();
  });
});
