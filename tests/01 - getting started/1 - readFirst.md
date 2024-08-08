const {test, expect} = require('@playwright/test')


* here 'Extract title' is the name of the test
* {page}: is a fixture which we have to pass to the anonymous function.
* it contains methods by which we can automate the web page. etc(visiting the web, interacting with elements of web)
* also before the {page} we have to write async and await. see explanation for it below the test

```javascript 

test('Extract title', async ({page})=> {
    await page.goto('https://playwright.dev/')
    
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/playwright/)

})
```


* as javascript works asynchronously , which means the steps are not executing in sequence.
* suppose step1 is executing and it take sometime, then in meantime step 2 will be executed.
* but in automation we need the script to execute in sequence.
* to tackle that issue we have to handle something called promises

* when we uses 'async' it make sure that function return promises.
* then 'await' checks whether that promise is fulfilled or not. meaning if the page is loaded or not.
* so whenever we use 'await' it checks whether the page is loaded before executing the script  

### ! =====================================================================================================

**What is async?**
The async keyword is used to define an asynchronous function. It allows the function to use the await keyword inside it. 
When you mark a function as async, it automatically returns a Promise. 
This Promise will either resolve with a value when the function completes, or it will reject if there's an error.

**What is await?**
The await keyword can only be used inside an async function. 
It pauses the execution of the function until the Promise it is waiting for is resolved (or rejected). 
This means that the code will wait for the asynchronous operation to complete before moving on to the next line. 

**Why use async and await?**

* async ({ page }) => { ... } defines the function as asynchronous, allowing you to use await inside it.
* await page.goto('https://playwright.dev/'); waits for the page to fully load before moving to the next step. 
Without await, the code would continue executing without waiting for the page to load, which could lead to errors.
* await expect(page).toHaveTitle(/Playwright/); waits for the title of the page to match the expected value before continuing.
Using async and await helps ensure that each step in your test happens in the correct order, making your tests more reliable.


### What is a Regular Expression (RegEx)?
A regular expression is a pattern used to match strings of text. In JavaScript, you can create a regular expression by enclosing a pattern in forward slashes, like /playwright/.

* Why Use /Playwright/?

in our code:

`await expect(page).toHaveTitle(/Playwright/);`

* /Playwright/ is a regular expression that matches any title containing the word "Playwright".
* The regular expression is case-sensitive by default, so it will match "Playwright" exactly as it is.

**Example:**

* If the page title is "Welcome to Playwright", the test will pass because "Playwright" is part of the title.
* If the page title is "playwright Testing", the test will fail because "Playwright" does not match "playwright" due to case sensitivity.

**Why Not Just Use a String?**

* You could use a string instead of a regular expression if you want an exact match:

`await expect(page).toHaveTitle('Playwright');`

* This would only pass if the title is exactly "Playwright" and nothing else.
* Using a regular expression like /Playwright/ provides more flexibility, allowing you to match the word "Playwright" even if the title has additional text before or after it.


