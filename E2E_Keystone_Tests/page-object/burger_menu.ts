import { Locator, Page, expect } from "@playwright/test";

export class BurgerMenu {
    readonly page: Page;
    readonly menuTitle: Locator;
    readonly searchField: Locator;
    readonly jobItem: Locator;
    
    
    constructor(page: Page) {
        this.page = page;
        this.menuTitle = page.locator("//p[@class='menu--title']");
        this.searchField = page.locator("//input[@type='search']");
        this.jobItem = page.locator("//div[contains(@class, 'job-item--wrapper')]")
    }

    async searchJob (jobName: string) {
        await this.searchField.fill(jobName);
    }

    async navigateToSelectedJob () {
        await this.jobItem.click();

    }
}