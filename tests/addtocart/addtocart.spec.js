import {test} from '@playwright/test';

import { ProductPage } from '../../pages/ProductPage.js';


test.beforeEach('run at every test',async ({page})=>{
   const product = new ProductPage(page);
    await page.goto('/');
    await product.clickProductButton();
    await product.selectWomenCategory();
    await product.selectDress();
});

test.describe('run tests', () => {
    test('add 1st item in cart',async({page})=>{
        const product = new ProductPage(page);
        await product.selectProduct1();
        await product.clickAddToCartButton();
        await product.checkAddedModal();
        await product.clickViewCartButton();
        await product.checkProduct1Name();
    });
    test('add 2nd item in cart',async({page})=>{
        const product = new ProductPage(page);
        await product.selectProduct2();
        await product.clickAddToCartButton();
        await product.checkAddedModal();
        await product.clickViewCartButton();
        await product.checkProduct2Name();
    });
    test('add 3rd item in cart',async({page})=>{
        const product = new ProductPage(page);
        await product.selectProduct3();
        await product.clickAddToCartButton();
        await product.checkAddedModal();
        await product.clickViewCartButton();
        await product.checkProduct3Name();
    });
})