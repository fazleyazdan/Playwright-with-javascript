//! failed soft assertions will not terminate test execution
//! in soft assertions the rest of the script will execute even if it fails

import {test, expect } from '@playwright/test';

test('soft assertions', async ({page}) => {

    await page.goto("https://www.demoblaze.com/")

    await expect(page).toHaveTitle("STORE")              // Hard assertion, if it fails the rest of test won't execute

    // Soft assertions, the title is incorrect, however it won't terminate rest of the test execution. 
    await expect.soft(page).toHaveTitle("STORE123")      

    // if you wanna make an assertions soft, write 'soft' after 'expect'
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/")
})
