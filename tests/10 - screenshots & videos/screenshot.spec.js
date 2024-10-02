import {test} from '@playwright/test';


test("view page", async({page}) => {

    await page.goto("https://www.opencart.com/index.php?route=cms/demo")
    
    // here we added date because we don't want to replace other ss with same name, so it is better to capture screenshots with time stamps
    await page.screenshot({path:'screenshots/'+ Date.now()+ 'homepage.png'})

})


// take screenshot of the full page, page which is outside the viewport can be captured through this method
test("capture full page", async({page}) => {

    await page.goto("https://www.opencart.com/index.php?route=cms/demo")
    
    // here we added date because we don't want to replace other ss with same name, so it is better to capture screenshots with time stamps
    await page.screenshot({path:'screenshots/'+ Date.now()+ 'fullpage.png', fullPage:true})

})


// capture single element
test.only("single element screenshot", async({page}) => {

    await page.goto("https://www.opencart.com/index.php?route=cms/demo")
    
    // here we added date because we don't want to replace other ss with same name, so it is better to capture screenshots with time stamps
    await page.locator(".box-overlay[href='https://demo.opencart.com/']").screenshot({path:'screenshots/'+ Date.now()+ 'element.png'})

})
