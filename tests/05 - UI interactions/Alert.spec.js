// Dialogs : alerts are called Dialogs in Playwright
// by default playwright handle alerts
// however if you wanna do it yourself, then you have to register the dialog before the action that triggers the dialog to accept or dismiss it.

import {test, expect } from '@playwright/test';

// we have 3 types of alerts
// 1 - alert - OK Button
// 2 - confirmation alert - OK & Cancel Button
// 3 - prompt Alert - in which we give input message having

test.skip('Alert - OK', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable Dialog or alert window handler
    // here we will write all the validation & action related to dialog/alert before triggering it
    await page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('alert')                    // validate that this is simple alert
        expect(dialog.message()).toContain('I am an alert box!')    // validate message that alert have
        await dialog.accept()               // close the dialog - OK button
    })

    await page.click("button[onclick='myFunctionAlert()']")
    await page.waitForTimeout(2000)

    // page.on('dialog') listener must handle the dialog.
    // dialogs in Web are modals and therefore block further page execution until they are handled.
}) 


test.skip('Confirmation Alert - OK & Cancel Button', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable Dialog or alert window handler
    // here we will write all the validation & action related to dialog/alert before triggering it
    await page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('confirm')                    // validate that this is Confirmation alert
        expect(dialog.message()).toContain('Press a button!')         // validate message that alert have
        await dialog.accept()                  // close the dialog - OK button
        // await dialog.dismiss()              // close the dialog - Cancel button
    })

    await page.click("button[onclick='myFunctionConfirm()']")
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')       // validate the text after closing the Dialog
    await page.waitForTimeout(2000)

}) 


test('Prompt alert - input message', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enable Dialog or alert window handler
    // here we will write all the validation & action related to dialog/alert before triggering it
    await page.on('dialog', async dialog => {

        expect(dialog.type()).toContain('prompt')                           // validate that this is prompt alert
        expect(dialog.message()).toContain('Please enter your name:')       // validate message that alert have
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Ali')               // close the dialog - OK button
        // await dialog.dismiss()
    })

    await page.click("button[onclick='myFunctionPrompt()']")
    await expect(page.locator('#demo')).toHaveText('Hello Ali! How are you today?')      // Validate the text after giving the prompt
    await page.waitForTimeout(3000)

    // page.on('dialog') listener must handle the dialog.
    // dialogs in Web are modals and therefore block further page execution until they are handled.
}) 

