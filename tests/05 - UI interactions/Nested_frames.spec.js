// Inner Frames or Nested Frames
// To work with inner Frames first we will capture the Parent Frame
// and then with the 'childFrame()' method we will get the child or inner Frame

import {test, expect } from '@playwright/test';

test('Handling Frames', async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    const parentFrame = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await parentFrame.fill("input[name='mytext3']", 'Welcome')

    // there is a nested frame inside the parent frame, there we wanna select the radio button
    // the Function will return an array of child frames.here we only have 1 inner frame inside the parent frame
    const childFrame = await parentFrame.childFrames()                      
    await childFrame[0].locator("#i8 > div:nth-child(3) > div").check();
    await page.waitForTimeout(3000)

    // sometimes the selector hub won't give locator for elements inside the nested frame
    // to deal with this situation right click on the elements html and copy its xpath
})
