import {test} from '@playwright/test';

import { ProductPage } from '../../pages/ProductPage.js';


test.beforeEach('run at every test',async ({page})=>{
   const product = new ProductPage(page);
    await page.goto('/');
    await product.clickProductButton();
});

test.describe('two tests', () => {
  
  test('search from keyboard', async ({ page }) => {
      const product = new ProductPage(page);
      await product.fillSearchField('dress');
      await product.clickSearcButton();
      await product.checkSearchProduct();
  });

});