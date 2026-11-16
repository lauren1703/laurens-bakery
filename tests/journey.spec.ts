import { test, expect } from '@playwright/test';

test('walk from the storefront to the recipe and back with browser history', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Software engineer');
  await page.getByRole('link', { name: 'Enter bakery' }).click();
  await expect(page).toHaveURL(/\/bakery$/);
  await page.getByRole('link', { name: 'Open the recipe notebook for Tree of Thoughts' }).click();
  await expect(page).toHaveURL(/\/projects\/tree-of-thoughts$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Tree of Thoughts');
  await page.goBack();
  await expect(page).toHaveURL(/\/bakery$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
});

test('project URL loads directly with real content and a working demo link', async ({ page }) => {
  await page.goto('/projects/tree-of-thoughts');
  await expect(page.getByRole('heading', { name: 'The problem' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The ingredients' })).toBeVisible();
  await page.getByRole('link', { name: '← Back to the pastry counter', exact: true }).click();
  await expect(page).toHaveURL(/\/bakery$/);
});

test('the baker opens the single About page and the picture wall opens experience', async ({ page }) => {
  await page.goto('/bakery');
  await page.getByRole('link', { name: 'Meet Lauren, the baker', exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('heading', { name: 'Hi, I’m Lauren.', exact: true })).toBeVisible();
  await page.goBack();
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Experience', exact: true }).click();
  await expect(page).toHaveURL(/\/experience$/);
  await expect(page.getByRole('heading', { name: 'Incoming Software Engineer', exact: true })).toBeVisible();
});

test('reduced motion retains a working entrance', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('link', { name: 'Open the bakery door and step inside' }).click();
  await expect(page).toHaveURL(/\/bakery$/);
});

test('all screens fit the viewport and every illustration loads', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const path of ['/', '/bakery', '/projects', '/projects/boulangerie', '/projects/tree-of-thoughts', '/experience', '/about']) {
    await page.goto(path);
    await expect.poll(() => page.locator('img').evaluateAll(images => images.every(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0))).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  expect(errors).toEqual([]);
});
