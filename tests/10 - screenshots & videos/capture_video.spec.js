import {test} from '@playwright/test';

// you can capture video of the whole test
// for that you have to change the configuration
// open config file --> go to 'use' block & add one more attribute
// video: 'on' OR video: 'retain-on-failure' 
// now when the test finish, the video will be saved auto & this will also be reflected in report
// it is recommended to capture video on failure
// by default the video is stored in 'test-results' folder

test('capture video of test', async({page}) => {

    await page.goto("https://www.demoblaze.com/")
    await page.click("#login2")
    await page.fill("#loginusername", "admin777")
    await page.fill("#loginpassword", "admin123")
    await page.click("button[onclick='logIn()']")
    await page.waitForTimeout(1000)
})