// frame is external pages embedded into a single page
// meaning frame have whole actual page but they are shown in another page
// Now the problem is we cannot directly interact with element inside the frames
// first we have to switch to the frame & then interact with it

import {test, expect } from '@playwright/test';

test('Handling Frames', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    // find total number of frames on the page
    const totalFrames = await page.frames()
    console.log("Total num of Frames:", totalFrames.length)

    //! Approach 1: locate Frame through Frame Locator
    //* in this approach we will locate frame & then interact with its elements

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    await inputBox.fill('Hello')

    //! Approach Number 2: locate frame through name & URL
    //* to find URL of the frame, inspect the frame. it will have the 'src' attribute. right click on its value & copy the link address

    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"})
    await frame1.fill("input[name='mytext2']", 'Hello Frame2')   // first parameter is the locator of the input box & second is the text we wanna type into the box

    await page.waitForTimeout(3000)
})
