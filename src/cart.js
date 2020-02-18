import CreateCartElements from "./create-cart-elements";
import state from "./state";
import { cartCounter, cartList } from "./selectors";
class Cart {
  incCount = data => {
    const item = data;
    if (cartCounter.innerHTML === "") cartCounter.innerHTML = 1;
    else {
      const cart_count = parseInt(cartCounter.innerHTML) + 1;
      cartCounter.innerHTML = cart_count;
    }
    const value = parseInt(item.innerHTML) + 1;
    item.innerHTML = value;
  };

  drawCartItem = item => {
    cartList.insertAdjacentElement("beforeend", item);
  };

  addEventListeners = selector => {
    selector.addEventListener("click", this.removeCartItem);
  };

  removeCartItem = e => {
    const btnClicked = e.target;
    const id = e.target.id;
    const regEx = /\d+/g;
    const newid = parseInt([id.match(regEx)]);
    const CartItemAmount = document.querySelector(`#cart-item-${newid} #cart-item-amount`); //счетчик количество предмета в корзине
    const item = document.querySelector(`#id${newid}`); //счетчик количества предмета в корзине для каталога

    const itemInc = parseInt(item.innerHTML);
    const amount = parseInt(CartItemAmount.innerHTML);
    const cartCounterInt = parseInt(cartCounter.innerHTML);

    cartCounterInt > 1
      ? (cartCounter.innerHTML = cartCounterInt - 1)
      : (cartCounter.innerHTML = "");

    if (amount > 1) {
      item.innerHTML = itemInc - 1;
      CartItemAmount.innerHTML = amount - 1;
    } else {
      item.innerHTML = itemInc - 1;
      CartItemAmount.innerHTML = amount - 1;
      item.classList.replace("active", "disabled");
      btnClicked.parentElement.parentElement.remove();
    }
  };

  checkIsAlreadyInCart = id => {
    const counter = document.querySelector(`#delbtn${id}`);
    if (counter != null) return true;
    else false;
  };
}

export function handleAddItem(e) {
  const cart = new Cart();
  e.preventDefault();
  const id = e.target.id;
  // Записывает данные о предмете
  // Изменяет счетчик
  const itemAmount = document.querySelector(`#cart-item-${id} #cart-item-amount`);

  if (cart.checkIsAlreadyInCart(id) === true) {
    const amount = parseInt(itemAmount.innerHTML);
    itemAmount.innerHTML = amount + 1;
  } else {
    const html = CreateCartElements(state.items[id]);
    // state.cartList.push(state.items[id]);

    cart.drawCartItem(html);
    const removeBtn = document.querySelector(`#delbtn${id}`);
    removeBtn.addEventListener("click", cart.removeCartItem);
  }
  setQuantity(id); 
  const counter = document.getElementById(`id${id}`);
  counter.classList.replace("disabled", "active");
  cart.incCount(counter);
}

function setQuantity(id) {
  let quantity;
  state.cartList.has(id) ? (quantity = state.cartList.get(id) + 1) : (quantity = 1);
  state.cartList.set(id, quantity);
  console.log(state.cartList);
}
