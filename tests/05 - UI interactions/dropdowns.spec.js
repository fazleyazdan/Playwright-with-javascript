// There are different kinds of dropdowns
// some dropdowns have select tag & some does not have select tag
// some dropdowns are implemented using bootstrap
// we have auto suggestion dropdowns as well as hidden and dynamic dropdowns

import {test,expect} from '@playwright/test'

test('drop downs', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select dropdown by visible text which is the text of the dropdown 
    await page.locator('#country').selectOption('United Kingdom')
    await page.waitForTimeout(2000)

    await page.selectOption('#country', 'Japan')         // select dropdowns by text but without using locator method
    await page.waitForTimeout(2000)

    // select by dropdown by label, which is also the text of the dropdown 
    await page.locator('#country').selectOption({label: 'India'})
    await page.waitForTimeout(2000)

    // select dropdown having value attribute
    await page.locator('#country').selectOption({value: 'canada'})
    await page.waitForTimeout(2000)

    // select dropdown by index
    await page.locator('#country').selectOption({index: 3})
    await page.waitForTimeout(2000)


    //! Assertions on dropdowns

    // compare the number of known options with that on the web
    const numOptions = await page.locator('#country options')
    await expect(numOptions).toHaveCount(10)

    // check number of options in dropdowns
    const options = await page.$$('#country options') 
    console('total number of options in dropdown: ', options.length)             // print length of the options
    await expect(options.length).toBe(10)                                        // validations on options length

    await page.waitForTimeout(2000)
})