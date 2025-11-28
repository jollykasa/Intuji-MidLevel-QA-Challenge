import { expect } from "@playwright/test";


exports.ProductPage = class ProductPage{
    constructor(page){
        this.page = page;
        this.productButton = page.locator("//a[@href='/products']");
        this.searchField = page.locator("#search_product");
        this.searchButton = page.locator('#submit_search');
        this.categoryWomen = page.locator("//a[@href='#Women']");
        this.dresssection = page.locator("//a[@href='/category_products/1']");
        this.singleProduct = page.locator("//a[@href='/product_details/3']")
    }
    async clickProductButton(){
        await (this.productButton).click();
    }
    async fillSearchField (search){
        await (this.searchField).fill(search);
    }
    async clickSearcButton(){
        await (this.searchButton).click();
    }
    async checkSearchProduct(){
        await expect((this.page).url()).toBe("https://automationexercise.com/products?search=dress");
    }

    async selectCategory(){
        await (this.categoryWomen).click();
    }
    async selectDress(){
        await (this.dresssection).click();
    }

}