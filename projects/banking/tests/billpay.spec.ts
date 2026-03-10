import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { PayeeData, TransferAmounts } from '../utils/TestData';

test.describe('Bill Pay Tests', () => {
  test.beforeEach(async ({ authenticatedPage, accountOverviewPage }) => {
    await accountOverviewPage.billPay();
  });

  test('should display bill pay form', async ({ billPayPage }) => {
    await expect(billPayPage.payeeNameInput).toBeVisible();
    await expect(billPayPage.amountInput).toBeVisible();
    await expect(billPayPage.sendPaymentButton).toBeVisible();
  });

  test('should pay bill successfully', async ({ billPayPage }) => {
    await billPayPage.fillPayeeInfo(PayeeData.utility);
    await billPayPage.setAmount(TransferAmounts.medium);
    await billPayPage.sendPayment();
    
    expect(await billPayPage.isPaymentSuccessful()).toBe(true);
  });

  test('should show error for empty payee name', async ({ billPayPage }) => {
    await billPayPage.fillPayeeInfo({
      ...PayeeData.utility,
      name: '',
    });
    await billPayPage.setAmount(TransferAmounts.small);
    await billPayPage.sendPayment();
    
    const error = await billPayPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should show error for empty amount', async ({ billPayPage }) => {
    await billPayPage.fillPayeeInfo(PayeeData.utility);
    await billPayPage.setAmount('');
    await billPayPage.sendPayment();
    
    const error = await billPayPage.getErrorMessage();
    expect(error).not.toBeNull();
  });

  test('should show error for mismatched account numbers', async ({ page, billPayPage }) => {
    await billPayPage.payeeNameInput.fill(PayeeData.utility.name);
    await billPayPage.addressInput.fill(PayeeData.utility.address);
    await billPayPage.cityInput.fill(PayeeData.utility.city);
    await billPayPage.stateInput.fill(PayeeData.utility.state);
    await billPayPage.zipCodeInput.fill(PayeeData.utility.zipCode);
    await billPayPage.phoneInput.fill(PayeeData.utility.phone);
    await billPayPage.accountNumberInput.fill('12345');
    await billPayPage.verifyAccountInput.fill('54321'); // Different number
    await billPayPage.setAmount(TransferAmounts.small);
    await billPayPage.sendPayment();
    
    const error = await billPayPage.getErrorMessage();
    expect(error).not.toBeNull();
  });
});
