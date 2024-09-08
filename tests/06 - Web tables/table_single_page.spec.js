import { expect, test } from '@playwright/test';



test('Table - extract data from single page', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //* Count Rows & Cols
    const table = await page.locator('#productTable')
    const cols =  await table.locator('thead th')
    const rows = await table.locator('tbody tr')     //! NOTE: filter method only works with parent locators


    //* getting table data from first page
    //* for that we will use 2 loops one for rows & one for cols

    for(let i=0; i<await rows.count(); i++)
    {

        const row = rows.nth(i)                        // represent the current row
        const tds = row.locator('td')                  // get tds of the current row because all data is inside it
                                                       // every row has multiple tds so we cols loop will be executing multiple times for every row
                                                       // don't get confused between tds & cols, since we need text of tds so we used it instead of cols to reduce code lines
        // for(j=0; j<await cols.count()-1; j++)
        
        for(let j=0; j<await tds.count()-1; j++)       // tds.count()-1 : because we don't the last col      
        
        {
            console.log(await tds.nth(j).textContent())
        }
    } 

    await page.waitForTimeout(3000)
})
