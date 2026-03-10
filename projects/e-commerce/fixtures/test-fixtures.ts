import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { Users } from '../utils/TestData';

type Pages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

type AuthenticatedPages = Pages & {
  authenticatedPage: void;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});

export const authenticatedTest = base.extend<AuthenticatedPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  authenticatedPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    await use();
  },
});

export { expect } from '@playwright/test';
