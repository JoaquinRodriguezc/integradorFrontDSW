import { renderCategories } from "./categories";
import { getProducts } from "./localStorage";
import { renderProductsList } from "./productList";
import * as a from "./searchBar.js";
renderCategories();
const products = getProducts();
renderProductsList(products);
export let activeCategory = null;
export const setActiveCategory = (category) => {
  activeCategory = category;
};
