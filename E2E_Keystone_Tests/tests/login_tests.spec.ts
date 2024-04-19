import test, { expect } from "@playwright/test";
import { LoginPage, baseUrl } from "../page-object/login_page";
import userData from "D:\\AutomationTesting\\KeyStone\\users.json";


test.beforeEach(async ({page}) => {
  const loginPage = new LoginPage (page);
  await page.goto(baseUrl);
  await expect(loginPage.logo).toBeVisible();
  await expect(loginPage.signInText).toContainText("Sign In");
  // await expect(loginPage.usernameLable).toHaveText("Username");
  // await expect(loginPage.passwordLable).toHaveText("Password");

})

test ("Check valid login", async ({page}) => {
  const loginPage = new LoginPage (page);
  const userIndex = 1;   
  const { username, password} = userData.users[1];
  

  await loginPage.fillFields(username, password);
  await loginPage.showHideButton.click();
  await expect(loginPage.passwordField).toHaveAttribute("type", "text");
  await loginPage.showHideButton.click();
  await expect(loginPage.passwordField).toHaveAttribute("type", "password");
  await loginPage.clickLogin();
  await page.waitForURL(baseUrl + "process");

});
