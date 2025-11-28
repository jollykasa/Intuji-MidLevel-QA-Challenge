import { expect } from "@playwright/test";


exports.ProductPage = class ProductPage{
    constructor(page){
        this.page = page;
        this.productButton = page.locator("//a[@href='/products']");
        this.searchField = page.locator("#search_product");
        this.searchButton = page.locator('#submit_search');
        this.categoryWomen = page.locator("//a[@href='#Women']");
        this.dresssection = page.locator("//a[@href='/category_products/1']");
        this.brandPolo = page.locator("//a[@href='/brand_products/Polo']");

        //add to cart
        this.singleProduct1 = page.locator("//a[@href='/product_details/3']");
        this.singleProduct2 = page.locator("//a[@href='/product_details/4']");
        this.singleProduct3 = page.locator("//a[@href='/product_details/38']");
        this.addToCartButton = page.locator("//button[@type='button']");
        this.continueShopButton = page.locator("//button[@data-dismiss='modal']");
        this.viewCartButton = page.locator("(//a[@href='/view_cart'])[2]");

        // cart
        this.price = page.locator("(//td[@class='cart_price'])[1]");
        this.quantity = page.locator ("(//td[@class='cart_quantity'])[1]");
        this.total = page.locator("(//td[@class='cart_total'])[1]")
    }
    async clickProductButton(){
        await (this.productButton).click();
    }

    //search input field
    async fillSearchField (search){
        await (this.searchField).fill(search);
    }
    async clickSearcButton(){
        await (this.searchButton).click();
    }
    async checkSearchProduct(){
        await expect((this.page).url()).toBe("https://automationexercise.com/products?search=dress");
    }

    //category
    async selectWomenCategory(){
        await (this.categoryWomen).click();
    }
    async selectDress(){
        await (this.dresssection).click();
    }
    async validWomenDressCategory(){
        await expect((this.page).getByText('Women - Dress Products')).toBeVisible();
    }

    //brand
    async selectBrandPolo(){
        await (this.brandPolo).click();
    }

    async validBrandPolo(){
         await expect((this.page).getByText('Brand - Polo Products')).toBeVisible();
    }

    //add to cart
    async selectProduct1(){
        await (this.singleProduct1).click();
    }
    async selectProduct2(){
        await (this.singleProduct2).click();
    }
    async selectProduct3(){
        await (this.singleProduct3).click();
    }
    async clickcontinueShopButton(){
        await (this.continueShopButton).click();
    }
    async clickAddToCartButton(){
        await (this.addToCartButton).click();
    }
    async clickViewCartButton(){
        await (this.viewCartButton).click();
    }
    async checkProduct1Name(){
        await expect((this.page).getByText('Sleeveless Dress')).toBeVisible();
    }
    async checkProduct2Name(){
        await expect((this.page).getByText('Stylish Dress')).toBeVisible();
    }
    async checkProduct3Name(){
        await expect((this.page).getByText('Rose Pink Embroidered Maxi Dress')).toBeVisible();
    }

    async checkAddedModal(){
        await expect((this.page).getByText('Added!')).toBeVisible();
    }
}