import { Selector } from "testcafe";

class ecomerce {
  loginLogo: Selector = Selector(".login_logo");
  logo: Selector = Selector("span.title").withAttribute('Products');
  user: Selector = Selector("#user-name");
  password: Selector = Selector("#password");
  loginButton: Selector = Selector("#login-button");
  firstProduct: Selector = Selector('#item_4_title_link');
  backToProduct: Selector = Selector('#back-to-products');
}

export default new ecomerce();
