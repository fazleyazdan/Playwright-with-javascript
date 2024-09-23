import { expect, test } from '@playwright/test';

test("visiting web page", async({page}) => {

    await page.goto("https://workpermitconsultancy.com/")

    // validation
    await expect(page).toHaveTitle(/Work Permit/)

    await page.waitForTimeout(1000)
})