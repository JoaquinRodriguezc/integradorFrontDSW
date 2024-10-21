import { renderProductsList } from "./productList";

export function saveProduct(title, price, image, categoria) {
  let products = getProducts();
  const idProductEditing = localStorage.getItem("idProductEditing");
  let product;
  console.log(idProductEditing);
  if (idProductEditing) {
    console.log("entre en editing");

    product = products.find((p) => p.id === idProductEditing);
    if (!product) {
      return;
    }
    products = products.filter((p) => p.id !== idProductEditing);
    product.title = title;
    product.price = price;
    product.image = image;
    product.category = categoria;
  } else {
    console.log("entre");
    product = {
      id: new Date().toISOString(),
      title,
      price,
      image,
      category: categoria,
    };
  }
  products = [product, ...products];
  localStorage.setItem("idProductEditing", "");
  localStorage.setItem("products", JSON.stringify(products));
  renderProductsList(products);
}
export function getProducts() {
  const products = JSON.parse(localStorage.getItem("products"));
  if (!products || products.length === 0) {
    return [];
  }
  return products;
}
