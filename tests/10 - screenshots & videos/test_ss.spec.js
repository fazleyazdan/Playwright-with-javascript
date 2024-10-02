// you can capture screenshots of the whole test
// for that you have to change the configuration
// open config file --> go to 'use' block & add one more attribute
// screenshot: 'on' OR screenshot: 'only-on-failure' 
// now when the test finish, the screenshot will be saved auto & this will also be reflected in report


import {test} from '@playwright/test';

test('capture ss of test', async({page}) => {

    await page.goto("https://www.demoblaze.com/")
    await page.click("#login2")
    await page.fill("#loginusername", "admin777")
    await page.fill("#loginpassword", "admin123")
    await page.click("button[onclick='logIn()']")
    await page.waitForTimeout(1000)
})