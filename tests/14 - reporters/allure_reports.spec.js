/* 
allure is not built in for playwright. it is a third party reporter
1: Therefore we have to install it using : npm i -D @playwright/test allure-playwright
2: after that we have to install allure command line : npm install -g allure-commandline --save-dev
3: change in config file : reporter : [['allure-playwright', {  outputFolder: 'allure-test-result' }]]
all of the allure files will be saved in this folder
4: then run the test. after running the test allure files will be generated, now we have to combine them 
using this command : allure generate allure-test-result -o allure-report --clean.
after that a new folder with name allure-report will be created.
5: finally run this command to view the report : allure open allure-report

*/

import { test,expect } from "@playwright/test";

test('test1', async({page}) => {

    await page.goto("https://www.demoblaze.com/cart.html#")
    await expect(page).toHaveTitle("STORE")
})


test('test2', async({page}) => {

    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)

})

test('test3', async({page}) => {

    await page.goto('https://www.opencart.com/index.php?route=cms/demo')
    await expect(page).toHaveTitle("OpenCart - Demo")

})