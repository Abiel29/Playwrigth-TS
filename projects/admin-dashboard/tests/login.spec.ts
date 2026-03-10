import { test, expect } from '../fixtures/test-fixtures';
import { TestUsers, ErrorMessages } from '../utils/TestData';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should display login page correctly', async ({ loginPage }) => {
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeEnabled();
  });

  test('should login with valid credentials', async ({ page, loginPage }) => {
    await loginPage.login(TestUsers.admin.username, TestUsers.admin.password);
    await expect(page).toHaveURL(/dashboard/);
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid_user', 'invalid_pass');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.invalidCredentials);
  });

  test('should show error with empty username', async ({ loginPage }) => {
    await loginPage.login('', TestUsers.admin.password);
    await expect(loginPage.page.locator('.oxd-input-field-error-message')).toBeVisible();
  });

  test('should show error with empty password', async ({ loginPage }) => {
    await loginPage.login(TestUsers.admin.username, '');
    await expect(loginPage.page.locator('.oxd-input-field-error-message')).toBeVisible();
  });

  test('should navigate to forgot password', async ({ page, loginPage }) => {
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(/requestPasswordResetCode/);
  });
});
