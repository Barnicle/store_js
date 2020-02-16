import CreateElements from "./create-elements.js";
import { handleAddItem } from "./cart";
import { handleAvailableSort, handlePriceSort, handleTitleSort } from "./handlers.js";
class Pagination {
  constructor(list, currentPage, numberPerPage) {
    this.list = list;
    this.currentPage = currentPage;
    this.numberPerPage = numberPerPage;
    this.numberOfPages = Math.ceil(list.length / numberPerPage);
  }

  nextPage = () => {
    this.currentPage += 1;
    this.loadList();
  };

  previousPage = () => {
    this.currentPage -= 1;
    this.loadList();
  };

  firstPage = () => {
    this.currentPage = 1;
    this.loadList();
  };

  lastPage = () => {
    this.currentPage = this.numberOfPages;
    this.loadList();
  };

  handlePriceSort = e => {
    handlePriceSort(e, this.list);
    this.loadList();
  };

  handleAddBtn = btns => {
    for (let i = 0; i < btns.length; i++) btns[i].addEventListener("click", handleAddItem);
  };

  handleAvailableSort = () => {
    handleAvailableSort(this.list);
    this.loadList();
  };

  handleTitleSort = () => {
    handleTitleSort(this.list);
    this.loadList();
  };

  loadList = function() {
    const begin = (this.currentPage - 1) * this.numberPerPage;
    const end = begin + this.numberPerPage;
    const html = this.list.slice(begin, end);
    let pageList = CreateElements(html);
    this.drawList(pageList);
    this.check();
  };

  drawList = pageList => {
    document.getElementById("list").innerHTML = "";
    for (let i = 0; i < pageList.length; i++) {
      document.getElementById("list").innerHTML += pageList[i];
    }
    const btns = document.querySelectorAll(".item-btn");
    this.handleAddBtn(btns);
  };

  check = () => {
    document.getElementById("next").disabled =
      this.currentPage == this.numberOfPages ? true : false;
    document.getElementById("previous").disabled = this.currentPage == 1 ? true : false;
    document.getElementById("first").disabled = this.currentPage == 1 ? true : false;
    document.getElementById("last").disabled =
      this.currentPage == this.numberOfPages ? true : false;
  };
}

export default Pagination;
