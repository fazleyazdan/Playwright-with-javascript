// There are different kinds of dropdowns
// some dropdowns have select tag & some does not have select tag
// some dropdowns are implemented using bootstrap
// we have auto suggestion dropdowns as well as hidden and dynamic dropdowns

import {test,expect} from '@playwright/test'

test('Bootstrap dropdowns', async ({page}) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_1')

    // select dropdown by visible text which is the text of the dropdown 
    await page.click('.multiselect-selected-text')
    await page.waitForTimeout(2000)


    //! Assertions on dropdowns

    // compare the number of known options with that on the web
    const numOptions = await page.locator('.checkbox')
    await expect(numOptions).toHaveCount(5)

    // check number of options in dropdowns
    const options = await page.$$('.checkbox') 
    console.log('total number of options in dropdown: ', options.length)             // print length of the options
    await expect(options.length).toBe(5)                                            // validations on options length

    let content = await page.$$('.checkbox')

    for (let con of content)
    {
        let text = await con.textContent()
        
        if(text.includes('Angular') || text.includes('HTML'))
            await con.click()
    }

    await page.waitForTimeout(2000)

    // deselect the dropdowns
    for (let con of content)
        {
            let text = await con.textContent()
            
            if(text.includes('Angular') || text.includes('HTML'))
                await con.click()
        }
    
        await page.waitForTimeout(2000)
})