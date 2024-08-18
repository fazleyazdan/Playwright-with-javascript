const {test, expect} = require('@playwright/test')


test('check boxes', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // select single checkbox
    await expect(await page.locator('#wednesday')).toBeVisible()
    await page.locator('#wednesday').check()                     // check the checkbox

    await expect(await page.locator('#wednesday')).toBeChecked()
    await expect(await page.locator('#wednesday').isChecked()).toBeTruthy()
    
    // select all checkboxes having same locators
    // here we will select all check boxes at once which has the same locator

    const checkboxes_list = await page.$$("//input[contains(@value,'day')]")

    for (const checkbox of checkboxes_list)
    {
        await checkbox.check()
    }

    await page.waitForTimeout(2000)

    // select multiple checkboxes having different locators
    // first we will store those locators in an array
    
    const checkboxes_list1 = ['#monday', '#tuesday', '#wednesday']

    for (const checkboxes of checkboxes_list1)
    {
        await page.locator(checkboxes).uncheck()             // uncheck them as they are already checked.
    }
    await page.waitForTimeout(5000)            


})