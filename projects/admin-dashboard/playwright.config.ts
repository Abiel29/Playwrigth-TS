import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Disable parallel to reduce load on slow external server
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 3 : 1, // More retries for flaky external server
  workers: 1, // Single worker to avoid overwhelming the demo server
  timeout: 90000, // 90s per test (server is very slow)
  reporter: [
    ['html', { open: 'never', outputFolder: '../../playwright-report/admin-dashboard' }],
    ['list'],
  ],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 45000, // 45s for actions (was 15s)
    navigationTimeout: 60000, // 60s for navigation (was 30s)
  },
  expect: {
    timeout: 30000, // 30s for assertions (was 10s)
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  outputDir: '../../test-results/admin-dashboard/',
});
