import { expect, test } from '@playwright/test';

test.describe('PulseMarket Dashboard', () => {
  test('opens the English dashboard', async ({ page }) => {
    await page.goto('/en');

    await expect(page).toHaveURL(/\/en\/?$/);
  });

  test('opens the Ukrainian dashboard', async ({ page }) => {
    await page.goto('/uk');

    await expect(page).toHaveURL(/\/uk\/?$/);
  });
});
