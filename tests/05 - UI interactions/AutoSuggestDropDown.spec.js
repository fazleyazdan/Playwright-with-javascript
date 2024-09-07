// in auto suggestive drop downs when you type into the text box, dynamically number of option appear
// these option are not static and may change time after time

import {test,expect} from '@playwright/test'

test.skip('Auto Suggest dropdowns', async ({page}) => {

    await page.goto('https://www.redbus.in/')

    await page.fill('#src', 'kerala')

    await page.waitForSelector('//li/div/text[1]')             // wait for all the drop down to load
    let dropOptions = await page.$$('//li/div/text[1]')           // common locator for all drop downs

    for (const option of dropOptions)
    {
        let text = await option.textContent()

        // select 'Fort Road' from dropdowns if it is there
        if(text.includes('Fort Road'))
            await option.click()
    }

    await page.waitForTimeout(3000)
})