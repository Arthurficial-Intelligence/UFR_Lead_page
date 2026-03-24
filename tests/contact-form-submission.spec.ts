import { test, expect } from '@playwright/test'

test.describe('Contact form submission', () => {
  test('fills all fields and submits successfully', async ({ page }) => {
    await page.goto('/contact')

    // Fill all fields
    await page.fill('#name', 'CI Test User')
    await page.fill('#email', `test+ci-${Date.now()}@unfilteredrays.com`)
    await page.fill('#phone', '6155551234')
    await page.fill('#eventDate', '2026-06-15')
    await page.selectOption('#eventType', 'Wedding')
    await page.fill('#message', 'Automated test submission from Playwright CI')

    // Submit
    await page.click('button[type="submit"]')

    // Should show inline success message (not a redirect)
    await expect(page.locator('text=Thank You!')).toBeVisible({ timeout: 15_000 })
    await expect(page.locator('text=We\u2019ve received your inquiry')).toBeVisible()
  })
})
