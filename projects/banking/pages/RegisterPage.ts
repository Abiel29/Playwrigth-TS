import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  readonly pageUrl = /register/;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly ssnInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('#customer\\.firstName');
    this.lastNameInput = page.locator('#customer\\.lastName');
    this.addressInput = page.locator('#customer\\.address\\.street');
    this.cityInput = page.locator('#customer\\.address\\.city');
    this.stateInput = page.locator('#customer\\.address\\.state');
    this.zipCodeInput = page.locator('#customer\\.address\\.zipCode');
    this.phoneInput = page.locator('#customer\\.phoneNumber');
    this.ssnInput = page.locator('#customer\\.ssn');
    this.usernameInput = page.locator('#customer\\.username');
    this.passwordInput = page.locator('#customer\\.password');
    this.confirmPasswordInput = page.locator('#repeatedPassword');
    this.registerButton = page.locator('input[value="Register"]');
    this.successMessage = page.locator('#rightPanel h1');
    this.errorMessage = page.locator('.error');
  }

  async goto() {
    await this.page.goto('/parabank/register.htm');
    await this.waitForPageLoad();
  }

  async fillRegistrationForm(user: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
  }) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.addressInput.fill(user.address);
    await this.cityInput.fill(user.city);
    await this.stateInput.fill(user.state);
    await this.zipCodeInput.fill(user.zipCode);
    await this.phoneInput.fill(user.phone);
    await this.ssnInput.fill(user.ssn);
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);
  }

  async clickRegister() {
    await this.registerButton.click();
  }

  async register(user: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
  }) {
    await this.fillRegistrationForm(user);
    await this.clickRegister();
  }

  async isRegistrationSuccessful(): Promise<boolean> {
    const message = await this.successMessage.textContent();
    return message?.includes('Welcome') || false;
  }
}
