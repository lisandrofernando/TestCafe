import { Selector } from "testcafe";

class ecomerce {
  loginLogo: Selector = Selector(".login_logo");
  logo: Selector = Selector(".title").withAttribute('Products');
  user: Selector = Selector("#user-name");
  password: Selector = Selector("#password");
  loginButton: Selector = Selector("#login-button");
  firstProduct: Selector = Selector('#item_4_title_link');
  backToProduct: Selector = Selector('#back-to-products');
  addToCart: Selector = Selector('#add-to-cart-sauce-labs-backpack');
  shoppingCartContainer: Selector = Selector('#shopping_cart_container');
  removeFromCart: Selector = Selector('#remove-sauce-labs-backpack');
}

export default new ecomerce();
