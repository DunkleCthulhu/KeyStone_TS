import { Locator, Page } from "@playwright/test";

export class ProcessPage {
    readonly page: Page;
    readonly headerLogo: Locator;
    readonly burgerMenu: Locator;
    readonly jobTitleName: Locator;
    readonly userAvatar: Locator;
    readonly userName: Locator;
    readonly notificationsButton: Locator;
    readonly processTab: Locator;
    readonly messagesTab: Locator;
    readonly mediaTab: Locator;
    readonly documentsTab: Locator;
    readonly teamTab: Locator;
    readonly subtitle: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.burgerMenu = page.locator("//div[@class='burger__container']");
        this.jobTitleName = page.locator("//p[@class='header--title header--title-dots']");
        this.subtitle = page.locator("//p[@class='subtitle']");
        this.userAvatar = page.locator("//div[@class='user-info user-info-without-name']//div[contains(@class, 'avatar')]");
        this.userName = page.locator("//p[@class='user-info--name']");
        this.notificationsButton = page.locator("//div[@class='notification']");
        
    }

    async burgerMenuClick () {
        await this.burgerMenu.click()
    }
    
}