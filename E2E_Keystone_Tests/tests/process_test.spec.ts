import test, { expect } from "@playwright/test";
import { LoginPage, baseUrl } from "../page-object/login_page";
import { ProcessPage } from "../page-object/process_page";
import { BurgerMenu } from "../page-object/burger_menu";

test.beforeEach (async ({page}) => {
    const loginPage = new LoginPage (page);
    const processPage = new ProcessPage (page);
    const burgerMenu = new BurgerMenu (page);
    const jobName = "DCs046";
    const username = "Benr";
    const password = "Bug#234";
    await page.goto(baseUrl);
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.signInText).toContainText("Sign In");
    await loginPage.fillFields(username, password);
    await loginPage.clickLogin();
    await page.waitForURL(baseUrl + "process");
    await processPage.burgerMenuClick();
    await burgerMenu.searchJob(jobName);
    await burgerMenu.navigateToSelectedJob(); 
    await expect(processPage.jobTitleName).toContainText(jobName);
    
  })

  test ("Check subtitle", async ({page}) => {
    const processPage = new ProcessPage (page);
    await expect (processPage.subtitle).toContainText("7400 - QDH/Model Complete");
  } )



