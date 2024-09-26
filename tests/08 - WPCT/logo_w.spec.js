import {test, expect} from '@playwright/test'

test('logo enabled', async ({page}) => {

    await page.goto("https://workpermitconsultancy.com/")

    const logo = await page.locator("//header/nav/div/a[contains(.,'Consultancy')]")

    await expect(logo.isVisible()).toBeTruthy()
    
    await page.waitForTimeout(2000)
})