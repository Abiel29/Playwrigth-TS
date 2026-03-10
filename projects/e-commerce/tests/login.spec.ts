import { test, expect } from '../fixtures/test-fixtures';
import { Users, ErrorMessages } from '../utils/TestData';

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

  test('should login successfully with valid credentials', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.login(Users.standard.username, Users.standard.password);
    await expect(inventoryPage.title).toHaveText('Products');
    await expect(page).toHaveURL(/inventory/);
  });

  test('should show error with invalid credentials', async ({ loginPage }) => {
    await loginPage.login(Users.invalid.username, Users.invalid.password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.invalidCredentials);
  });

  test('should show error when username is empty', async ({ loginPage }) => {
    await loginPage.login('', Users.standard.password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.usernameRequired);
  });

  test('should show error when password is empty', async ({ loginPage }) => {
    await loginPage.login(Users.standard.username, '');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain(ErrorMessages.passwordRequired);
  });

  test('should show error for locked out user', async ({ loginPage }) => {
    await loginPage.login(Users.locked.username, Users.locked.password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('locked out');
  });

  test('should close error message', async ({ loginPage }) => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
    await loginPage.closeError();
    await expect(loginPage.errorMessage).not.toBeVisible();
  });

  test('should clear inputs and retry login', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(Users.invalid.username, Users.invalid.password);
    await expect(loginPage.errorMessage).toBeVisible();
    
    await loginPage.clearInputs();
    await loginPage.closeError();
    await loginPage.login(Users.standard.username, Users.standard.password);
    
    await expect(inventoryPage.title).toHaveText('Products');
  });
});

test.describe('Login - Performance User', () => {
  test('should login with performance glitch user (slower)', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.performance.username, Users.performance.password);
    await expect(inventoryPage.title).toHaveText('Products', { timeout: 10000 });
  });
});
