import {test} from '@playwright/test';
import path from 'path';

import { RegisterPage } from '../../pages/RegisterPage.js';
import { user } from '../../fixture/user.js';
const userFile = path.join(__dirname, '../../userStore/.auth/register.json');

test("register User", async({page})=>{
     const register = new RegisterPage(page);
        await page.goto('/login');
        //sign up :
        await register.fillName(user.firstName);
        await register.fillEmail(user.email);
        await register.clickSigupButton();
    
        //information fill
        await register.selectTitle();
        await register.fillPw(user.password);
        await register.selectDateOfBirth();
        await register.fillFirstName(user.firstName);
        await register.fillLastName(user.lastName);
        await register.fillCompany(user.company);
        await register.fillAddress(user.address);
        await register.fillCountry();
        await register.fillState(user.state);
        await register.fillCity(user.city);
        await register.fillZipcode(user.zipcode);
        await register.fillMobileNumber(user.mobileNumber);
        await register.clickCreateAccount();
    
        // check
        await register.checkSuccessRegister();
    
        // click on continue
        await register.clickContinueLogin();
        await page.context().storageState({ path: userFile });
})