import {test, expect } from '@playwright/test';

//! make sure to 'false' the option 'fullyParallel' in playwright.config.js: because tests are more than one so they will be executed parallel & we don't want that
// when creating hooks you have to use 'browser' fixture. and then create instance of page fixture through it

let page

test.beforeAll('login', async({browser}) => {
    page = await browser.newPage()
    await page.goto("https://www.demoblaze.com/")
    await page.click("#login2")
    await page.fill("#loginusername", "admin777")
    await page.fill("#loginpassword", "admin123")
    await page.click("button[onclick='logIn()']")
})

// you don't need to pass page or browser here, because you are already logged in with the page & browser fixture. 
test.afterAll('logout', async() => {
    await page.click("#logout2")
})

// also you don't need to pass page in tests , because the , page instance is already created in beforeEach 
test('capture all products', async() => {

    // click laptop & validate if sony vaio i7 exist
    await page.locator("(//a[normalize-space()='Laptops'])").click()
    await expect(page.locator("//a[normalize-space()='Sony vaio i7']")).toHaveText("Sony vaio i7")
})

test('add to cart', async() => {

    await page.click("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]")
    await page.click(".btn.btn-success.btn-lg")

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()      // click OK
    })

})