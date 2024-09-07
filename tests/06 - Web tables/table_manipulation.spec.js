import { expect, test } from '@playwright/test';


test('count rows & cols', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //* Count Rows & Cols
    const table = await page.locator('#productTable')
    const cols =  await page.$$('#productTable thead th')
    const rows = await table.locator('tbody tr')     //! NOTE: filter method only works with specified locators

    // so we wanna select checkbox against product 3 in the table
    // since we have many rows, we will use the filter method to match that specific row we wants
    // in filter method we will filter out rows based on 'td' because it contains all the text inside the rows
    // then we will filter based on the text those 'td' contains. in our case it is 'Product 3'


    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
    })

    // now we found the matched row, so we will check the box against it which has 'input' locator
    await matchedRow.locator('input').check()

    await page.waitForTimeout(3000)
})
