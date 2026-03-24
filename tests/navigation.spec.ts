import { test, expect } from '@playwright/test'

const pages = [
  { path: '/', heading: 'The moment,' },
  { path: '/about', heading: 'We started this because moments matter.' },
  { path: '/services', heading: 'Considered experiences, designed for your day.' },
  { path: '/faq', heading: 'A few things people like to know.' },
  { path: '/contact', heading: 'Let\u2019s talk about your gathering.' },
  { path: '/thank-you', heading: 'Thank You!' },
  { path: '/privacy-policy', heading: 'Privacy Policy' },
  { path: '/terms-of-use', heading: 'Terms of Use' },
]

test.describe('Page navigation', () => {
  for (const { path, heading } of pages) {
    test(`${path} loads and shows heading`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', (err) => errors.push(err.message))

      const response = await page.goto(path)
      expect(response?.status()).toBe(200)

      await expect(page.locator('h1')).toContainText(heading)
      expect(errors).toHaveLength(0)
    })
  }
})
