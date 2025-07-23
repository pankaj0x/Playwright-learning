import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // ✅ Both HTML and Allure reporters added
  reporter: [
    ['html'],
    ['allure-playwright'],
  ],

  timeout: 60 * 1000, // Global test timeout

  expect: {
    timeout: 60 * 1000, // Timeout for expect()
  },

  use: {
    actionTimeout: 60 * 1000,
    navigationTimeout: 60 * 1000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
});