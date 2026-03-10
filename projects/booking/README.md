# Flight Booking Tests (BlazeDemo)

Playwright E2E tests for flight booking flow using [BlazeDemo](https://www.blazedemo.com) - a demo travel agency website.

## Test Coverage

### Search Tests (`search.spec.ts`)
- Home page display
- Departure/destination city options
- Flight search functionality
- Search results display
- Navigation to booking page

### Booking Flow Tests (`booking-flow.spec.ts`)
- Complete booking flow (search → select → book → confirm)
- Booking page display
- Passenger details form
- Payment details form
- Confirmation page verification

## Page Objects

- `HomePage` - Main search page with departure/destination selection
- `SearchResultsPage` - Flight results listing
- `BookingPage` - Passenger and payment details form
- `ConfirmationPage` - Booking confirmation display

## Running Tests

```bash
# Run all booking tests
npm run test:booking

# Run with UI
npm run test:booking -- --ui

# Run specific test file
npm run test:booking -- search.spec.ts
```

## Test Data

Test data is defined in `utils/TestData.ts`:
- Departure cities: Paris, Philadelphia, Boston, Portland, San Diego, Mexico City, São Paolo
- Destination cities: Buenos Aires, Rome, London, Berlin, New York, Dublin, Cairo
- Sample passenger and payment details for testing
