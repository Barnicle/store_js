import "./style.css";
import "./nav.css";
import "./filters.js";
import CreateElements from "./create-elements.js";

let state = {
  items: [],
  cart: [],
  price_sorted: ["price_up", false], //[last sorted, is array already sorted]
  title_sorted: false,
  available_sorted: false
};

const available = document.querySelector("#available");
const price_up = document.querySelector("#price_up");
const price_down = document.querySelector("#price_down");
const title_sort = document.querySelector("#title_sort");
const list = document.querySelector("#items_placeholder");

function setArray() {
  let elem = {};
  for (let i = 0; i < 10; i++) {
    elem.id = i;
    i % 2 === 0 ? (elem.title = "Стул") : (elem.title = "Aaaaa");
    elem.image =
      "https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg";
    elem.price = Math.trunc(Math.random(0, 100) * 1000);
    if (i % 2 == 0) elem.available = true;
    else elem.available = false;
    elem.descr = "Cупер стул";
    state.items[i] = { ...elem };
  }
}

function handlePriceSort(e) {
  const element = document.getElementById(e.currentTarget.id);
  console.log(element);
  if (e.currentTarget.classList.contains("active")) {
    element.classList.remove("active");
    sortobj(state, "id");
    state.price_sorted[1] = false;
  } else {
    sortobj(state, "price");

    if (e.currentTarget.id === "price_up") {
      resetActiveFilter();
      price_up.classList.add("active");
      state.price_sorted = ["price_up", true];
    } else {
      resetActiveFilter();
      price_down.classList.add("active");
      state.items.reverse();
      state.price_sorted = ["price_down", true];
    }
  }

  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}
function resetActiveFilter() {
  const active = document.querySelectorAll(".active");
  if (active.length != 0) {
    active.forEach(function(el) {
      el.classList.remove("active");
    });
    if (state.price_sorted[1] === true) state.price_sorted[1] = false;
    if (state.title_sorted === true) state.title_sorted = false;
    if (state.available_sorted === true) state.available_sorted = false;
  }
}

function handleAvailableSort(e) {
  if (state.available_sorted === false) {
    resetActiveFilter();
    console.log(available);
    available.classList.add("active");
    state.available_sorted = true;
    sortobj(state, "available");
  } else {
    state.available_sorted = false;
    sortobj(state, "id");
    available.classList.remove("active");
  }
  list.dispatchEvent(new CustomEvent("itemsUpdated"));
}

function handleTitleSort(e) {
  if (state.title_sorted === false) {
    resetActiveFilter();
    sortobj(state, "title");
    title_sort.classList.add("active");
    state.title_sorted = true;
  } else {
    console.log(title_sort);
    title_sort.classList.remove("active");
    sortobj(state, "id");
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
  localStorage.setItem("state", JSON.stringify(state.items));
}

function toggle(obj) {
  var el = document.getElementById(obj);
  if (el.style.display != "none") {
    el.style.display = "none";
  } else {
    el.style.display = "";
  }
}
function sortobj(data, type) {
  const result = data.items.sort(function(a, b) {
    if (type === "available") return b[type] - a[type];
    if (type === "title") {
      const nameA = a[type].toLowerCase();
      const nameB = b[type].toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }
    return a[type] - b[type];
  });
  return result;
}

available.addEventListener("click", handleAvailableSort);
price_up.addEventListener("click", handlePriceSort);
price_down.addEventListener("click", handlePriceSort);
title_sort.addEventListener("click", handleTitleSort);
list.addEventListener("itemsUpdated", displayElement);
list.addEventListener("itemsUpdated", savingItemsToLocalStorage);

window.onload = function() {
  setArray();
  displayElement(state.items);
};
