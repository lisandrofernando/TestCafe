import { Selector, t } from "testcafe";
import ecomerce from "../Pages/ecomercePage";

// Fixture is the name of the suite

const url = "https://www.saucedemo.com";

fixture("Ecomerce Store").page(url);

test("User Lands in Sauce Demo", async (t) => {
  await t.expect(ecomerce.loginLogo.innerText).contains("");
  await t.typeText(ecomerce.user,'standard_user');
  await t.typeText(ecomerce.password,'secret_sauce');
});

test("User Lands in Sauce Demo and checks the landing page", async (t) => {
  await t.expect(ecomerce.loginLogo.innerText).contains("");
  await t.typeText(ecomerce.user,'standard_user');
  await t.typeText(ecomerce.password,'secret_sauce');
  await t.click(ecomerce.loginButton);
  //await t.expect(ecomerce.titleHeader.value).contains('Products');
});

test("User Lands in Sauce Demo and checks the landing page and the first link", async (t) => {
  await t.expect(ecomerce.loginLogo.innerText).contains("");
  await t.typeText(ecomerce.user,'standard_user');
  await t.typeText(ecomerce.password,'secret_sauce');
  await t.click(ecomerce.loginButton);
  await t.click(ecomerce.firstProduct);
});

test("User Lands in Sauce Demo and checks the landing page and the first link & Back to products", async (t) => {
  await t.expect(ecomerce.loginLogo.innerText).contains("");
  await t.typeText(ecomerce.user,'standard_user');
  await t.typeText(ecomerce.password,'secret_sauce');
  await t.click(ecomerce.loginButton);
  await t.click(ecomerce.firstProduct);
  await t.click(ecomerce.backToProduct);
});

test("User Lands in Sauce Demo and checks the landing page and the first link & Back to products", async (t) => {
  await t.expect(ecomerce.loginLogo.innerText).contains("");
  await t.typeText(ecomerce.user,'standard_user');
  await t.typeText(ecomerce.password,'secret_sauce');
  await t.click(ecomerce.loginButton);
  await t.click(ecomerce.firstProduct);
  await t.click(ecomerce.addToCart);
  await t.click(ecomerce.shoppingCartContainer);
  await t.expect(ecomerce.firstProduct.innerText).contains('Sauce Labs Backpack');
});

test("User Lands in Sauce Demo and checks the landing page and the first link & Back to products", async (t) => {
  await t.expect(ecomerce.loginLogo.innerText).contains("");
  await t.typeText(ecomerce.user,'standard_user');
  await t.typeText(ecomerce.password,'secret_sauce');
  await t.click(ecomerce.loginButton);
  await t.click(ecomerce.firstProduct);
  await t.click(ecomerce.addToCart);
  await t.click(ecomerce.shoppingCartContainer);
  await t.expect(ecomerce.firstProduct.innerText).contains('Sauce Labs Backpack');
  await t.click(ecomerce.removeFromCart);
});