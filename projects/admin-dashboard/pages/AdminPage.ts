import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPage extends BasePage {
  readonly pageUrl = /admin\/viewSystemUsers/;
  readonly pageTitle: Locator;
  readonly addUserButton: Locator;
  readonly searchUsername: Locator;
  readonly searchUserRole: Locator;
  readonly searchEmployeeName: Locator;
  readonly searchStatus: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly userTable: Locator;
  readonly userRows: Locator;
  readonly deleteButton: Locator;
  readonly editButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('.oxd-topbar-header-breadcrumb h6');
    this.addUserButton = page.locator('button:has-text("Add")');
    this.searchUsername = page.locator('.oxd-form-row .oxd-input').nth(1);
    this.searchUserRole = page.locator('.oxd-form-row .oxd-select-wrapper').first();
    this.searchEmployeeName = page.locator('.oxd-form-row .oxd-autocomplete-wrapper input');
    this.searchStatus = page.locator('.oxd-form-row .oxd-select-wrapper').nth(1);
    this.searchButton = page.locator('button[type="submit"]');
    this.resetButton = page.locator('button[type="reset"]');
    this.userTable = page.locator('.oxd-table');
    this.userRows = page.locator('.oxd-table-body .oxd-table-row');
    this.deleteButton = page.locator('.oxd-icon-button--danger');
    this.editButton = page.locator('.oxd-icon-button--info');
  }

  async clickAddUser() {
    await this.addUserButton.click();
    await expect(this.page).toHaveURL(/admin\/saveSystemUser/);
  }

  async searchByUsername(username: string) {
    await this.searchUsername.fill(username);
  }

  async selectUserRole(role: 'Admin' | 'ESS') {
    await this.searchUserRole.click();
    await this.page.locator(`.oxd-select-option:has-text("${role}")`).click();
  }

  async selectStatus(status: 'Enabled' | 'Disabled') {
    await this.searchStatus.click();
    await this.page.locator(`.oxd-select-option:has-text("${status}")`).click();
  }

  async clickSearch() {
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickReset() {
    await this.resetButton.click();
  }

  async getUserCount(): Promise<number> {
    return this.userRows.count();
  }

  async editUser(index: number) {
    await this.userRows.nth(index).locator('.oxd-icon-button--info').click();
  }

  async deleteUser(index: number) {
    await this.userRows.nth(index).locator('.oxd-icon-button--danger').click();
    await this.page.locator('.oxd-button--label-danger').click();
  }
}
