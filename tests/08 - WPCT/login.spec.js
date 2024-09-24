import {test, expect } from '@playwright/test';

test('login - valid credentials', async({page}) => {

    const email = "fazleyazdan345@gmail.com"
    await page.goto("https://workpermitconsultancy.com/")

    await page.click("//a[normalize-space()='Sign in']")
    await page.fill("#identifier-field", email)
    await page.click(".cl-formButtonPrimary")
    await page.fill("#password-field", "777Fslfs!.")
    await page.click(".cl-formButtonPrimary")
    await page.click(".cl-userButtonAvatarImage")
    
    //* validate the logged email
    await expect(page.locator(".cl-internal-1ptfnbv")).toHaveText(email)

    await page.waitForTimeout(2000)
    
})
