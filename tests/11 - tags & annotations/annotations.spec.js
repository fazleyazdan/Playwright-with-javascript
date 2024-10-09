import { test, expect, chromium } from "@playwright/test";

//! to understand every annotation better, uncomment test & run it individually
// There are different annotations in playwright
// some of them we have used previously like skip,only.
// there are more like fixme(), slow() & fail()


//! only : will execute test with only tag out of all tests

/*
test.only('Test1', async({page}) =>{

    console.log("This is Test 1")
})
*/

//! skip : will skip that particular test among others test

/*
test('Test2', async({page}) =>{

    console.log("This is Test 2")
})
*/

//! you can also skip test based on certain conditions. if that conditions met then test will be skipped

/*
test('Test3', async({page, browserName}) =>{

    console.log("This is Test 3")
    if (browserName === 'chromium')
    {
        test.skip()
    }            
})
*/

//! fixme(): it is also like skip. however we use it if there is bug to be fixed, then in that test we use fixme()

/*
test('Test4', async({page}) =>{

    console.log("This is Test 4")
    test.fixme()
})
*/

//! fail(): here if a test case is failing then we can use fail(). we are using it mostly for negative tests
//* in reality that test is failing but when we use fail(), it won't stop execution of other tests
//* because we used fail() in test & so the test will pass. as we expected that test to be failing

/*
test('Test5', async({page}) =>{

    console.log("This is Test 5")
    test.fail()         // expected result
    expect(1).toBe(1)   // actual result
    since expected and actual result are not matching. this test will be shown as failed
})
*/

//! based on condition we can fail the test
//* here i will give it condition. if the test run on chromium then expect the test to be failed
//* this test case will pass, because our expectation met with actual result as i am running test on chromium

/*
test('Test6', async({page,browserName}) =>{

    console.log("This is Test 6")
    if (browserName === chromium)
    {
        test.fail() 
    }       
})
*/

//! slow(): slow is used for tests which are taking too much time and is bound to exceed timeout
//* default timeout for a test is 30s. we can change it in configuration
//* lets say timeout is 1 sec for a test, and our test takes more than 2 sec. then this test will fail as it exceeds timeout
//* to tackle this issue. we use slow(). when we use slow with a test it increase triple the default timeout
//* for example the default timeout is 30s. then by using slow it will become 90s for that test
//! if you wanna change default timeout in config, it is located below 'use' block

/*
test('Test7', async({page}) =>{

    test.slow()
    console.log("This is Test 7")
    await page.goto("https://www.demoblaze.com/")
})
*/

//! there is default timeout which applies to every test. you can change it config
//! if you wanna set custom timeout for a test you can use 'setTimeOut()' method

test('Test8', async({page}) =>{

    test.setTimeout(3000)
    console.log("This is Test 8")
    await page.goto("https://www.demoblaze.com/")
})
