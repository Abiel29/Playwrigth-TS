import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';

test.describe('Dashboard Tests', () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    // Login handled by fixture
  });

  test('should display dashboard after login', async ({ dashboardPage }) => {
    await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');
  });

  test('should display side menu', async ({ dashboardPage }) => {
    await expect(dashboardPage.sideMenu).toBeVisible();
    await expect(dashboardPage.adminMenuItem).toBeVisible();
    await expect(dashboardPage.pimMenuItem).toBeVisible();
  });

  test('should display quick launch widgets', async ({ dashboardPage }) => {
    const count = await dashboardPage.getQuickLaunchCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to Admin module', async ({ page, dashboardPage }) => {
    await dashboardPage.navigateToAdmin();
    await expect(page).toHaveURL(/admin/);
  });

  test('should navigate to PIM module', async ({ page, dashboardPage }) => {
    await dashboardPage.navigateToPIM();
    await expect(page).toHaveURL(/pim/);
  });

  test('should navigate to Leave module', async ({ page, dashboardPage }) => {
    await dashboardPage.navigateToLeave();
    await expect(page).toHaveURL(/leave/);
  });

  test('should navigate to My Info', async ({ page, dashboardPage }) => {
    await dashboardPage.navigateToMyInfo();
    await expect(page).toHaveURL(/pim\/viewPersonalDetails/);
  });

  test('should search menu items', async ({ dashboardPage }) => {
    await dashboardPage.searchMenu('Admin');
    await expect(dashboardPage.adminMenuItem).toBeVisible();
  });

  test('should logout successfully', async ({ page, dashboardPage }) => {
    await dashboardPage.logout();
    await expect(page).toHaveURL(/login/);
  });
});
