import { authenticatedTest as test, expect } from '../fixtures/test-fixtures';
import { TransferAmounts } from '../utils/TestData';

test.describe('Fund Transfer Tests', () => {
  test.beforeEach(async ({ accountOverviewPage }) => {
    await accountOverviewPage.transferFunds();
  });

  test('should display transfer form', async ({ transferPage }) => {
    await expect(transferPage.amountInput).toBeVisible();
    await expect(transferPage.fromAccountSelect).toBeVisible();
    await expect(transferPage.toAccountSelect).toBeVisible();
    await expect(transferPage.transferButton).toBeVisible();
  });

  test('should transfer funds between accounts', async ({ transferPage }) => {
    const fromOptions = await transferPage.getFromAccountOptions();
    const toOptions = await transferPage.getToAccountOptions();
    
    if (fromOptions.length > 0 && toOptions.length > 0) {
      await transferPage.transfer(
        TransferAmounts.small,
        fromOptions[0],
        toOptions[toOptions.length - 1]
      );
      
      expect(await transferPage.isTransferSuccessful()).toBe(true);
    }
  });

  test('should show error for empty amount', async ({ transferPage }) => {
    const fromOptions = await transferPage.getFromAccountOptions();
    const toOptions = await transferPage.getToAccountOptions();
    
    if (fromOptions.length > 0 && toOptions.length > 0) {
      await transferPage.transfer('', fromOptions[0], toOptions[0]);
      const error = await transferPage.getErrorMessage();
      expect(error).not.toBeNull();
    }
  });

  test('should show transferred amount in confirmation', async ({ transferPage }) => {
    const fromOptions = await transferPage.getFromAccountOptions();
    const toOptions = await transferPage.getToAccountOptions();
    
    if (fromOptions.length > 0 && toOptions.length > 1) {
      await transferPage.transfer(
        TransferAmounts.medium,
        fromOptions[0],
        toOptions[1]
      );
      
      const amount = await transferPage.getTransferredAmount();
      expect(amount).toContain(TransferAmounts.medium);
    }
  });
});
