// to handle multiple windows or pages we have to create we have to use browser context
// and we have to create our own 'page' instead of using the default one
// 1 : we are going to create our own browser and for that we have to import one of our choice, here i have imported 'chromium'
// 2 : after creating browser , we have to create browser context in order to handle pages
// 3 : now inside the context we can create multiple windows or pages

// so browser contain 'context'. context contains 'pages'

import {test, expect, chromium } from "@playwright/test";

test('handling windows', async() => {

    // first create browser & then context
    const browser = await chromium.launch()
    const context = await browser.newContext()

    // create pages
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    // if you wanna know how many pages you have created
    const allPages = context.pages()
    console.log("No of Pages created:", allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.demoblaze.com/cart.html#")
    await expect(page2).toHaveTitle("STORE")

    await page1.waitForTimeout(2000)
    await page2.waitForTimeout(2000)


})


/* Each BrowserContext can have multiple pages. 
A Page refers to a single tab or a popup window within a browser context. 
It should be used to navigate to URLs and interact with the page content. */