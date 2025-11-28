import { test as setup, expect } from '@playwright/test';
import path from 'path';

import { LoginPage } from '../../pages/LoginPage.js';
import { user } from '../../fixture/user.js';

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');


setup('authenticate', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('/login');
    //sign up :
   await login.fillEmail("random@yahoo.com");
   await login.fillPassword("12345678");
   await login.clickLoginButton();

    await page.context().storageState({ path: authFile });
})