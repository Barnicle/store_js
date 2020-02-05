import "./style.css";
import "./nav.css";
import "./filters.js";
import CreateElements from "./create-elements.js";

const state = {
  items: [],
  price_sorted: "price_up",
  title_sorted: false,
  available_sorted: false
};

const available = document.querySelector("#available");
const price_up = document.querySelector("#price_up");
const price_down = document.querySelector("#price_down");
const title_sort = document.querySelector("#title_sort");
const list = document.querySelector("#items_placeholder");

available.addEventListener("click", handleAvailableSort);
price_up.addEventListener("click", handlePriceSort);
price_down.addEventListener("click", handlePriceSort);
title_sort.addEventListener("click", handleTitleSort);
list.addEventListener("itemsUpdated", displayElement);
list.addEventListener("itemsUpdated", savingItemsToLocalStorage);
list.addEventListener("itemsUpdated", removeElements);

function setArray() {
  let elem = {};
  for (let i = 0; i < 10; i++) {
    elem.id = i;
    i % 2 === 0 ? (elem.title = "Стул") : (elem.title = "Табуретка");
    elem.image =
      "https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg";

    elem.price = Math.trunc(Math.random(0, 100) * 1000);

    if (i % 2 == 0) elem.available = true;
    else elem.available = false;
    elem.descr = "Cупер стул";
    state.items[i] = { ...elem };
  }
}

(function App() {
  displayElement(state.items);
})();

function handlePriceSort(e) {
  let sorted_array;
  const element = document.getElementById(e.currentTarget.id);
  if (e.currentTarget.classList.contains("active")) {
    element.classList.remove("active");
    state.items = JSON.parse(localStorage.getItem("array"));
  } else {
    sorted_array = Object.entries(state.items).sort(
      () =>
        function(a, b) {
          return a[key].price > b[key].price;
        }
    );
    console.log(sorted_array);
    if (e.currentTarget.id === "price_up") {
      price_up.classList.add("active");
      console.log(e.currentTarget.id, state.price_sorted);
      if (price_down.classList.contains("active")) price_down.classList.remove("active");
      state.items = { ...sorted_array };
      state.price_sorted = "price_up";
    } else {
      price_down.classList.add("active");
      if (price_up.classList.contains("active")) price_up.classList.remove("active");
      state.price_sorted = "price_down";
      state.items = { ...sorted_array.reverse() };
    }
  }
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function handleAvailableSort(e) {
  const map = Mapobj(state.items, "available");
  console.log(map);
  if (state.available_sorted === false) {
    available.classList.add("active");
    state.available_sorted = true;
    // Object.entries(state.items).filter(k);
  } else {
    state.available_sorted = false;
    available.classList.remove("active");
    // state.items = JSON.parse(localStorage.getItem("array"));
  }
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function handleTitleSort(e) {
  let sorted_array = [];
  if (state.title_sorted === false) {
    title_sort.classList.add("active");
    state.title_sorted = true;
    sorted_array = Object.keys(state.items).sort(
      key =>
        function(a, b) {
          title_sort.classList.add("active");
          return a[key].title - b[key].title;
        }
    );
  } else {
    title_sort.classList.remove("active");
    state.title_sorted = false;
  }
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}
function displayElement() {
  const list = document.querySelector("#items_placeholder");
  list.innerHTML = "";

  if (list.innerHTML != "") list.innerHTML = "";

  const html = CreateElements(state.items);
  list.insertAdjacentHTML("beforeEnd", html);
}

function savingItemsToLocalStorage() {
  localStorage.setItem("state", JSON.stringify(state));
}

function Mapobj(data, name) {
  const map = Object.keys(data).map(key => {
    [name, data[key].available];
  });
  return map;
}
console.log(list.innerHTML);

window.onload = function() {
  setArray();
  displayElement();
};
