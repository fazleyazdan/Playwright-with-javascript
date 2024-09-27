import { test, expect } from '@playwright/test';

test('Mouse Hover', async({page}) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/3.x/demo.html")

    const btn = await page.locator('.context-menu-one.btn.btn-neutral')

    //* right click
    await btn.click({button: 'right'})

    await page.waitForTimeout(2000)
})