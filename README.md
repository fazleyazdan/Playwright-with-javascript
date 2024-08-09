# Playwright-with-javascript

### Installation :
* Download and install Node
* create a new project and open it in VS Code
* open the terminal & run this command `npm init playwright@latest`
* to check whether playwright is installed or not. run this command `npm playwright -v`


### Folder Structure:
* **node_modules**: contains the dependencies required to work with playwright
* **tests** : here we will write the actual tests
* **playwright.config**: here we will manage the configuration of the project. we can tailor it according to our needs
* **package.json**: it is just like the pom.xml. it will contain the the info about the dependencies and libraries you added in project.


### Where & How to write tests:
* There are two ways we can create and run tests.
1) write test script using codegen 
2) write test script by us

* most of the times will be writing test script by ourselves.
* we will create tests in 'tests' folder.
* the extension name of the test file should be '.spec.js'


### Execute Tests:
* to execute all tests run this command `npx playwright test`.
* to execute individual test. `npx playwright test 'path of the test file'`
* tests will be executed in headless mode by default.
* to run tests in headed mode run this command `npx playwright test --headed`
* playwright will execute tests on all three browsers it has downloaded. (chromium,webkit,firefox). it is configured by default in **playwright.config**.
* to execute test on specific browser. `npx playwright test 'path of the test file' --project=chromium`
* to execute test on specific browser & headed. `npx playwright test 'path of the test file' --project=chromium --headed`
* to execute test on specific browser, headed & debug. `npx playwright test 'path of the test file' --project=chromium --headed --debug`
* debug is a very powerful feature, it is recommended to use it.
* if there is one test case , it will be executed parallel on all browser. so there will be 3 test cases essentially.
* after executing the test, you can view the report by using the following command `npx playwright show-report`


### Import necessary modules:
* to run tests we have to import from node_modules test folder 'node_modules\@playwright\test'
* we will write this command `require('@playwright/test')`
* there are many packages in this module and we don't need all of them. we only need 'test' & 'expect' functions to write tests.
* so we will import only those two functions. `const {test, expect} = require('@playwright/test')`
* You can use let or const, but the packages should be constant. so we used const
* you can also import it like this. `import {test, expect} from '@playwright/test'`
* **test**: test is package is used for writing tests
* **expect**: expect package is used for validations


### Sample Test:

``` javascript

const {test, expect} = require('@playwright/test')

// here 'Extract title' is the name of the test
// {page}: is a fixture which we have to pass to the anonymous function.
// it contains methods by which we can automate the web page. etc(visiting the web, interacting with elements of web)
// also before the {page} we have to write async and await. see explanation for it below the test

test('extract url', async ({page}) => {
    await page.goto('https://playwright.dev/')
    const page_url = page.url()
    console.log('URL of the page: ', page_url)
    // validation
    await expect(page).toHaveURL('https://playwright.dev/')
    await page.close()
})

```

### Async, Await:

* as javascript works asynchronously , which means the steps are not executing in sequence.
* suppose step1 is executing and it take sometime, then in meantime step 2 will be executed.
* but in automation we need the script to execute in sequence.
* to tackle that issue we have to handle something called promises

* when we uses 'async' it make sure that function return promises.
* then 'await' checks whether that promise is fulfilled or not. meaning if the page is loaded or not.
* so whenever we use 'await' it checks whether the page is loaded before executing the script


### Sample Test 2:

``` javascript
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

```

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


### Locators in Playwright:

Locators in Playwright :
-----------------------
There are different ways you can locate elements in playwright

    • Property - [id, name, class or attributes etc]

    • By css selectors

    • By Xpath

Interaction with Locators: 
-------------------------
There are two ways by which we can interact with elements in playwright

    1)  await page.locator('locator').click()

    2)  await page.click('locator')

In first approach we locate elements in playwright and then we perform action
In second approach we perform action first and then pass the element locator.
