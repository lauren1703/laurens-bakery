import { test, expect } from '@playwright/test';

test('the cinnamon roll opens the research project with distinct experiment samples', async ({ page }) => {
  await page.goto('/bakery');
  await page.getByRole('link', { name: 'Open the recipe notebook for Tree of Thoughts', exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/tree-of-thoughts$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Tree of Thoughts');
  const results = page.getByRole('table');
  await expect(results.getByRole('caption')).toHaveText('Main experiment · 50-puzzle sample');
  await expect(results.getByRole('row').filter({ hasText: 'Tree of Thoughts (BFS)' })).toContainText('88%');
  await expect(page.getByText('A separate experiment · 20 puzzles')).toBeVisible();
  await expect(page.getByRole('link', { name: 'View code', exact: false })).toHaveAttribute('href', 'https://github.com/yunseoo2/deep-learning-tree-of-thought');
  const report = await page.request.get('/projects/tree-of-thoughts/report.pdf');
  expect(report.status()).toBe(200);
  expect(report.headers()['content-type']).toContain('application/pdf');
});

test('experience separates the upcoming role, completed internship, and teaching', async ({ page }) => {
  await page.goto('/experience');
  const rippling = page.locator('article#rippling');
  await expect(rippling).toContainText('Starting June 2027 · New York');
  await expect(rippling).toContainText('May – August 2026');
  await expect(page.locator('article#psyflo')).toContainText('June – August 2025');
  await page.getByRole('link', { name: 'Visit the classroom', exact: false }).click();
  await expect(page).toHaveURL(/#teaching$/);
  const classroom = page.locator('#teaching');
  await expect(classroom.getByRole('heading', { name: 'Intro to Backend Development' })).toBeVisible();
  await expect(classroom).toContainText('80+');
  await expect(classroom).toContainText('~90%');
  await expect(classroom).toContainText('4.7/5');
  await expect(page.getByText('Graduating in 2027, one year early.', { exact: false })).toBeVisible();
});

test('professional links use the supplied profiles', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('main').getByRole('link', { name: 'GitHub', exact: false })).toHaveAttribute('href', 'https://github.com/lauren1703');
  await expect(page.getByRole('main').getByRole('link', { name: 'LinkedIn', exact: false })).toHaveAttribute('href', 'https://www.linkedin.com/in/lauren-ahhot/');
});

test('fridge magnets reveal interests without navigating away from About', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'Hi, I’m Lauren.', exact: true })).toBeVisible();
  const story = page.getByRole('region', { name: 'Selected magnet story', exact: true });
  const tennis = page.getByRole('button', { name: 'Tennis', exact: true });
  await tennis.click();
  await expect(tennis).toHaveAttribute('aria-pressed', 'true');
  await expect(story).toContainText('Tennis');
  await expect(story).toContainText('Description coming soon.');
  const nails = page.getByRole('button', { name: 'Doing my nails', exact: true });
  await nails.focus();
  await page.keyboard.press('Enter');
  await expect(nails).toHaveAttribute('aria-pressed', 'true');
  await expect(story).toContainText('Doing my nails');
  await expect(story).toContainText('Description coming soon.');
  await expect(tennis).toHaveAttribute('aria-pressed', 'false');
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('button', { pressed: true })).toHaveCount(1);
});
