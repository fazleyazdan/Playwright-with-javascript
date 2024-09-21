//! Date picker is customized element
// meaning people customize according to their choice & needs
// so date picker will not be same for every web

import {test, expect } from '@playwright/test';

test('Date Picker', async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //* Approach 1 : through fill() - pass the date

    // await page.fill('#datepicker', '07/07/1997')

    //* Approach 2 : through loop
    
    const year = '2025'
    const month = 'August'
    const day = '17'

    await page.click("#datepicker")

    while(true)
    {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()
        
        if (currentYear == year && currentMonth == month)
        {
            break                      // break the loop b/c current year & month matched our expected year & month
        }

        await page.click(".ui-icon.ui-icon-circle-triangle-e")               // click next until we have expected year & month
    }

    // now once you matched month & year we can click the date
    // we can do so by parameterizing xpath
    // so we have to look for a common xpath, having text attribute 
    // make sure to wrap locator with in string literals when parameterizing xpath

    await page.click(`//a[@class='ui-state-default'][text()=${day}]`)

    await page.waitForTimeout(3000)
})
