import { Selector, t } from "testcafe";
import ecomerce from "../Pages/ecomercePage";

const url = "http://automationpractice.com/index.php";

fixture("Ecomerce Store").page(url);

test("User Lands in Ecomerce Store", async (t) => {
  await t.expect(ecomerce.logo.innerText).contains("");
  await t.hover(ecomerce.woman);
  await t.click(ecomerce.tshirt);
});
