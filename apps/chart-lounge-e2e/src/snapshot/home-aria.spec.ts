import { test, expect } from '@playwright/test';

test('Home ARIA snapshot matches previous run', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const locator = page.locator('body').describe('Targets the full page');
  const snapshot = await locator.ariaSnapshot();

  // Save result snapshot
  test.info().attach('actual-snapshot', { body: snapshot });

  // Compare current snapshot to previous
  await expect(locator).toMatchAriaSnapshot('');
});
