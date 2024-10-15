// you have to export the class in order to import it in other places

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.loginButton = "#login2"
        this.userName = "#loginusername"
        this.userPassword = "#loginpassword"
        this.login = "button[onclick='logIn()']"
    }

    async visitWebPage()
    {
        await this.page.goto("https://www.demoblaze.com/")
    }


    async loginToWeb(username, password)
    {
        await this.page.locator(this.loginButton).click()
        await this.page.locator(this.userName).fill(username)
        await this.page.locator(this.userPassword).fill(password)
        await this.page.locator(this.login).click()
    }

}