import { Locator, Page } from "@playwright/test";

export const baseUrl = "https://v3-14-onix-systems-mykch-web.staging.onix.ua/";

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly userNameField: Locator; 
    readonly passwordField: Locator; 
    readonly logo: Locator; 
    readonly signInText: Locator; 
    readonly hintUsernameText: Locator; 
    readonly hintPasswordText: Locator; 
    readonly invalidCredsText: Locator; 
    readonly usernameLable: Locator;
    readonly passwordLable: Locator;
    readonly showHideButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator("//button[text()='Login']");
        this.userNameField = page.locator("//input[@class='input']");
        this.passwordField = page.locator("//input[@class='input password-input']");
        this.logo = page.locator("//div[@class='logo']");
        this.signInText = page.locator("//div[text()='Sign In']");
        this.hintUsernameText = page.locator("//li[@class='error']");
        this.hintPasswordText = page.locator("//li[@class='error']");
        this.invalidCredsText = page.locator("//li[text()='Invalid username or password']");
        this.usernameLable = page.locator("//label[normalize-space()='Username']");
        this.passwordLable = page.locator("//label[normalize-space()='Password']");
        this.showHideButton = page.locator("//div[contains(@class, 'eye-icon')]");
    }

    async fillFields(username: string, password: string) {
        await this.userNameField.pressSequentially(username);
        await this.passwordField.pressSequentially(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

     




    
}