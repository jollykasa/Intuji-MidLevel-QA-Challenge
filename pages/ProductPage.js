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
        this.singleProduct = page.locator("//a[@href='/product_details/3']")
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

}