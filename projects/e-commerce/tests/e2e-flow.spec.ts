import { test, expect } from '../fixtures/test-fixtures';
import { Users, Products, ShippingInfo } from '../utils/TestData';

test.describe('End-to-End User Flows', () => {
  test('complete purchase flow - single item', async ({ 
    loginPage, 
    inventoryPage, 
    cartPage, 
    checkoutPage 
  }) => {
    // Login
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    await expect(inventoryPage.title).toHaveText('Products');

    // Add item to cart
    await inventoryPage.addItemToCart(Products.backpack);
    expect(await inventoryPage.getCartCount()).toBe(1);

    // Go to cart and verify
    await inventoryPage.goToCart();
    expect(await cartPage.isItemInCart(Products.backpack)).toBe(true);

    // Checkout
    await cartPage.checkout();
    await checkoutPage.completeCheckout(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );

    // Verify completion
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('complete purchase flow - multiple items with sorting', async ({ 
    loginPage, 
    inventoryPage, 
    cartPage, 
    checkoutPage 
  }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);

    // Sort by price low to high
    await inventoryPage.sortBy('lohi');
    const prices = await inventoryPage.getProductPrices();
    expect(prices[0]).toBeLessThanOrEqual(prices[1]);

    // Add cheapest items
    await inventoryPage.addItemToCart(Products.onesie);
    await inventoryPage.addItemToCart(Products.bikeLight);
    expect(await inventoryPage.getCartCount()).toBe(2);

    // Complete checkout
    await inventoryPage.goToCart();
    await cartPage.checkout();
    await checkoutPage.completeCheckout(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );

    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('cart modification flow', async ({ 
    loginPage, 
    inventoryPage, 
    cartPage 
  }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);

    // Add multiple items
    await inventoryPage.addMultipleItemsToCart([
      Products.backpack,
      Products.bikeLight,
      Products.boltShirt,
    ]);
    expect(await inventoryPage.getCartCount()).toBe(3);

    // Go to cart and remove one item
    await inventoryPage.goToCart();
    await cartPage.removeItem(Products.bikeLight);
    expect(await cartPage.getCartItemsCount()).toBe(2);

    // Continue shopping and add another item
    await cartPage.continueShopping();
    await inventoryPage.addItemToCart(Products.fleeceJacket);
    expect(await inventoryPage.getCartCount()).toBe(3);
  });

  test('login retry after failure', async ({ 
    loginPage, 
    inventoryPage 
  }) => {
    await loginPage.goto();

    // First attempt with wrong credentials
    await loginPage.login(Users.invalid.username, Users.invalid.password);
    await expect(loginPage.errorMessage).toBeVisible();

    // Clear and retry with correct credentials
    await loginPage.clearInputs();
    await loginPage.closeError();
    await loginPage.login(Users.standard.username, Users.standard.password);

    await expect(inventoryPage.title).toHaveText('Products');
  });

  test('session persistence - logout and login', async ({ 
    page,
    loginPage, 
    inventoryPage 
  }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);

    // Add items
    await inventoryPage.addItemToCart(Products.backpack);
    expect(await inventoryPage.getCartCount()).toBe(1);

    // Logout
    await inventoryPage.logout();
    await expect(page).toHaveURL(/.*saucedemo.com\/?$/);

    // Login again - SauceDemo persists cart in localStorage per user
    // so cart should still have items after re-login
    await loginPage.login(Users.standard.username, Users.standard.password);
    await expect(inventoryPage.cartBadge).toBeVisible();
    expect(await inventoryPage.getCartCount()).toBe(1);
  });
});
