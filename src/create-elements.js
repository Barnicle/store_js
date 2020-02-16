export default function CreateElements(data) {
  let newHTML;
  //if items in localstorage parse it
  if (localStorage.getItem("mykey") != null) newHTML = JSON.parse(localStorage.getItem("stage"));
  else
    newHTML = Object.keys(data).map(
      key => `<div
          class="item-container container-sm d-flex flex-column justify-content-center "
          name="item"
          id='${data[key].id}'
        >
          <div class="item cart-body">
            <div class="item-info container-sm d-flex justify-content-between">
              <span>Код: <span id="id">${data[key].id}</span></span>
              <span class="${
                data[key].available === true ? "available" : "out-of-stock"
              }" id="available">Наличие</span>
            </div>
            <div class="d-flex justify-content-center">
              <img
                class="item-img"
                id="img"
                src="${data[key].image}"
                alt="item image"
              />
            </div>
            <div class="d-flex justify-content-center">
              <h3 class="item-title card-title" id="title">${data[key].title}</h3>
            </div>
            <div class="item-desc card-text d-flex flex-column justify-content-center" id="descr">
              <p>${data[key].descr}</p>
              <div class="item-price-container d-flex flex-column justify-content-center">
                <span class="item-price" id="price">${data[key].price}$</span>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center">

              <form class="item-form d-flex flex-row align-items-center">
                <span id='id${data[key].id}'>0</span>
                <button class="cart-btn item-btn btn btn-primary"
                 id="${data[key].id}" 
                type="submit">
                  В Корзину
                </button>
              </form>
            </div>
          </div>
        </div>`
    );

  return newHTML;
}
