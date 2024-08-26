// frame is external pages embedded into a single page
// meaning frame have whole actual page but they are shown in another page
// Now the problem is we cannot directly interact with element inside the frames
// first we have to switch to the frame & then interact with it

import {test, expect } from '@playwright/test';

test('Handling Frames', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    // find total number of frames on the page
    const totalFrames = await page.frame()
    console.log("Total num of Frames:", totalFrames)

    // Approach 1: locate Frame through Frame Locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await inputBox.fill('Hello')
})