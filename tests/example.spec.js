import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'mobile app' }).first().click();
  await page.getByRole('link', { name: 'contact us' }).first().click();
  await page.getByRole('link', { name: 'basket' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('form').getByRole('img', { name: 'x' }).click();
  await page.getByRole('link', { name: 'home' }).first().click();
  await page.getByRole('button', { name: 'View Menu' }).click();
  await page.getByRole('img', { name: 'Noodles' }).click();
  await page.getByRole('img', { name: 'plus' }).nth(2).click();
  await page.getByRole('link', { name: 'basket' }).click();
  await page.getByRole('button', { name: 'x' }).click();
});