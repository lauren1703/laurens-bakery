import { test, expect } from '@playwright/test';

test('the entrance stays within laptop and phone screens', async ({ page }) => {
  for (const viewport of [
    { width: 1512, height: 757 },
    { width: 1024, height: 600 },
    { width: 909, height: 695 },
    { width: 390, height: 844 },
    { width: 320, height: 568 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect.poll(() => page.locator('.site-shell').evaluate(element => element.getBoundingClientRect().bottom <= innerHeight)).toBe(true);
    const entrance = page.getByRole('link', { name: 'Enter bakery', exact: true });
    await expect(entrance).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('the first pastry opens the project and the café table opens connection links', async ({ page, isMobile }) => {
  await page.goto('/bakery');
  const first = page.locator('.pastry-object').first();
  await expect(first).toHaveAttribute('href', '/projects/tree-of-thoughts');
  if (!isMobile) {
    await expect(page.locator('main a[href="/experience"]')).toHaveCount(1);
  }
  const connect = page.getByRole('button', { name: 'Let’s connect', exact: true });
  await connect.click();
  const note = page.getByRole('dialog');
  await expect(note).toBeVisible();
  await expect(note.getByRole('link', { name: 'GitHub', exact: false })).toHaveAttribute('href', 'https://github.com/lauren1703');
  await page.keyboard.press('Escape');
  await expect(note).not.toBeVisible();
  await expect(connect).toBeFocused();
});

test('each supplied hobby photo appears under its description', async ({ page }) => {
  await page.goto('/about');
  const note = page.getByRole('region', { name: 'Selected magnet story' });
  for (const name of ['Tennis', 'Snowboarding', 'Cooking', 'Home cafés', 'Doing my nails']) {
    await page.getByRole('button', { name, exact: true }).click();
    await expect(note.getByRole('heading', { name, exact: true })).toBeVisible();
    await expect.poll(() => note.locator('img').evaluate(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.getByRole('button', { name: 'Vlogging', exact: true }).click();
  await expect(note.getByRole('heading', { name: 'Vlogging', exact: true })).toBeVisible();
  await expect(note.locator('img')).toHaveCount(0);
  await expect(page).toHaveURL(/\/about$/);
});
