import { expect, test } from '@playwright/test';


test('Manipulation on table', async({page}) => {

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

    
    //* Suppose you wanna select checkboxes against multiple rows, then we have to write reusable function
    //* we cannot write the above statement repeatedly because there will be duplication

    // Checking multiple rows using function
    await selectProduct(rows, page, 'Product 1')
    await selectProduct(rows, page, 'Product 2')
    await selectProduct(rows, page, 'Product 4')


    await page.waitForTimeout(3000)
})


// function for getting specific row
async function selectProduct(row, page, name)
{
 
    const matchedRow = row.filter({
        has: page.locator('td'),
        hasText: name
    })

    await matchedRow.locator('input').check()
}