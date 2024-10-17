/* The page event on browser contexts can be used to get new pages that are created in the context. 
This can be used to handle new pages opened by target="_blank" links. */


// sometimes when you click an element, it open new page/window/tab
// to handle that we have to first make an event, which open an empty tab
// when you click on that element which will open new tab then we assign that empty tab to it.

import {test, expect, chromium } from "@playwright/test";

test('hyperlink windows', async() => {

    // first create browser & then context
    const browser = await chromium.launch()
    const context = await browser.newContext()

    // create pages
    const page1 = await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    // make an event before clicking on hyperlink
    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage = await pagePromise
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")

    await page1.waitForTimeout(2000)
    await newPage.waitForTimeout(2000)


})