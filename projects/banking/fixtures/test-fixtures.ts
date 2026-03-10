import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountOverviewPage } from '../pages/AccountOverviewPage';
import { TransferPage } from '../pages/TransferPage';
import { BillPayPage } from '../pages/BillPayPage';
import { OpenAccountPage } from '../pages/OpenAccountPage';
import { TestUsers } from '../utils/TestData';

type BankingPages = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
  accountOverviewPage: AccountOverviewPage;
  transferPage: TransferPage;
  billPayPage: BillPayPage;
  openAccountPage: OpenAccountPage;
};

type AuthenticatedPages = BankingPages & {
  authenticatedPage: void;
};

export const test = base.extend<BankingPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  accountOverviewPage: async ({ page }, use) => {
    await use(new AccountOverviewPage(page));
  },
  transferPage: async ({ page }, use) => {
    await use(new TransferPage(page));
  },
  billPayPage: async ({ page }, use) => {
    await use(new BillPayPage(page));
  },
  openAccountPage: async ({ page }, use) => {
    await use(new OpenAccountPage(page));
  },
});

export const authenticatedTest = base.extend<AuthenticatedPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  accountOverviewPage: async ({ page }, use) => {
    await use(new AccountOverviewPage(page));
  },
  transferPage: async ({ page }, use) => {
    await use(new TransferPage(page));
  },
  billPayPage: async ({ page }, use) => {
    await use(new BillPayPage(page));
  },
  openAccountPage: async ({ page }, use) => {
    await use(new OpenAccountPage(page));
  },
  authenticatedPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login(TestUsers.existing.username, TestUsers.existing.password);
    await use();
  },
});

export { expect } from '@playwright/test';
