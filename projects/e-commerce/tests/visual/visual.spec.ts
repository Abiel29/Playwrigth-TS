import { test, expect } from '../../fixtures/test-fixtures';
import { Users } from '../../utils/TestData';

test.describe('Visual Regression Tests', () => {
  test('login page visual snapshot', async ({ page, loginPage }) => {
    await loginPage.goto();
    await expect(page).toHaveScreenshot('login-page.png', {
      maxDiffPixels: 100,
    });
  });

  test('inventory page visual snapshot', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    await expect(inventoryPage.title).toHaveText('Products');
    
    await expect(page).toHaveScreenshot('inventory-page.png', {
      maxDiffPixels: 100,
    });
  });

  test('cart page visual snapshot', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.goToCart();
    
    await expect(page).toHaveScreenshot('cart-page.png', {
      maxDiffPixels: 100,
    });
  });

  test('product card visual snapshot', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    
    const firstProduct = inventoryPage.inventoryItems.first();
    await expect(firstProduct).toHaveScreenshot('product-card.png', {
      maxDiffPixels: 50,
    });
  });

  test('error message visual snapshot', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('invalid', 'invalid');
    
    await expect(loginPage.errorMessage).toHaveScreenshot('error-message.png', {
      maxDiffPixels: 50,
    });
  });
});

test.describe('Responsive Visual Tests', () => {
  test('mobile viewport - login page', async ({ page, loginPage }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await loginPage.goto();
    
    await expect(page).toHaveScreenshot('login-mobile.png', {
      maxDiffPixels: 100,
    });
  });

  test('tablet viewport - inventory page', async ({ page, loginPage, inventoryPage }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await loginPage.goto();
    await loginPage.login(Users.standard.username, Users.standard.password);
    
    await expect(page).toHaveScreenshot('inventory-tablet.png', {
      maxDiffPixels: 100,
    });
  });
});
