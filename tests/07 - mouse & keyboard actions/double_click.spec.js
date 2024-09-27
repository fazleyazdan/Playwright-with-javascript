import { test, expect } from '@playwright/test';

test('Mouse double click', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const copybtn = await page.locator("//button[normalize-space()='Copy Text']")
    const field2 = await page.locator("#field2")

    // double click
    await copybtn.dblclick()
    
    // validate if text is copied into the field after double click. toHaveValue: is used to check what is inside input field
    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(2000)
})