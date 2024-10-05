// suppose you have multiple test cases and they belong to sanity, regression etc.
// or you wanna tag a test case just for yourself to test its behavior etc.
// then we use tagging ,tagging is very useful in playwright
// to run tag specific tests. after test execution command write: --grep "@sanity"
// it will run all the test cases having 'sanity' tag.
// example: npx playwright test tags.spec.js --project=chromium --headed --grep "@sanity"

import { test} from "@playwright/test";

    // we tag the test after its name.
    // there are no pre defined tags, you can have any word as a tag. i.e: fast, slow, sanity,reg etc.  

    test('Test1@sanity', async({page}) =>{

        console.log("Test 1 belongs to sanity")
    })

    test('Test2@sanity', async({page}) =>{

        console.log("Test 2 belongs to sanity")
    })

    test('Test3@regression', async({page}) =>{

        console.log("Test 3 belongs to regression")
    })

    test('Test4@regression', async({page}) =>{

        console.log("Test 4 belongs to regression")
    })

    // a test can have multiple tags 
    test('Test5@sanity@regression', async({page}) =>{

        console.log("Test 5 belongs to sanity & regression")
    })

// if you wanna run test with multiple tags like Test5
//* npx playwright test tags.spec.js --project=chromium --headed --grep "@sanity@regression" 

// when executing test having @sanity tags, it will also execute @sanity@regression as well.
// now if you wants to run only tests having @sanity tags, then we can do it by this command

//* npx playwright test tags.spec.js --project=chromium --headed --grep "@sanity" --grep-invert "@regression"
// now this time test 5 will not be executed because it contains regression as well