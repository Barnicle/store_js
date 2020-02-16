const CreateCartElements = data => {
  const item = data;
  const outer = createOuterDiv(data);
  return outer;
};

function createOuterDiv(item) {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("cart-item-info", "d-flex", "flex-row");
  const btn = document.createElement("button");
  btn.classList.add("cart-item-remove", "btn", "btn-sm");
  btn.id = `delbtn${item.id}`;
  outerDiv.insertAdjacentElement("beforeend", btn);

  outerDiv.innerHTML = `<img class="cart-img"
          src=${item.image} />
        <div class="">
          <h5>${item.title}</h5>
          <p>${item.price}</p>
        </div>
      </div>
        <div>
          <button class="cart-item-remove btn btn-sm" id='delbtn${item.id}'>X</button>
        </div>`;

  return outerDiv;
}

const removeCartItem = e => {
  const btnClicked = e.target;
  const id = e.target.id;
  console.log(id);
  btnClicked.parentElement.parentElement.remove();
};

export default CreateCartElements;
