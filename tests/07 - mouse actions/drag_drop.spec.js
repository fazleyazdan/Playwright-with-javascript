import {test, expect } from '@playwright/test';

test('login - valid credentials', async({page}) => {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    // drag: rome --> italy

    const rome = await page.locator("#box6")
    const italy = await page.locator("#box106")

    // Approach 1:
    // we will hover over rome & will use down method then hover over italy & will use up method
    await rome.hover()
    await page.mouse.down()
    await italy.hover()
    await page.mouse.up()

    // Approach 2:
    const madrid = await page.locator("#box7")
    const spain = await page.locator("#box107")

    // drag: Madrid --> spain
    await madrid.dragTo(spain)

    await page.waitForTimeout(1000)
})