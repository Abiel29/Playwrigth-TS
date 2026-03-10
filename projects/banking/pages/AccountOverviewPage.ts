import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountOverviewPage extends BasePage {
  readonly pageUrl = /overview/;
  readonly welcomeMessage: Locator;
  readonly accountsTable: Locator;
  readonly accountRows: Locator;
  readonly totalBalance: Locator;
  readonly openNewAccountLink: Locator;
  readonly transferFundsLink: Locator;
  readonly billPayLink: Locator;
  readonly findTransactionsLink: Locator;
  readonly updateContactLink: Locator;
  readonly requestLoanLink: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeMessage = page.locator('.smallText');
    this.accountsTable = page.locator('#accountTable');
    this.accountRows = page.locator('#accountTable tbody tr');
    this.totalBalance = page.locator('#accountTable tfoot td:last-child');
    this.openNewAccountLink = page.locator('a[href*="openaccount"]');
    this.transferFundsLink = page.locator('a[href*="transfer"]');
    this.billPayLink = page.locator('a[href*="billpay"]');
    this.findTransactionsLink = page.locator('a[href*="findtrans"]');
    this.updateContactLink = page.locator('a[href*="updateprofile"]');
    this.requestLoanLink = page.locator('a[href*="requestloan"]');
    this.logoutLink = page.locator('a[href*="logout"]');
  }

  async getAccountsCount(): Promise<number> {
    return this.accountRows.count();
  }

  async getAccountBalance(accountIndex: number): Promise<string | null> {
    return this.accountRows.nth(accountIndex).locator('td:nth-child(2)').textContent();
  }

  async getTotalBalance(): Promise<string | null> {
    return this.totalBalance.textContent();
  }

  async clickAccount(accountIndex: number) {
    await this.accountRows.nth(accountIndex).locator('a').click();
  }

  async openNewAccount() {
    await this.openNewAccountLink.click();
    await expect(this.page).toHaveURL(/openaccount/);
  }

  async transferFunds() {
    await this.transferFundsLink.click();
    await expect(this.page).toHaveURL(/transfer/);
  }

  async billPay() {
    await this.billPayLink.click();
    await expect(this.page).toHaveURL(/billpay/);
  }

  async requestLoan() {
    await this.requestLoanLink.click();
    await expect(this.page).toHaveURL(/requestloan/);
  }

  async logout() {
    await this.logoutLink.click();
  }

  async getAccountIds(): Promise<string[]> {
    return this.accountRows.locator('td:first-child a').allTextContents();
  }
}
