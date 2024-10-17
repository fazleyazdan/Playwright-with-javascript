// Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters.
// They include : List, Line, Dot, HTML, Blob, JSON & Junit reporters
// There are two ways, you can make report by using reporter of your choice.

/* 

1: Through command
e.g: npx playwright test --reporter=line

2: change in configuration file:      
recommended for : JSON & HTML reporters. because here we have to give file name as well
also if you wanna generate multiple reports at the same time, then we have to make changes in config file

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: 'line',
});

*/

//! most of these reporters will change the result of tests on terminal


import { test,expect } from "@playwright/test";

test('reporters', async({page}) => {

    await page.goto("https://www.demoblaze.com/cart.html#")
    await expect(page).toHaveTitle("STORE")
})


test('reporter test', async({page}) => {

    await page.goto('https://playwright.dev/')
    await expect(page).toHaveTitle(/Playwright/)

})


/*
for JSON reporter:
reporter: [['json', {  outputFile: 'test-results.json' }]]


To generate multiple reports:
 reporter:[
    ['list'],
    ['json', {  outputFile: 'test-results.json' }]
  ],

  Pass them in form of array, you can generate as many reports as you want at the same time

*/