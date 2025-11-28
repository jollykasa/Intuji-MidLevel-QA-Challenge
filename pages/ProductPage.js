import { expect } from "@playwright/test";


exports.ProductPage = class ProductPage{
    constructor(page){
        this.productButton = page.locator("//a[@href='/products']");
        this.searchField = page.locator("#search_product");
        this.categoryWomen = page.locator("//a[@href='#Women']")
    }

}