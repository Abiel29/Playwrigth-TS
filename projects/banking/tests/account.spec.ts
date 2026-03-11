import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { AccountTypes } from '../utils/TestData';

test.describe('Account Overview Tests', () => {

  test('should display account overview', async ({ accountOverviewPage }) => {
    await expect(accountOverviewPage.accountsTable).toBeVisible();
    const count = await accountOverviewPage.getAccountsCount();
    expect(count).toBeGreaterThan(0);
  });

  test('should display account balance', async ({ accountOverviewPage }) => {
    const balance = await accountOverviewPage.getAccountBalance(0);
    expect(balance).not.toBeNull();
  });

  test('should navigate to account details', async ({ page, accountOverviewPage }) => {
    await accountOverviewPage.clickAccount(0);
    await expect(page).toHaveURL(/activity/);
  });

  test('should display navigation links', async ({ accountOverviewPage }) => {
    await expect(accountOverviewPage.openNewAccountLink).toBeVisible();
    await expect(accountOverviewPage.transferFundsLink).toBeVisible();
    await expect(accountOverviewPage.billPayLink).toBeVisible();
  });

  test('should logout successfully', async ({ page, accountOverviewPage }) => {
    await accountOverviewPage.logout();
    await expect(page).toHaveURL(/index/);
  });
});

test.describe('Open New Account Tests', () => {
  test.beforeEach(async ({ accountOverviewPage }) => {
    await accountOverviewPage.openNewAccount();
  });

  test('should display open account form', async ({ openAccountPage }) => {
    await expect(openAccountPage.accountTypeSelect).toBeVisible();
    await expect(openAccountPage.fromAccountSelect).toBeVisible();
    await expect(openAccountPage.openAccountButton).toBeVisible();
  });

  test('should open new checking account', async ({ openAccountPage }) => {
    await openAccountPage.selectAccountType(AccountTypes.checking);
    await openAccountPage.clickOpenAccount();
    
    expect(await openAccountPage.isAccountCreated()).toBe(true);
  });

  test('should open new savings account', async ({ openAccountPage }) => {
    await openAccountPage.selectAccountType(AccountTypes.savings);
    await openAccountPage.clickOpenAccount();
    
    expect(await openAccountPage.isAccountCreated()).toBe(true);
  });

  test('should display new account id after creation', async ({ openAccountPage }) => {
    await openAccountPage.selectAccountType(AccountTypes.checking);
    await openAccountPage.clickOpenAccount();
    
    const accountId = await openAccountPage.getNewAccountId();
    expect(accountId).not.toBeNull();
  });
});
