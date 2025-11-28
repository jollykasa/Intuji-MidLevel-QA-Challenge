import { expect } from '@playwright/test';


exports.LoginPage = class LoginPage{
    constructor(page){
        this.email = page.locator("//input[@data-qa='login-email']");
        this.password = page.locator("//input[@data-qa='login-password']");
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }
     async fillEmail(email){
        await (this.email).fill(email);
    }
     async fillPassword(password){
        await (this.password).fill(password);
    }
    async clickLoginButton (){
        await (this.loginButton).click();
    }
}