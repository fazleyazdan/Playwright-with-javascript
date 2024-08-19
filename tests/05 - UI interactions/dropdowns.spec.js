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

    // select by dropdown by label, which is also the text of the dropdown 
    await page.locator('#country').selectOption({label: 'India'})
    await page.waitForTimeout(2000)

    // select 
    
})