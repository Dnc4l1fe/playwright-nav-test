
import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Home page: h1 and title', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Home');
    await expect(page).toHaveTitle('Home');
  });

  test('About link: URL, h1, and title', async ({ page }) => {
    await page.click('a[href="about.html"]');
    await expect(page).toHaveURL(/about\.html$/);
    await expect(page.locator('h1')).toHaveText('About');
    await expect(page).toHaveTitle('About');
  });

  test('Contact link: URL, h1, and title', async ({ page }) => {
    await page.click('a[href="contact.html"]');
    await expect(page).toHaveURL(/contact\.html$/);
    await expect(page.locator('h1')).toHaveText('Contact');
    await expect(page).toHaveTitle('Contact');
  });
});
