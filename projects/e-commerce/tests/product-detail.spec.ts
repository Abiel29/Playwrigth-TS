import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { Products } from '../utils/TestData';

test.describe('Product Detail Tests', () => {
  let productDetailPage: ProductDetailPage;

  test.beforeEach(async ({ page, authenticatedPage, inventoryPage }) => {
    productDetailPage = new ProductDetailPage(page);
    await inventoryPage.clickProductByName(Products.backpack);
  });

  test('should display product details', async () => {
    const name = await productDetailPage.getProductName();
    expect(name).toBe(Products.backpack);
    await expect(productDetailPage.productDescription).toBeVisible();
    await expect(productDetailPage.productPrice).toBeVisible();
    await expect(productDetailPage.productImage).toBeVisible();
  });

  test('should add product to cart from detail page', async ({ inventoryPage }) => {
    await productDetailPage.addToCart();
    expect(await productDetailPage.isRemoveVisible()).toBe(true);
    
    await productDetailPage.goBack();
    expect(await inventoryPage.getCartCount()).toBe(1);
  });

  test('should remove product from cart on detail page', async () => {
    await productDetailPage.addToCart();
    await productDetailPage.removeFromCart();
    expect(await productDetailPage.isAddToCartVisible()).toBe(true);
  });

  test('should navigate back to products', async ({ page }) => {
    await productDetailPage.goBack();
    await expect(page).toHaveURL(/inventory/);
  });

  test('should show correct price on detail page', async () => {
    // We're already on the detail page from beforeEach
    // Just verify the price is displayed correctly
    const detailPrice = await productDetailPage.getProductPrice();
    expect(detailPrice).toBe(29.99); // Known price for Sauce Labs Backpack
  });
});
