import setArray from "./setArray.js";
import Pagination from "./pagination.js";
import "./style.css";
import "./nav.css";
import state from "./state.js";
import {
  available,
  price_down,
  price_up,
  title_sort,
  next,
  prev,
  first,
  last
} from "./selectors.js";

let currentPage = 1;
let numberPerPage = 15;

setArray(state.items);
const pagination = new Pagination(state.items, currentPage, numberPerPage);

const App = () => {
  pagination.loadList();
  available.addEventListener("click", pagination.handleAvailableSort);
  price_up.addEventListener("click", pagination.handlePriceSort);
  price_down.addEventListener("click", pagination.handlePriceSort);
  title_sort.addEventListener("click", pagination.handleTitleSort);
  next.addEventListener("click", pagination.nextPage);
  prev.addEventListener("click", pagination.previousPage);
  first.addEventListener("click", pagination.firstPage);
  last.addEventListener("click", pagination.lastPage);
};

window.onload = App;
