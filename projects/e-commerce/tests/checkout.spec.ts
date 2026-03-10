import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { Products, ShippingInfo, ErrorMessages } from '../utils/TestData';

test.describe('Checkout Tests', () => {
  test.beforeEach(async ({ authenticatedPage, inventoryPage }) => {
    await inventoryPage.addItemToCart(Products.backpack);
    await inventoryPage.goToCart();
  });

  test('should display items in cart', async ({ cartPage }) => {
    const itemCount = await cartPage.getCartItemsCount();
    expect(itemCount).toBe(1);
    expect(await cartPage.isItemInCart(Products.backpack)).toBe(true);
  });

  test('should remove item from cart page', async ({ cartPage }) => {
    await cartPage.removeItem(Products.backpack);
    await cartPage.verifyCartIsEmpty();
  });

  test('should complete checkout successfully', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.completeCheckout(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('should verify order total calculation', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.fillShippingInfo(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );
    await checkoutPage.continueAndVerify();
    await checkoutPage.verifyTotalCalculation();
  });

  test('should show error when first name is empty', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.fillShippingInfo('', ShippingInfo.valid.lastName, ShippingInfo.valid.postalCode);
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.firstNameRequired);
  });

  test('should show error when last name is empty', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.fillShippingInfo(ShippingInfo.valid.firstName, '', ShippingInfo.valid.postalCode);
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.lastNameRequired);
  });

  test('should show error when postal code is empty', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.fillShippingInfo(ShippingInfo.valid.firstName, ShippingInfo.valid.lastName, '');
    await checkoutPage.continue();
    const error = await checkoutPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.postalCodeRequired);
  });

  test('should cancel checkout and return to cart', async ({ page, cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.cancel();
    await expect(page).toHaveURL(/cart/);
  });

  test('should continue shopping from cart', async ({ page, cartPage }) => {
    await cartPage.continueShopping();
    await expect(page).toHaveURL(/inventory/);
  });

  test('should return to products after order completion', async ({ cartPage, checkoutPage }) => {
    await cartPage.checkout();
    await checkoutPage.completeCheckout(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );
    await checkoutPage.backToHome();
  });
});

test.describe('Checkout - Multiple Items', () => {
  test.beforeEach(async ({ authenticatedPage, inventoryPage }) => {
    await inventoryPage.addMultipleItemsToCart([
      Products.backpack,
      Products.bikeLight,
      Products.onesie,
    ]);
    await inventoryPage.goToCart();
  });

  test('should checkout with multiple items', async ({ cartPage, checkoutPage }) => {
    expect(await cartPage.getCartItemsCount()).toBe(3);
    
    await cartPage.checkout();
    await checkoutPage.completeCheckout(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('should calculate correct total for multiple items', async ({ cartPage, checkoutPage }) => {
    const cartTotal = await cartPage.getCartTotal();
    
    await cartPage.checkout();
    await checkoutPage.fillShippingInfo(
      ShippingInfo.valid.firstName,
      ShippingInfo.valid.lastName,
      ShippingInfo.valid.postalCode
    );
    await checkoutPage.continueAndVerify();
    
    const subtotal = await checkoutPage.getSubtotal();
    expect(subtotal).toBeCloseTo(cartTotal, 2);
  });

  test('should remove items from cart before checkout', async ({ cartPage }) => {
    await cartPage.removeItem(Products.backpack);
    expect(await cartPage.getCartItemsCount()).toBe(2);
    
    await cartPage.removeAllItems();
    await cartPage.verifyCartIsEmpty();
  });
});
