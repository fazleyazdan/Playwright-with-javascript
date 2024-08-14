/* 
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import { test, expect } from '@playwright/test';

test('Built-in Locators', async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // page.getByAltText() to locate an element, usually image, by its text alternative.
    // image have alt text, we can locate it if it has alt attribute.
    await expect(page.getByAltText('company-branding')).toBeVisible()

    // page.getByPlaceholder() to locate an input by placeholder.
    // some elements have placeholder attribute, we can locate those elements through placeholders
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    // Role locators include buttons, checkboxes, headings, links, lists, tables
    // we will also use attribute to give an extra info to locate an element
    await page.getByRole('button', {type: 'submit'}).click()

    // page.getByText() to locate by text content.
    // after login , we can validate that 'Admin' text is visible or not
    await expect(page.getByText('Admin')).toBeVisible()

    // page.getByTitle() to locate an element by its title attribute.
    // if an element has 'title' attribute we can use this built in locator

    // page.getByTestId() to locate an element based on its data-testid attribute

    // page.getByLabel() if an element has label tag, we can use this locator

})