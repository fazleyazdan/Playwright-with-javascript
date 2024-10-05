// by using traceviewer we can trace our tests
// traceviewer is useful for tests which are usually prone to failing
// it contains everything about a test: timestamps, screenshots, networks etc
//* to enable trace viewer : go to config file -> navigate to 'use' block.
//* there we have 'trace' option. you can turn it on for all tests or you can do it for failed tests only
//* by default the trace viewer file is stored in test-results folder


import {test,expect} from '@playwright/test';

test('checking trace viewer', async({page}) => {

    await page.goto("https://www.demoblaze.com/")
    await page.click("#login2")
    await page.fill("#loginusername", "admin777")
    await page.fill("#loginpassword", "admin123")
    await page.click("button[onclick='logIn()']")
    await page.waitForTimeout(1000)
})