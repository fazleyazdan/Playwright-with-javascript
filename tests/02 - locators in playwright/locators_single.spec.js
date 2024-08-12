import {test, expect} from '@playwright/test'

//! locator for getting single element
test('locators in playwright', async ({page}) =>{

    await page.goto("https://www.demoblaze.com/index.html")

    //* click login button - property
    await page.locator('id=login2').click()
    // OR
    // await page.click('id=login2')
    
    //* input username - css selector
    // await page.locator('#loginusername').fill('fazleyazdan')
    // OR 
    await page.fill('#loginusername', 'fazleyazdan')                    //! in second argument we pass the username

    //* input password - css selector: tag[property]
    await page.type("input[id='loginpassword']", '123@123')

    //* click login button - Xpath
    await page.click("//button[normalize-space()='Log in']")

    //* after login - verify that logout button is visible
    const logout_link= await page.locator("//a[@id='logout2']")
    
    await expect(logout_link).toBeVisible()

    await page.close()
})


//! Code Commentary:

/** 

Interaction with Locators: 
-------------------------
There are two ways by which we can interact with elements in playwright

    1)  await page.locator('locator').click()

    2)  await page.click('locator')

In first approach we locate elements in playwright and then we perform action
In second approach we perform action first and then pass the element locator.


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
 */