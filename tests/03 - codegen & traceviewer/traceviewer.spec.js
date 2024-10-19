/*  Trace viewer & flaky tests
 
by using traceviewer we can trace our tests
 traceviewer is useful for tests which are usually prone to failing
 it contains everything about a test: timestamps, screenshots, networks etc
 to enable trace viewer : go to config file -> navigate to 'use' block.
 there we have 'trace' option. you can turn it on for all tests or you can do it for failed tests only
 by default the trace viewer file is stored in test-results folder

 */

import {test,expect} from '@playwright/test';

test('checking trace viewer', async({page}) => {

    await page.goto("https://www.demoblaze.com/")
    await page.click("#login2")
    await page.fill("#loginusername", "admin777")
    await page.fill("#loginpassword", "admin123")
    await page.click("button[onclick='logIn()']")
    await page.waitForTimeout(1000)
})


/* 

* Flaky test & retries:

* sometimes the test are failing and passing (flaky tests).
* when a test fails you wanna run it again for the flaky tests.
* run this command `npx playwright test abc.spec.js --retries=2`
* you can give as many retries you want. so playwright will rerun the failed test until run out of retries
* To test retries, intentionally interrupt a test in headed mode by clicking something in UI so that test fail, then playwright will rerun it. If the --retries flag is passed.

*/