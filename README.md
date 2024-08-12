# Playwright-with-javascript

## Outline:
- [About Playwright](#about-pw)
- [Playwright Features](#pw-features)
- [Setup](#pw-setup)
- [Folder Structure](#folder-structure)
- [About tests](#tests)
    - [Execute tests](#tests-exe)
    - [What to import](#import)
- [sample tests](#samp-tests)
- [Async await](#asy-awa)
- [sample tests 2](#samp-tests2)
- [Regular Expressions](#regex)
- [Locators in Playwright](#locators)


<a id="about-pw"></a>

### About Playwright:

Playwright enables reliable end-to-end testing for modern web apps.

* Applications supported - Web browser apps , mobile web apps, API
* Languages supported - Javascript, Typescript, Java, Python & .Net(C#)
* Browsers supported - Chromium, WebKit(Safari) and Firefox  
* OS supported - Windows, MacOS, Linux , Support CI Runs

<a id="pw-features"></a>

### Features playwright:
* Free & open source
* Multi-Browser , Multi-Language,
* Easy setup and configuration
* Functional, API, accessibility testing (we will use third party library for acc testing)
* Built-in reporters, custom reports (we have built in reports but if you don't like it you can install library for other reports)
* CI, CD , Docker
* Parallel testing
* Auto wait
* Headed & headless mode
* Built-in assertions  (in selenium we use testng assertion and in cypress we use mocha or chai assertions) but in playwright we have built-in assertions.
* Multi tab &multi window (not supported by cypress)
* Support Frames , Iframes , shadow DOM
* Support Test Parameters
* Emulate Mobile devices . Means we can test web apps on vir.device as well.
* Faster Execution compared to selenium & Cypress.
* No flaky tests (flaky tests are unstable, which sometimes fails & sometimes pass)

<a id="pw-setup"></a>

### Setup :
* Download and install Node
* create a new project and open it in VS Code
* open the terminal & run this command `npm init playwright@latest`
* to check whether playwright is installed or not. run this command `npm playwright -v`

<a id="folder-structure"></a>

### Folder Structure:
* **node_modules**: contains the dependencies required to work with playwright
* **tests** : here we will write the actual tests
* **playwright.config**: here we will manage the configuration of the project. we can tailor it according to our needs
* **package.json**: it is just like the pom.xml. it will contain the the info about the dependencies and libraries you added in project.

<a id="tests"></a>

### Where & How to write tests:
* There are two ways we can create and run tests.
1) write test script using codegen 
2) write test script by us

* most of the times will be writing test script by ourselves.
* we will create tests in 'tests' folder.
* the extension name of the test file should be '.spec.js'

<a id="tests-exe"></a>

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

<a id="import"></a>

### Import necessary modules:
* to run tests we have to import from node_modules test folder 'node_modules\@playwright\test'
* we will write this command `require('@playwright/test')`
* there are many packages in this module and we don't need all of them. we only need 'test' & 'expect' functions to write tests.
* so we will import only those two functions. `const {test, expect} = require('@playwright/test')`
* You can use let or const, but the packages should be constant. so we used const
* you can also import it like this. `import {test, expect} from '@playwright/test'`
* **test**: test is package is used for writing tests
* **expect**: expect package is used for validations

<a id="samp-tests"></a>

### Sample Test:

``` javascript

const {test, expect} = require('@playwright/test')

// here 'Extract title' is the name of the test
// {page}: is a fixture which we have to pass to the anonymous function.
// it contains methods by which we can automate the web page. (visiting the web, interacting with elements of web etc)
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
<a id="asy-awa"></a>

### Async, Await:

* as javascript works asynchronously , which means the steps are not executing in sequence.
* suppose step1 is executing and it take sometime, then in meantime step 2 will be executed.
* but in automation we need the script to execute in sequence.
* to tackle that issue we have to handle something called promises

* when we uses 'async' it make sure that function return promises.
* then 'await' checks whether that promise is fulfilled or not. meaning if the page is loaded or not.
* so whenever we use 'await' it checks whether the page is loaded before executing the script

<a id="samp-tests2"></a>

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

<a id="regex"></a>

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

<a id="locators"></a>

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

### For locating single web elements:

### Locating elements using property:

* when locating elements via property attribute. copy the key as well as value of it
* for example if we wanna locate element via id.  id ='login'. then copy the entire key value
* like this `await page.click('id=login')`.
* and we don't need to wrap the value in single or double quotes. as you can see the *login* is not in quotes when used as locator.


### Locating elements using css selectors:

* to locate elements through css selectors you will only need tag & value of an attribute. tag is optional
* in this case we are interacting with an input element. there are two ways you can do this
* `await page.locator('#username').fill('fazleyazdan')`
* `await page.fill('#username','fazleyazdan')`
* for an input field you can also `page.type()` method.


### For locating Multiple web elements:
