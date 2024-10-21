import Swal from "sweetalert2";
import { saveProduct } from "./localStorage";
import { renderProductsList } from "./productList";

const addProductButton = document.getElementById("addProductButton");
const confirmProduct = document.getElementById("aceptarButton");
const cancelButton = document.getElementById("cancelarButton");
const deleteButton = document.getElementById("deleteButton");
export const dialog = document.getElementById("formularioProducto");
export const titleProduct = document.getElementById("nameInput");
export const priceProduct = document.getElementById("priceInput");
export const imageProduct = document.getElementById("imageProduct");
export const categoryProduct = document.getElementById("categorySelect");

addProductButton.addEventListener("click", () => {
  console.log("opening dialog");
  dialog.style.visibility = "visible";
});
confirmProduct.addEventListener("click", () => {
  console.log("Confirm dialog");
  const title = titleProduct.value;
  const price = priceProduct.value;
  const image = imageProduct.value;
  const categoria = categoryProduct.value;
  saveProduct(title, price, image, categoria);
  console.log("saved");
  dialog.style.visibility = "hidden";
});
cancelButton.addEventListener("click", () => {
  localStorage.setItem("idProductEditing", "");
  dialog.style.visibility = "hidden";
});
deleteButton.addEventListener("click", () => {
  const idProductEditing = localStorage.getItem("idProductEditing");
  if (!idProductEditing) {
    dialog.style.visibility = "hidden";

    return;
  }
  Swal.fire({
    title: "¿Estás seguro que queres borrar este producto?",
    text: "Se eliminará de tu lista de productos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si,borrar.",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = JSON.parse(localStorage.getItem("products"));
      const newProducts = products.filter((p) => p.id !== idProductEditing);
      localStorage.setItem("products", JSON.stringify(newProducts));
      localStorage.setItem("idProductEditing", "");
      renderProductsList(newProducts);
      dialog.style.visibility = "hidden";
      Swal.fire({
        title: "Borrado!",
        text: "Tu producto fue borrado con éxito.",
        icon: "success",
      });
    }
  });
});
