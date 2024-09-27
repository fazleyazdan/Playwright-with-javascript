import { test, expect } from '@playwright/test';

test('Mouse Hover', async({page}) => {

    await page.goto("https://stqatools.com/demo/MouseHover.php")

    const dropdown = await page.locator('.dropbtn')
    const link2 = await page.locator("//a[normalize-space()='Link 2']")

    //* use hover method to hover over elements
    await dropdown.hover()
    await link2.hover()

    await page.waitForTimeout(2000)
})