import {test,expect} from '@playwright/test';
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config()

test('E2E client side', async({page}) => {

    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    const phone = process.env.PHONE
    console.log(email)

    await page.goto('https://workpermitconsultancy.com/')

    // client side login

    await page.click("//a[normalize-space()='Sign in']")
    await page.fill("#identifier-field", email)
    await page.click(".cl-formButtonPrimary")
    await page.fill("#password-field", password)
    await page.click(".cl-formButtonPrimary")
    await page.click(".cl-userButtonAvatarImage")
    
    //* validate the logged email
    await expect(page.locator(".cl-internal-1ptfnbv")).toHaveText(email)
    
    //* Apply
    await page.click("a:nth-child(3)")
    await page.locator("#termsAndConditions").click()
    await page.click("//button[normalize-space()='Submit']")

    //* Step 2
    await page.fill('#firstName', 'testing')
    await page.fill('#lastName', 'automated')
    await expect(page.locator('#dob')).toBeEditable()
    await expect(page.locator('#dob')).toBeEnabled()

    await page.fill("#dob", "2000-07-25")
    await page.locator('#nationality').selectOption('Pakistan')
    await page.locator('#maritalStatus').selectOption('Single')

    await page.locator('#currentCountry').selectOption('Pakistan')
    await page.fill('#currentAddress', 'G-5, Islamabad')
    await page.locator("input[placeholder='Your Contact Number']").clear()
    await page.fill("input[placeholder='Your Contact Number']", phone)
    await page.fill('#email', email)
    await page.locator('#requestType').selectOption('New')
    await page.locator('#permitDuration').selectOption('12 Months')
    await page.fill("#caseDescription", 'meo meo meo')



    await page.waitForTimeout(4000)

})