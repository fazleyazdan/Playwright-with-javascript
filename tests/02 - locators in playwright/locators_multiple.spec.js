import {test, expect} from '@playwright/test';

test('locators for multiple elements', async({page}) => {

    await page.goto("https://www.demoblaze.com/index.html")
    
    await page.waitForSelector("//div//h4//a")              // here we will wait for all elements having same locator to load properly before doing any action
    const product = await page.$$('//div//h4//a')           // catch all elements having the same locator

    // same loop like python
    for(const prod of product)
    {
        // textContent method is used to catch the text of an element
        const product_name = await prod.textContent();
        console.log(product_name)
    }

    await page.close()
})


//! Code commentary:

/** The for...in loop is iterating over the indices of the product array rather than the actual elements. 
 
This means that prod is just a number (the index), not an element, and therefore does not have a textContent method.

But the for...of loop, which iterates over the elements directly. that means you can get text of individual elements through it

*/

