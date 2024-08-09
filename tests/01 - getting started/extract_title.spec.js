const {test, expect} = require('@playwright/test')


test('Extract title', async ({page})=> {
    await page.goto('https://playwright.dev/')
    
    // extract full title of the web page
    const page_title = page.title()
    console.log('title of web page is: ', page_title)

    // Expect a title "to contain" a substring.  see the commentary below
    await expect(page).toHaveTitle(/Playwright/)

    // close the page
    await page.close()

})


/**  

//! What is a Regular Expression (RegEx)?

A regular expression is a pattern used to match strings of text. 
In JavaScript, you can create a regular expression by enclosing a pattern in forward slashes, like /playwright/.

//!  Why Use /Playwright/?

`await expect(page).toHaveTitle(/Playwright/);`

 /Playwright/ is a regular expression that matches any title containing the word "Playwright".
The regular expression is case-sensitive by default, so it will match "Playwright" exactly as it is.

//! Example:

If the page title is "Welcome to Playwright", the test will pass because "Playwright" is part of the title.
If the page title is "playwright Testing", the test will fail because "Playwright" does not match "playwright" due to case sensitivity.

//! Why Not Just Use a String?**

You could use a string instead of a regular expression if you want an exact match:

`await expect(page).toHaveTitle('Playwright');`

This would only pass if the title is exactly "Playwright" and nothing else.
Using a regular expression like /Playwright/ provides more flexibility, 
allowing you to match the word "Playwright" even if the title has additional text before or after it.  */



