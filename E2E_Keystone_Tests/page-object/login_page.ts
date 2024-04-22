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
        this.userNameField = page.locator("//div[@class='input-wr']/input[@placeholder='Username']");
        this.passwordField = page.locator("//div[@class='input-wr password-wr']/input[@placeholder='Password']");
        this.logo = page.locator("//div[@class='logo']");
        this.signInText = page.locator("//div[text()='Sign In']");
        this.hintUsernameText = page.locator("//div[@class='input-wr']/div[@class='error-message']");
        this.hintPasswordText = page.locator("//div[@class='input-wr password-wr']/div[@class='error-message']");
        this.invalidCredsText = page.locator("//div[@class='error-message']");
        // this.usernameLable = page.locator("//label[normalize-space()='Username']");
        // this.passwordLable = page.locator("//label[normalize-space()='Password']");
        this.showHideButton = page.locator("//div[contains(@class, 'eye-icon')]");
    }

    async fillFields(username: string, password: string) {
        await this.userNameField.pressSequentially(username);
        await this.passwordField.pressSequentially(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async clearFields() {
        await this.userNameField.click();
        await this.userNameField.selectText();
        await this.userNameField.press("Backspace")
        await this.passwordField.click();
        await this.passwordField.selectText();
        await this.passwordField.press("Backspace");
        
    }

     




    
}