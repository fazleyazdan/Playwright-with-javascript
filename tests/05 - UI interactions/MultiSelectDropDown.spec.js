//  in multi select dropdown we select multiple options in a dropdown at once

import {test,expect} from '@playwright/test'

test('drop downs', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select options by visible text - options text 
    await page.locator('#colors').selectOption(['Red', 'Blue', 'Yellow'])
    await page.waitForTimeout(2000)

    await page.selectOption('#colors', ['Green', 'White'])         // select dropdowns by text but without using locator method
    await page.waitForTimeout(2000)


    //! Assertions on dropdowns

    // compare the number of known options with that on the web
    const numOptions = await page.locator('#colors option')
    await expect(numOptions).toHaveCount(5)

    // check number of options in dropdowns
    const options = await page.$$('#colors option') 
    console.log('total number of options in dropdown: ', options.length)             // print length of the options
    await expect(options.length).toBe(5)                                            // validations on options length

    // check presence of particular option in dropdown through built-in methods
    const content = await page.locator('#colors').textContent()        // this will return all dropdowns text in form of string
    await expect(content.includes('Red')).toBeTruthy()                  // This will return True or False and then compare with the truthy or falsy
    
    console.log('content: ', content)

    await page.waitForTimeout(2000)
})