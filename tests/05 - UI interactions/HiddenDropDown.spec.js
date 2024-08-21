// hidden dropdowns : mean there are options in drop down but they are hidden
// we cannot inspect them and locate them directly, because when you wanna inspect them they disappear
//* however we can use selector hub 'debugger' option which can freeze the web for sometime and then you can inspect the element


import { test, expect } from '@playwright/test';

test('Hidden Drop Downs', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // First login to Orange HRM
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();

  // click on sub unit
  await page.click('.oxd-grid-4>:nth-child(7)>div>:nth-child(2)')
  // it is recommended to always wait for all the dropdowns to load properly before doing any action
  await page.waitForTimeout(3000)                       
  // gather all options
  const options = await page.$$("div[role$='option']>span")

  // loop through all options
  for (const option of options)
  {
    const op_text = await option.textContent()
    // console.log(op_text)
    if(op_text.includes('Quality Assurance'))                 // if the options text contains 'Quality Assurance'. click on it
    {
      await option.click()
      break
    }
  }

  await page.waitForTimeout(3000)

});