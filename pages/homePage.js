exports.HomePage = class HomePage 
{

    constructor(page)
    {
        this.page = page
        this.allProducts = "//div/h4/a"
        this.addToCart = ".btn.btn-success.btn-lg"
    }

    async addProductCart(productName)
    {
        const productList = await this.page.$$(this.allProducts)

        for (const product of productList)
        {
            if (productName == await product.textContent())
            {
                await product.click()
                break
            }
        }

        //! handle dialog before it appears
        await this.page.on('dialog', async dialog => {

            if(dialog.message.include() == 'added')
            {
                await dialog.accept()
            }

            
            await this.page.locator(this.addToCart).click()
        
        })

    }
}