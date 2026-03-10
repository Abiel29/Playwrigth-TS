import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class EmployeeListPage extends BasePage {
  readonly pageUrl = /pim\/viewEmployeeList/;
  readonly pageTitle: Locator;
  readonly addEmployeeButton: Locator;
  readonly searchEmployeeName: Locator;
  readonly searchEmployeeId: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly employeeTable: Locator;
  readonly employeeRows: Locator;
  readonly noRecordsMessage: Locator;
  readonly deleteButton: Locator;
  readonly editButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('.oxd-topbar-header-breadcrumb h6');
    this.addEmployeeButton = page.locator('button:has-text("Add")');
    this.searchEmployeeName = page.locator('.oxd-form .oxd-autocomplete-wrapper input').first();
    this.searchEmployeeId = page.locator('.oxd-form input').nth(1);
    this.searchButton = page.locator('button[type="submit"]');
    this.resetButton = page.locator('button[type="reset"]');
    this.employeeTable = page.locator('.oxd-table');
    this.employeeRows = page.locator('.oxd-table-body .oxd-table-row');
    this.noRecordsMessage = page.locator('.oxd-table-body .oxd-text--span');
    this.deleteButton = page.locator('.oxd-icon-button--danger');
    this.editButton = page.locator('.oxd-icon-button--info');
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
    await expect(this.page).toHaveURL(/pim\/addEmployee/);
  }

  async searchByName(name: string) {
    await this.searchEmployeeName.fill(name);
    await this.page.waitForTimeout(500);
    await this.page.locator('.oxd-autocomplete-option').first().click();
  }

  async searchById(id: string) {
    await this.searchEmployeeId.fill(id);
  }

  async clickSearch() {
    await this.searchButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickReset() {
    await this.resetButton.click();
  }

  async getEmployeeCount(): Promise<number> {
    return this.employeeRows.count();
  }

  async editEmployee(index: number) {
    await this.employeeRows.nth(index).locator('.oxd-icon-button--info').click();
  }

  async deleteEmployee(index: number) {
    await this.employeeRows.nth(index).locator('.oxd-icon-button--danger').click();
    await this.page.locator('.oxd-button--label-danger').click();
  }

  async hasNoRecords(): Promise<boolean> {
    const text = await this.noRecordsMessage.textContent();
    return text?.includes('No Records Found') || false;
  }
}
