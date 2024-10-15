import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { HomePage } from '../../pages/homePage';
import { waitForDebugger } from 'inspector';

test('page objects demo', async({page}) => {

     // first make object of all classes
     const login = new LoginPage(page)
     const home = new HomePage(page)
     
     // Login 

    await login.visitWebPage()
    await login.loginToWeb('admin777', 'admin123')

    await page.waitForTimeout(3000)

    // Homepage: add product to cart
    await home.addProductCart("Nexus 6")

    await page.waitForTimeout(4000)

})