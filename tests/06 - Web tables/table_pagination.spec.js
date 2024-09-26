import { expect, test } from '@playwright/test';



test.skip('Table - extract data from single page', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //* Count Rows & Cols
    const table = await page.locator('#productTable')
    const cols =  await table.locator('thead th')
    const rows = await table.locator('tbody tr')     //! NOTE: filter method only works with parent locators


    //* getting table data from first page
    //* for that we will use 3 loops. first one for pagination, one for rows & one for cols

    const all_pages = await page.locator(".pagination li a")

    for(let p=0; p< await all_pages.count(); p++)
    {  
    
        // by default we are on first page and it is represented by 0, so after first iteration we are switching the pages to get data from it
        if(p > 0)                   
        {
            await all_pages.nth(p).click()
        }

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
            
            // await page.waitForTimeout(1000)       // uncomment to see it slowly changing the pages
        } 
   
   }
    await page.waitForTimeout(3000)
})
