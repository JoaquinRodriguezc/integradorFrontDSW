import {
  categoryProduct,
  dialog,
  priceProduct,
  titleProduct,
} from "./modal.js";

export function renderProductsList(products) {
  const burgers = products.filter((p) => p.category === "burger");
  const fries = products.filter((p) => p.category === "fries");
  const drink = products.filter((p) => p.category === "drink");
  console.log("log", burgers, fries, drink);
  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productsHTML = products.map((product, index) => {
        return ` <div class="productCard" id='product-${product.category}-${index}'>
                <img src=${product.image} alt="product Image" class="cardImage" />
                <h4>${product.title}</h4>
                <span> ${product.price}</span>
                <span> ${product.category}</span>
                </div>`;
      });
      return `<section class ='productListCategory'>
        <h3>${title}</h3>
        <div class = 'productos'>
        ${productsHTML.join("")}
        </div>
        </section>`;
    }
    return "";
  };
  const productList = document.getElementById("productList");
  productList.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(fries, "Papas Fritas")}
        ${renderProductGroup(drink, "Bebidas")}
`;
  const addEvents = (products) => {
    if (products) {
      products.forEach((e, i) => {
        const productCard = document.getElementById(
          `product-${e.category}-${i}`
        );
        productCard.addEventListener("click", () => {
          titleProduct.value = e.title;
          priceProduct.value = e.price;
          imageProduct.value = e.image;
          categoryProduct.value = e.category;
          localStorage.setItem("idProductEditing", e.id);
          dialog.style.visibility = "visible";
        });
      });
    }
  };
  addEvents(burgers);
  addEvents(fries);
  addEvents(drink);
}
