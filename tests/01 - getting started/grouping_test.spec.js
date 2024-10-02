// suppose you have multiple test of different kinds, then you can group it
// if you have multiple group of tests in a file & you wanna execute only one, then write only with that group
// test.describe.only

//! we have not used 'page' fixture here because we are only printing here.

import {test,expect} from '@playwright/test';

test.describe('Group 1', ()=> {

    test('test 1', async()=> {

        console.log("This is test 1")
    })

    test('test 2', async()=> {

        console.log("This is test 2")
    })
})


test.describe('Group 2', ()=> {

    test('test 3', async()=> {

        console.log("This is test 3")
    })

    test('test 4', async()=> {

        console.log("This is test 4")
    })
})