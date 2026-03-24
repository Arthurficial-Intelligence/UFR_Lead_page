import { test, expect } from '@playwright/test'

test.describe('Mobile menu', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('hamburger menu opens, shows links, and navigates', async ({ page }) => {
    await page.goto('/')

    // Hamburger button should be visible
    const menuButton = page.locator('button[aria-label="Open menu"]')
    await expect(menuButton).toBeVisible()

    // Open menu
    await menuButton.click()

    // Nav links should now be visible in the mobile menu (scoped outside <nav>)
    const mobileMenu = page.locator('header > div')
    const aboutLink = mobileMenu.locator('a', { hasText: 'About' })
    await expect(aboutLink).toBeVisible()
    await expect(mobileMenu.locator('a', { hasText: 'Services' })).toBeVisible()
    await expect(mobileMenu.locator('a', { hasText: 'Contact' })).toBeVisible()

    // Click a nav link
    await aboutLink.click()

    // Should navigate to /about
    await expect(page).toHaveURL('/about')

    // Menu should be closed after navigation
    await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible()
  })

  test('hamburger menu closes when clicking close button', async ({ page }) => {
    await page.goto('/')

    // Open menu
    await page.click('button[aria-label="Open menu"]')
    await expect(page.locator('header > div').locator('a', { hasText: 'About' })).toBeVisible()

    // Close menu
    await page.click('button[aria-label="Close menu"]')

    // Menu should be closed
    await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible()
  })
})
