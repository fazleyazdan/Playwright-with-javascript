const {test, expect} = require('@playwright/test')


test('radio buttons', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // assertions we can do on text input
    await expect(await page.locator('#male')).toBeVisible()
    await page.locator('#male').check()                         // select radio buttons


    await expect(await page.locator('#male')).toBeChecked()     // Validate radio Button is selected
    
    // some other assertions
    await expect(await page.locator('#male').isChecked()).toBeTruthy()     // Code Commentary below
    await expect(await page.locator('#female').isChecked()).toBeFalsy()    // Code Commentary below
   

    await page.waitForTimeout(5000)            // wait for 5 sec before closing the browser


})

//* await expect(await page.locator('#male').isChecked()).toBeTruthy()                         

//* (await page.locator('#male').isChecked()): this statement will return True because the radio button is checked
//* await expect(true).toBeTruthy() : will pass because true is always truthy.


//* await expect(await page.locator('#female').isChecked()).toBeFalsy()                         

//* (await page.locator('#female').isChecked()): this statement will return False because the radio button is not checked
//* await expect(false).toBeFalsy() : will pass because false is always falsy.


