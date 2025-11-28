import { expect } from '@playwright/test';


exports.RegisterPage = class RegisterPage{
    constructor(page){
        this.page = page;
        this.nameField = page.locator("//input[@placeholder='Name']");
        this.emailField = page.locator("//input[@data-qa='signup-email']");
        this.sigupButton = page.getByRole('button', {name: 'Signup'});

        // account information
        this.title = page.locator("#id_gender2");
        this.password = page.locator("#password");
        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator ("#last_name");
        this.company = page.locator("#company");
        this.address = page.locator("#address1");
        this.country = page.locator ('#country');
        this.state = page.locator('#state');
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobileNumber = page.locator('#mobile_number');
        this.createAccountButton = page.getByRole('button', {name: 'Create Account'});
        this.continueButton = page.locator("(//a[@href='/'])[3]");
    }

    async fillName(name){
        await (this.nameField).fill(name);
    }
     async fillEmail(email){
        await (this.emailField).fill(email);
    }
    async clickSigupButton (){
        await (this.sigupButton).click();
    }
    async selectTitle(){
        await (this.title).click();
    }
    async fillPw(pw){
        await (this.password).fill(pw);
    }

    async selectDateOfBirth(){
        await (this.day).selectOption('7');
        await (this.month).selectOption('January')
        await (this.year).selectOption('2001');
    }

    async fillFirstName(firstName){
        await (this.firstName).fill(firstName);
    }
    async fillLastName(lastName){
        await (this.lastName).fill(lastName);
    }
    async fillCompany(company){
        await (this.company).fill(company);
    }
    async fillAddress(address){
        await (this.address).fill(address);
    }
    async fillCountry(){
        await (this.country).selectOption('India');
    }
    async fillState(state){
        await (this.state).fill(state);
    }
    async fillCity(city){
        await (this.city).fill(city);
    }
    async fillZipcode(zipcode){
        await (this.zipcode).fill(zipcode);
    }
    async fillMobileNumber(mobileNumber){
        await (this.mobileNumber).fill(mobileNumber);
    }

    async clickCreateAccount(){
        await (this.createAccountButton).click();
    }

    async checkSuccessRegister(){
        await expect((this.page).getByText("Account Created!")).toBeVisible();
        await expect ((this.page).url()).toBe("https://automationexercise.com/account_created");
    }


    async clickContinueLogin(){
        await (this.continueButton).click();
    }
}