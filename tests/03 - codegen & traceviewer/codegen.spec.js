// To use codegen run this command 'npx playwright codegen'
// a browser and playwright inspector will be opened after running this command
// in browser you can do actions on web & the script will be generated in playwright inspector
// you can copy the script and past it in the code editor.

// Or you can run this command to save the script in tests folder or any folder in your project without copy pasting it
// 'npx playwright codegen -o tests/'name of test file'.

// by default the codegen will open chromium browser, if you wanna change it.
// 'npx playwright codegen -b firefox' or give initial only 'npx playwright codegen -b ff'

// similarly if you wanna record your test cases using mobile devices
// npx playwright codegen --device iphone 13

// if you wanna record your script in different view port 
// npx playwright codegen --viewport-size "1280, 720"

import {test, expect } from '@playwright/test';

test.use({
    viewport: {
      height: 720,
      width: 1280
    }
  });
  
  test('test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('fazleyazdan');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('123@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();
  });