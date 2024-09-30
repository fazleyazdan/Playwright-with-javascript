import {test, expect } from '@playwright/test';
import exp from 'constants';


test('single file upload', async({page}) => {

    await page.goto("https://demoqa.com/upload-download")

    // here give the relevant path if files are inside the project, otherwise give full path
    // make sure to use \\ in relative path to avoid escapes 
    await page.locator("#uploadFile").setInputFiles('uploads\\test-1.pdf')

    await page.waitForTimeout(2000)

})


test.only('upload multiple files', async({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // it is better to wait for the selector if you expect that it will appear after some time
    await page.waitForSelector("#filesToUpload")

    // if you wanna upload multiple files , use array in setInputFiles
    await page.locator("#filesToUpload").setInputFiles(['uploads\\test-1.pdf', 'uploads\\test-2.pdf'])

    await page.waitForTimeout(3000)

    // if you wanna remove the uploaded files , pass empty array 
    await page.locator("#filesToUpload").setInputFiles([])

    // validation
    await expect(page.locator("ul[id='fileList'] li")).toHaveText("No Files Selected")
    await page.waitForTimeout(2000)

})