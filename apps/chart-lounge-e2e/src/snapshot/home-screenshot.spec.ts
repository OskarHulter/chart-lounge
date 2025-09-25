import { test, expect } from '@playwright/test';

test('Home page screenshot matches previous run', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  // eslint-disable-next-line playwright/no-wait-for-timeout
  await page.waitForTimeout(2000);

  const locator = page.locator('body').describe('Targets the full page');
  const screenshot = await locator.screenshot(); // { fullPage: true }

  // If the test fails, save the actual screenshot for inspection
  test.info().attach('actual-screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });

  await expect(screenshot).toMatchSnapshot('baseline-home.png', {
    threshold: 0.2,
    maxDiffPixelRatio: 0.01,
  });
});
