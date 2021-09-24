import { Selector } from "testcafe";

class ecomerce {
  logo: Selector = Selector("#header_logo");
  woman: Selector = Selector('[title="Women"]');
  tshirt: Selector = Selector('[title="T-shirts"]');
}

export default new ecomerce();
