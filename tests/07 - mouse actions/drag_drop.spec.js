import {test, expect } from '@playwright/test';

test('login - valid credentials', async({page}) => {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    // drag: rome --> italy

    const rome = await page.locator("")
    const italy = await page.locator("")

    // Approach 1:


    // Approach 2:
})