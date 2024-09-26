import {test, expect } from '@playwright/test';
const dotenv = require('dotenv')

// load environment variables
dotenv.config()

test('login - valid credentials', async({page}) => {

    const email = process.env.EMAIL
    const password = process.env.PASSWORD

    await page.goto("https://workpermitconsultancy.com/")

    await page.click("//a[normalize-space()='Sign in']")
    await page.fill("#identifier-field", email)
    await page.click(".cl-formButtonPrimary")
    await page.fill("#password-field", password)
    await page.click(".cl-formButtonPrimary")
    await page.click(".cl-userButtonAvatarImage")
    
    //* validate the logged email
    await expect(page.locator(".cl-internal-1ptfnbv")).toHaveText(email)

    await page.waitForTimeout(2000)
    
})
