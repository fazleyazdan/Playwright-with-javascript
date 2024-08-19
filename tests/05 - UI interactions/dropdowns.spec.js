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
    const numOptions = await page.locator('#country option')
    await expect(numOptions).toHaveCount(10)

    // check number of options in dropdowns
    const options = await page.$$('#country option') 
    console.log('total number of options in dropdown: ', options.length)             // print length of the options
    await expect(options.length).toBe(10)                                            // validations on options length

    // check presence of particular option in dropdown through built-in methods
    const content = await page.locator('#country').textContent()        // this will return all dropdowns text in form of string
    await expect(content.includes('Japan')).toBeTruthy()                // This will return True or False and then compare with the truthy or falsy
    
    // console.log('content: ', content)

    // check presence of particular option in dropdown through looping - Approach 1

    const optionsLoop = await page.$$('#country option') 

    let status = false
    // for (const options of optionsLoop)
    // {
    //     if (await options.textContent() == 'Japan')
    //     status = true
    //     else
    //     continue    
    // }

    // if(status == true)
    //     console.log('test case passed!')

    // check presence of particular option in dropdown through looping - Approach 2

    for (const options of optionsLoop)
        {
            let optionsText = await options.textContent()
            if(optionsText.includes('Brazil'))
            {
                status = true
                break
            }
        }
    
    await expect(status).toBeTruthy()
    

    // select option from dropdown using loop - useful for dynamic & auto suggestive dropdowns
    for (const options of optionsLoop)
        {
            let optionsText = await options.textContent()
            if(optionsText.includes('France'))
            {
                await page.selectOption('#country', optionsText)
            }
        }

    await page.waitForTimeout(2000)
})