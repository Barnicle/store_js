import { sortTitle, sortobj } from "./sort";
import state from "./state.js";
import { available, price_down, price_up, title_sort } from "./selectors.js";

export const handlePriceSort = (e, list) => {
  const element = document.getElementById(e.currentTarget.id);
  if (e.currentTarget.classList.contains("active")) {
    //если кнопка уже была нажата
    e.currentTarget.classList.remove("active");
    sortobj(list, "id");
  } else {
    sortobj(list, "price");

    if (e.currentTarget.id === "price_up") {
      //по возрастанию
      resetActiveFilter(state);
      price_up.classList.add("active");
      state.price_sorted = "price_up";
    } else if (e.currentTarget.id === "price_down") {
      //по убыванию
      resetActiveFilter(state);
      price_down.classList.add("active");
      list.reverse();
      state.price_sorted = "price_down";
    }
  }
};

export function handleAvailableSort(list) {
  if (state.available_sorted === false) {
    resetActiveFilter(state);
    available.classList.add("active");
    state.available_sorted = true;
    sortobj(list, "available");
  } else {
    state.available_sorted = false;
    sortobj(list, "id");
    available.classList.remove("active");
  }
}

export function handleTitleSort(list) {
  if (state.title_sorted === false) {
    resetActiveFilter(state);
    sortTitle(list);
    title_sort.classList.add("active");
    state.title_sorted = true;
  } else {
    title_sort.classList.remove("active");
    sortobj(list, "id");
    state.title_sorted = false;
  }
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
