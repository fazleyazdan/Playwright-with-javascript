import { expect, test } from '@playwright/test';

test("landing page", async({page}) => {

    await page.goto("https://sequenx.com/")

    // validation
    await expect(page).toHaveTitle(/SeQuenX/)

    await page.waitForTimeout(1000)
})
