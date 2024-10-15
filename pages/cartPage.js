exports.CartPage = class CartPage
{
    constructor(page)
    {
        this.page = page
        this.cartProducts = "//tbody/tr/td[2]"
    }


    async checkIfProductAdded(productName)
    {

        const productsList = await this.page.$$(this.cartProducts)

        for (const product of productsList)
        {
            if(productName == await product.textContent())
            {
                return true
            }
        }
    }
}