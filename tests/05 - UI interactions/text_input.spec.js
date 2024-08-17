const {test, expect} = require('@playwright/test')


test('text input', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const input_box = await page.locator('#name')
    const input_box1 = await page.locator('#email') 

    // assertions we can do on text input
    await expect(input_box).toBeVisible()
    await expect(input_box).toBeEmpty()
    await expect(input_box).toBeEditable()

    // some other assertions
    await expect(input_box.isEnabled()).toBeTruthy()                          // code commentary below 
    await expect(input_box.isEditable()).toBeTruthy()

    // 2 approaches for typing into input boxes
    await page.locator('#name').fill('playwright automation')               // 1st approach
    await input_box1.fill('www@playwright.com')                             // 2nd approach               

    // if you have'nt stored the locator you can also handle input boxes likes this
    await page.fill('#phone', '12345')
  
    await page.waitForTimeout(5000)            // wait for 5 sec before closing the browser


})


//* await expect(input_box.isEnabled).toBeTruthy()                         

//* (input_box.isEnabled()): this statement will return true because the input_box is enabled
//* await expect(true).toBeTruthy() : will pass because true is always truthy.


