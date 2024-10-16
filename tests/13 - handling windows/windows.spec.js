// to handle multiple windows or pages we have to create we have to use browser context
// and we have to create our own 'page' instead of using the default one
// 1 : we are going to create our own browser and for that we have to import one of our choice, here i have imported 'chromium'
// 2 : after creating browser , we have to create browser context in order to handle pages
// 3 : now inside the context we can create multiple windows or pages

// so browser contain 'context'. context contains 'pages'

import {test, expect, chromium } from "@playwright/test";

test('handling windows', async() => {

    // first create browser
    const browser = await chromium.launch()
    const context = await browser.newContext()

})