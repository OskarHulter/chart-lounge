import { BASE_URL, DEV_URL, projects } from './default';
import { workspaceRoot } from '@nx/devkit';
import { PlaywrightTestConfig } from '@playwright/test';
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export const defaultPlaywrightConfig: PlaywrightTestConfig = {
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env['BASE_URL'] || BASE_URL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: 'test-id',
  },
  // Look for test files in the "tests" directory, relative to this configuration file. tests/e2e
  // testDir: 'tests',
  // Run all tests in parallel.
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  updateSnapshots: process.env.CI ? 'all' : 'changed',
  ignoreSnapshots: process.env.CI ? true : false,
  // Reporter to use
  reporter: 'html',
  snapshotPathTemplate:
    '__screenshots__{/projectName}/{testFilePath}/{arg}{ext}',
  webServer: {
    command: 'yarn nx run @chart-lounge/chart-lounge:start',
    url: process.env['BASE_URL'] || DEV_URL,
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
  },
  projects: [...projects],
};
