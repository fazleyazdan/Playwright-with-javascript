import { expect, test } from '@playwright/test';
import exp from 'constants';


test('count rows & cols', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //* Count Rows & Cols
    const table = await page.locator('#productTable')
    const cols =  await page.$$('#productTable thead th')
    const rows = await page.$$('#productTable tbody tr')

    console.log('Total number of Cols in this table are: ', cols.length)
    console.log('Total number of Rows in this table are: ', rows.length)     

    
    // you can also find table cols & rows through this way
    const table_cols = await table.locator('thead th')
    const rows_table = await table.locator('tbody tr')

    console.log('Total number of Cols: ', await table_cols.count())
    console.log('Total number of Rows: ', await rows_table.count())
    
    
    // Validations
    await expect(cols.length).toBe(4)
    await expect(rows.length).toBe(5)


})
