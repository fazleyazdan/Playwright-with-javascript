import {test, expect } from '@playwright/test';
import exp from 'constants';


test('assertions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1: await expect(page).toHaveURL()         page has 'x' URL
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

    // 2: await expect(page).toHaveTitle()       page has 'x' title
    await expect(page).toHaveTitle("Automation Testing Practice")

    // 3: await expect(locator).toBeVisible()    element is visible
    const headerLogo= await page.locator('.wikipedia-searchtable')
    await expect(headerLogo).toBeVisible()

    // 4: await expect(locator).toBeEnabled()    element is enabled
    //! Note: there is a difference bw 'visible' & 'enabled'. enabled mean we can perform further action on that element..
    //! an element can be visible but it is possible that it is disabled & we cannot perform any action on it.

    const searchBox = await page.locator("#Wikipedia1_wikipedia-search-input")
    await expect(searchBox).toBeEnabled()

    // 5: await expect(locator).toBeChecked()    checkbox is checked
    const genderCheckBox = await page.locator('#male')
    await genderCheckBox.click()
    await expect(genderCheckBox).toBeChecked()

    // 6: await expect(locator).toHaveAttribute()  element has a DOM attribute
    
})
