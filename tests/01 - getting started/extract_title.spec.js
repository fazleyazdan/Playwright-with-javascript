const {test, expect} = require('@playwright/test')


//* here 'Extract title' is the name of the test
//* {page}: is a fixture which we have to pass to the anonymous function.
//* it contains methods by which we can automate the web page. etc(visiting the web, interacting with elements of web)
//* also before the {page} we have to write async and await. see explanation for it below the test

test('Extract title', async ({page})=> {
    await page.goto('https://playwright.dev/')
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/playwright/)

})


// as javascript works asynchronously , which means the steps are not executing in sequence.
// suppose step1 is executing and it take sometime, then in meantime step 2 will be executed
// but in automation we need the script to execute in sequence.
// to tackle that issue we have to handle something called promises

//* when we uses 'async' it make sure that function return promises.
//* then 'await' checks whether that promise is fulfilled or not. meaning if the page is loaded or not.
//* so whenever we use 'await' it checks whether the page is loaded before executing the script  

//! =====================================================================================================

/** What is async?
The async keyword is used to define an asynchronous function. It allows the function to use the await keyword inside it. 
When you mark a function as async, it automatically returns a Promise. 
This Promise will either resolve with a value when the function completes, or it will reject if there's an error.

What is await?
The await keyword can only be used inside an async function. 
It pauses the execution of the function until the Promise it is waiting for is resolved (or rejected). 
This means that the code will wait for the asynchronous operation to complete before moving on to the next line. 

Why use async and await?

* async ({ page }) => { ... } defines the function as asynchronous, allowing you to use await inside it.
* await page.goto('https://playwright.dev/'); waits for the page to fully load before moving to the next step. 
Without await, the code would continue executing without waiting for the page to load, which could lead to errors.
* await expect(page).toHaveTitle(/Playwright/); waits for the title of the page to match the expected value before continuing.
Using async and await helps ensure that each step in your test happens in the correct order, making your tests more reliable.
*/