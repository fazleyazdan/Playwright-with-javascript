const {test, expect} = require('@playwright/test')


test('check boxes', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // single checkbox
    await expect(await page.locator('#wednesday')).toBeVisible()
    await page.locator('#wednesday').check()                         // check the checkbox


    await expect(await page.locator('#male')).toBeChecked()     // Validate Check box is checked
    
    // some other assertions
    await expect(await page.locator('#male').isChecked()).toBeTruthy()     // Code Commentary below
    await expect(await page.locator('#female').isChecked()).toBeFalsy()    // Code Commentary below
   
    await page.waitForTimeout(5000)            // wait for 5 sec before closing the browser


})