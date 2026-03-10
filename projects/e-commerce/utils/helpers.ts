import { Page } from '@playwright/test';

export async function waitForNetworkIdle(page: Page, timeout = 5000) {
  await page.waitForLoadState('networkidle', { timeout });
}

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
}

export function generateRandomEmail(): string {
  const timestamp = Date.now();
  return `test_${timestamp}@example.com`;
}

export function generateRandomString(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function retryAction<T>(
  action: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error | undefined;
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await action();
    } catch (error) {
      lastError = error as Error;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}
