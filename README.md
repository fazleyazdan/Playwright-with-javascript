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


### Execute Tests:
* to execute test run this command `npx playwright test`.
* tests will be executed in headless mode by default.
* to run tests in headed mode run this command `npx playwright test --headed`
* playwright will execute tests on all three browsers it has downloaded. (chromium,webkit,firefox). it is configured by default in **playwright.config**.
* if there is one test case , it will be executed parallel on all browser. so there will be 3 test cases essentially.
* after executing the test, you can view the report by using the following command `npx playwright show-report`


### Understanding the creation flow of tests:
* There are two ways we can create and run tests.
1) write test script using codegen 
2) write test script by us

* most of the times will be writing test script by ourselves.
* we will create tests in 'tests' folder.
* the extension name of the test file should be '.specs.js'

### Import necessary modules:
* to run tests we have to import from node_modules test folder 'node_modules\@playwright\test'
* we will write this command `require('@playwright/test')`
* there are many packages in this module and we don't need all of them. we only need 'test' & 'expect' packages to write tests.
* so we will import only those two packages. `const {test, expect} = require('@playwright/test')`
* You can use let or const, but the packages should be constant. so we used const
* **test**: test is package is used for writing tests
* **expect**: expect package is used for validations
