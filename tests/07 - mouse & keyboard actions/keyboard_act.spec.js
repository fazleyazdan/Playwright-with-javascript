import { test, expect } from '@playwright/test';

test('Keyboard actions', async({page}) => {

    await page.goto("https://gotranscript.com/text-compare")

    // write text in one box: press ctrl+a then press ctrl+c then tab to switch to other box. press ctrl+v to paste it

    await page.fill("textarea[name='text1']", 'Be grateful always')

    await page.keyboard.press('Control+A')  // press: if you wanna press more than one buttons
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')           // it is better to press up after down. it will still work if you are not using it
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(2000)
})