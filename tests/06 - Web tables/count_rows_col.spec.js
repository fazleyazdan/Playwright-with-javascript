import { expect, test } from '@playwright/test';
import exp from 'constants';


test.skip('count rows & cols', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //* Count Rows & Cols
    const table = await page.locator('#productTable')
    const cols =  await page.$$('#productTable thead th')
    const rows = await page.$$('#productTable tbody tr')

    console.log('Total number of Cols in this table are: ', cols.length)
    console.log('Total number of Rows in this table are: ', rows.length)     

    
    // you can also find table cols & rows through this way
    const table_cols = await table.locator('thead th')
    const table_rows = await table.locator('tbody tr')

    //! NOTE: Count method works if the element is located via parent element. 
    //! in our case we have got rows & cols via 'table' which is the parent.
    
    console.log('Total number of Cols: ', await table_cols.count())    
    console.log('Total number of Rows: ', await table_rows.count())
    
    
    // Validations
    await expect(table_rows).toBe(5)
    await expect(cols.length).toBe(4)
    await expect(rows.length).toBe(5)


})


//* Findings :
// 1: with page.$$ ,  the count() does not work
// 2: with page.locator the length method does not work.

// so to conclude, page.$$ get multiple elements. length method works with it
// page.locator() can get multiple elements but you cannot use length method with only counts works with it.