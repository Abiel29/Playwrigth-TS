import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { Products } from '../utils/TestData';

test.describe('Inventory Tests', () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    // Login handled by fixture
  });

  test('should display products on inventory page', async ({ inventoryPage }) => {
    await expect(inventoryPage.title).toHaveText('Products');
    const itemCount = await inventoryPage.inventoryItems.count();
    expect(itemCount).toBe(6);
  });

  test('should add single item to cart', async ({ inventoryPage }) => {
    await inventoryPage.addItemToCart(Products.backpack);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(1);
  });

  test('should add multiple items to cart', async ({ inventoryPage }) => {
    await inventoryPage.addMultipleItemsToCart([
      Products.backpack,
      Products.bikeLight,
      Products.boltShirt,
    ]);
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(3);
  });

  test('should remove item from cart on inventory page', async ({ inventoryPage }) => {
    await inventoryPage.addItemToCart(Products.backpack);
    expect(await inventoryPage.getCartCount()).toBe(1);
    
    await inventoryPage.removeItemFromCart(Products.backpack);
    await expect(inventoryPage.cartBadge).not.toBeVisible();
  });

  test('should sort products A-Z', async ({ inventoryPage }) => {
    await inventoryPage.sortBy('az');
    const names = await inventoryPage.getProductNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  });

  test('should sort products Z-A', async ({ inventoryPage }) => {
    await inventoryPage.sortBy('za');
    const names = await inventoryPage.getProductNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  });

  test('should sort products by price low to high', async ({ inventoryPage }) => {
    await inventoryPage.sortBy('lohi');
    const prices = await inventoryPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test('should sort products by price high to low', async ({ inventoryPage }) => {
    await inventoryPage.sortBy('hilo');
    const prices = await inventoryPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });

  test('should navigate to product detail page', async ({ page, inventoryPage }) => {
    await inventoryPage.clickProductByName(Products.backpack);
    await expect(page).toHaveURL(/inventory-item/);
  });

  test('should reset app state', async ({ inventoryPage }) => {
    await inventoryPage.addMultipleItemsToCart([Products.backpack, Products.bikeLight]);
    expect(await inventoryPage.getCartCount()).toBe(2);
    
    await inventoryPage.resetApp();
    await expect(inventoryPage.cartBadge).not.toBeVisible();
  });

  test('should logout successfully', async ({ page, inventoryPage }) => {
    await inventoryPage.logout();
    await expect(page).toHaveURL(/.*saucedemo.com\/?$/);
  });

  test('should navigate to cart', async ({ page, inventoryPage }) => {
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/cart/);
  });
});
