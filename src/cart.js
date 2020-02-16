import CreateCartElements from "./create-cart-elements";
import state from "./state";
class Cart {
  setCount = data => {
    const item = data;
    let cart_count;
    const cart = document.querySelector("#cart-items-quantity");
    if (cart.innerHTML === "") cart_count = 1;
    const value = parseInt(item.innerHTML) + 1;
    cart_count = parseInt(cart.innerHTML) + 1;
    item.innerHTML = value;
    cart.innerHTML = cart_count;
  };

  drawCartItem = item => {
    const cartList = document.querySelector("#cartList");
    cartList.insertAdjacentElement("beforeend", item);
  };

  addEventListeners = selector => {
    selector.addEventListener("click", this.removeCartItem);
  };
}

export function handleAddItem(e) {
  const cart = new Cart();
  e.preventDefault();
  const id = e.target.id;
  // Записывает данные о предмете
  // Изменяет счетчик
  const counter = document.getElementById(`id${id}`);
  const html = CreateCartElements(state.items[id]);
  state.cartList.push(state.items[id]);
  cart.drawCartItem(html);

  cart.setCount(counter);
  const removeBtn = document.querySelector(`#delbtn${id}`);
  removeBtn.addEventListener("click", removeCartItem);
}
const removeCartItem = e => {
  const btnClicked = e.target;
  const id = e.target.id;
  console.log(id);
  btnClicked.parentElement.parentElement.remove();
};

const checkIsAlreadyInCart = () => {
  const counter = document.querySelector;
};
// const AddRemoveListener
