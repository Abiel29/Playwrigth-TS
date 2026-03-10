import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddEmployeePage extends BasePage {
  readonly pageUrl = /pim\/addEmployee/;
  readonly pageTitle: Locator;
  readonly firstNameInput: Locator;
  readonly middleNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly createLoginToggle: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly errorMessage: Locator;
  readonly profileImage: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator('.oxd-topbar-header-breadcrumb h6');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.middleNameInput = page.locator('input[name="middleName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.employeeIdInput = page.locator('.oxd-form-row .oxd-input').nth(4);
    this.createLoginToggle = page.locator('.oxd-switch-input');
    this.usernameInput = page.locator('.oxd-form-row:has-text("Username") input');
    this.passwordInput = page.locator('input[type="password"]').first();
    this.confirmPasswordInput = page.locator('input[type="password"]').nth(1);
    this.saveButton = page.locator('button[type="submit"]');
    this.cancelButton = page.locator('button[type="button"]:has-text("Cancel")');
    this.errorMessage = page.locator('.oxd-input-field-error-message');
    this.profileImage = page.locator('.orangehrm-employee-image');
  }

  async fillEmployeeDetails(employee: {
    firstName: string;
    middleName?: string;
    lastName: string;
    employeeId?: string;
  }) {
    await this.firstNameInput.fill(employee.firstName);
    if (employee.middleName) {
      await this.middleNameInput.fill(employee.middleName);
    }
    await this.lastNameInput.fill(employee.lastName);
    if (employee.employeeId) {
      await this.employeeIdInput.clear();
      await this.employeeIdInput.fill(employee.employeeId);
    }
  }

  async enableLoginDetails() {
    await this.createLoginToggle.click();
  }

  async fillLoginDetails(username: string, password: string) {
    await this.enableLoginDetails();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async addEmployee(employee: {
    firstName: string;
    middleName?: string;
    lastName: string;
    employeeId?: string;
  }) {
    await this.fillEmployeeDetails(employee);
    await this.clickSave();
  }

  async addEmployeeWithLogin(
    employee: {
      firstName: string;
      middleName?: string;
      lastName: string;
      employeeId?: string;
    },
    username: string,
    password: string
  ) {
    await this.fillEmployeeDetails(employee);
    await this.fillLoginDetails(username, password);
    await this.clickSave();
  }

  async getErrorMessages(): Promise<string[]> {
    return this.errorMessage.allTextContents();
  }
}
