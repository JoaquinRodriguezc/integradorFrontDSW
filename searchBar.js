import { renderProductsList } from "./productList";
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  handleSearchBar(searchBar.value);
});
function handleSearchBar(value) {
  const products = JSON.parse(localStorage.getItem("products"));
  const filterProducts = products.filter((e) =>
    e.title.toLowerCase().includes(value.toLowerCase())
  );
  return renderProductsList(filterProducts);
}
