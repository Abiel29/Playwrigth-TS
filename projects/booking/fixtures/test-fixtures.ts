import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { BookingPage } from '../pages/BookingPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';

type BookingPages = {
  homePage: HomePage;
  searchResultsPage: SearchResultsPage;
  bookingPage: BookingPage;
  confirmationPage: ConfirmationPage;
};

export const test = base.extend<BookingPages>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
  bookingPage: async ({ page }, use) => {
    await use(new BookingPage(page));
  },
  confirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  },
});

export { expect } from '@playwright/test';
