import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';

test.describe('Admin Module Tests', () => {
  test.beforeEach(async ({ authenticatedPage, dashboardPage }) => {
    await dashboardPage.navigateToAdmin();
  });

  test('should display admin page', async ({ adminPage }) => {
    await expect(adminPage.pageTitle).toHaveText('Admin');
    await expect(adminPage.userTable).toBeVisible();
  });

  test('should display user management table', async ({ adminPage }) => {
    const count = await adminPage.getUserCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to add user page', async ({ page, adminPage }) => {
    await adminPage.clickAddUser();
    await expect(page).toHaveURL(/admin\/saveSystemUser/);
  });

  test('should search users by username', async ({ adminPage }) => {
    await adminPage.searchByUsername('Admin');
    await adminPage.clickSearch();
    
    await expect(adminPage.userTable).toBeVisible();
  });

  test('should filter users by role', async ({ adminPage }) => {
    await adminPage.selectUserRole('Admin');
    await adminPage.clickSearch();
    
    await expect(adminPage.userTable).toBeVisible();
  });

  test('should filter users by status', async ({ adminPage }) => {
    await adminPage.selectStatus('Enabled');
    await adminPage.clickSearch();
    
    await expect(adminPage.userTable).toBeVisible();
  });

  test('should reset search filters', async ({ adminPage }) => {
    await adminPage.searchByUsername('test');
    await adminPage.clickReset();
    
    await expect(adminPage.searchUsername).toHaveValue('');
  });
});
