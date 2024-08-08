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


### Run Tests:
* there are two ways we can create and run tests.
1) write test script using codegen 
2) write test script by us

