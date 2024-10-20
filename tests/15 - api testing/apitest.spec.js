import {test, expect } from "@playwright/test"

// first get users
// then create user using post request: pass the user info in the payload. when user is created, we will get an id of the user
// to update the user , use id from the post request
// to delete the user, use the user id 

//! since these tests are dependant on each other, 'false' the fullParallel mode in config file


var userId

test('Get users', async({request}) => {

    const response = await request.get("https://reqres.in/api/users?page=2")
    await expect(await response.status()).toBe(200)
    console.log(await response.json())

})

test('Create user', async({request}) => {

    const response = await request.post("https://reqres.in/api/users/",

                                    {
                                        data : {"name" : "fazleyazdan", "job"  : "Engineer"},
                                        headers: {"Accept" : "application/json" }
                                    }
                                    )
    
    await expect(await response.status()).toBe(201)
    console.log(response.json())
    const resjson = await response.json()
    userId = resjson.id
    console.log("User id:",userId)
})

test('Update user', async({request}) => {

    const response = await request.put("https://reqres.in/api/users/"+userId,

        {
            data : {"name" : "fazleyazdan", "job"  : "SQA Engineer"},
            headers: {"Accept" : "application/json" }
        }
        )

await expect(await response.status()).toBe(200)
console.log(response.json())

})

test('Delete users', async({request}) => {

    const response = await request.delete("https://reqres.in/api/users/"+userId)
    await expect(await response.status()).toBe(204)
})