import {test, expect} from '@playwright/test'

test('logo enabled', async ({page}) => {

    await page.goto("https://sequenx.com/")

    const logo_loc = await page.locator("//a/img[@alt='logo']")

    await expect(logo_loc.isEnabled()).toBeTruthy()
    await expect(logo_loc.isVisible()).toBeTruthy()
    
    await page.waitForTimeout(2000)
})