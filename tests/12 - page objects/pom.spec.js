import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';
import { CartPage } from '../../pages/cartPage';
import exp from 'constants';

test('page objects demo', async({page}) => {

     // first make object of all classes
     //  pass page to all constructors
     const login = new LoginPage(page)
     const home = new HomePage(page)
     const cart = new CartPage(page)
     
     // Login 
    await login.visitWebPage()
    await login.loginToWeb('admin777', 'admin123')

    await page.waitForTimeout(3000)

    // Homepage: add product to cart
    await home.addProductCart("Nexus 6")
    await page.waitForTimeout(2000)
    await home.gotoCart()
    await page.waitForTimeout(5000)

    // CartPage : check if the products are added
    const status = await cart.checkIfProductAdded("Nokia lumia 1520")
    await expect(status).toBe(true)
    await page.waitForTimeout(4000)
})