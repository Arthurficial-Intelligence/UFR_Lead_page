import { test, expect } from '@playwright/test'

test.describe('Contact form validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('empty form submission is blocked by required email field', async ({ page }) => {
    const emailInput = page.locator('#email')
    await expect(emailInput).toHaveAttribute('required', '')

    // Click submit without filling anything
    await page.click('button[type="submit"]')

    // Form should NOT show success or error — native validation blocks submission
    await expect(page.locator('text=Thank You!')).not.toBeVisible()
    // Exclude Next.js route announcer; check for app-level alert elements only
    await expect(page.locator('[role="alert"]:not(#__next-route-announcer__)')).not.toBeVisible()
  })

  test('invalid email is rejected by browser validation', async ({ page }) => {
    await page.fill('#email', 'not-an-email')
    await page.click('button[type="submit"]')

    // Native email validation blocks submission — form stays in place
    await expect(page.locator('text=Thank You!')).not.toBeVisible()
  })

  test('valid email only — form submits successfully', async ({ page }) => {
    const testEmail = `test+validation-${Date.now()}@unfilteredrays.com`
    await page.fill('#email', testEmail)
    await page.click('button[type="submit"]')

    // Should show inline success message
    await expect(page.locator('text=Thank You!')).toBeVisible({ timeout: 10_000 })
  })
})
