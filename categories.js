import { getProducts } from "./localStorage";
import { renderProductsList } from "./productList";

export function renderCategories() {
  const ulList = document.getElementById("list");
  ulList.innerHTML = `
  <li id = "todo">Todos los productos</li>
  <li id = "burger">Hamburguesas</li>
  <li id = "fries">Papas Fritas</li>
  <li id = "drink">Gaseosas</li>
  <li id = "mayorPrecio">Mayor Precio</li>
  <li id = "menorPrecio">Menor Precio</li>
  `;
  const liElements = ulList.querySelectorAll("li");
  liElements.forEach((e) => {
    e.addEventListener("click", () => handleClick(e));
  });
  const handleClick = (element) => {
    console.log(element.id);
    handlerFilterProductByCategory(element.id);
    liElements.forEach((e) => {
      if (e.classList.contains("liActive")) {
        e.classList.remove("liActive");
      } else {
        if (element === e) {
          e.classList.add("liActive");
        }
      }
    });
  };
}

const handlerFilterProductByCategory = (category) => {
  const products = getProducts();
  if (!category || category === "todo") {
    return renderProductsList(products);
  }
  if (category === "mayorPrecio") {
    return renderProductsList(products.sort((a, b) => a.price - b.price));
  }
  if (category === "menorPrecio") {
    return renderProductsList(products.sort((b, a) => a.price - b.price));
  }
  console.log("categoria");
  const result = products.filter((e) => e.category === category);
  console.log(result);
  return renderProductsList(result);
};
