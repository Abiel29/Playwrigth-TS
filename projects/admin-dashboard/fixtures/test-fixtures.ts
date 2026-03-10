import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';
import { EmployeeListPage } from '../pages/EmployeeListPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { TestUsers } from '../utils/TestData';

type AdminPages = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  adminPage: AdminPage;
  employeeListPage: EmployeeListPage;
  addEmployeePage: AddEmployeePage;
};

type AuthenticatedPages = AdminPages & {
  authenticatedPage: void;
};

export const test = base.extend<AdminPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  employeeListPage: async ({ page }, use) => {
    await use(new EmployeeListPage(page));
  },
  addEmployeePage: async ({ page }, use) => {
    await use(new AddEmployeePage(page));
  },
});

export const authenticatedTest = base.extend<AuthenticatedPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  employeeListPage: async ({ page }, use) => {
    await use(new EmployeeListPage(page));
  },
  addEmployeePage: async ({ page }, use) => {
    await use(new AddEmployeePage(page));
  },
  authenticatedPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.login(TestUsers.admin.username, TestUsers.admin.password);
    // Wait longer for slow OrangeHRM demo server
    await page.waitForURL(/dashboard/, { timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 30000 });
    await use();
  },
});

export { expect } from '@playwright/test';
