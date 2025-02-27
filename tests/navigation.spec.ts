import { expect, test } from '@playwright/test';

test('navigation in header works', async ({ page }) => {
  await page.goto('/');

  const navigation = page.getByRole('navigation')

  await navigation.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL('about');

  await navigation.getByRole('link', { name: 'Videos' }).click();
  await expect(page).toHaveURL('videos');

  await navigation.getByRole('link', { name: 'Podcasts' }).click();
  await expect(page).toHaveURL('podcasts');

  await navigation.getByRole('link', { name: 'Courses' }).click();
  await expect(page).toHaveURL('courses');

  await navigation.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveURL('blog');

  await page.getByRole('link', { name: 'Debbie O\'Brien Debbie O\'Brien' }).click();
  await expect(page).toHaveURL('/');
});
