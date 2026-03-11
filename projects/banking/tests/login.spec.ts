import { test, expect } from '../fixtures/test-fixtures';
import { TestUsers } from '../utils/TestData';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  test('should display login form', async ({ loginPage }) => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('should login with valid credentials', async ({ page, loginPage }) => {
    await loginPage.login(TestUsers.existing.username, TestUsers.existing.password);
    await expect(page).toHaveURL(/overview/);
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid_user', 'invalid_pass');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('could not be verified');
  });

  test('should show error with empty username', async ({ loginPage }) => {
    await loginPage.login('', TestUsers.existing.password);
    const error = await loginPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should show error with empty password', async ({ loginPage }) => {
    await loginPage.login(TestUsers.existing.username, '');
    const error = await loginPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should navigate to register page', async ({ page, loginPage }) => {
    await loginPage.clickRegister();
    await expect(page).toHaveURL(/register/);
  });

  test('should navigate to forgot login page', async ({ page, loginPage }) => {
    await loginPage.clickForgotLogin();
    await expect(page).toHaveURL(/lookup/);
  });
});
