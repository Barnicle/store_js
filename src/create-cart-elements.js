const CreateCartElements = data => {
  const item = data;
  const outer = createOuterDiv(data);
  return outer;
};

function createOuterDiv(item) {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add("cart-item-info", "d-flex", "flex-row");
  outerDiv.id = `cart-item-${item.id}`;
  const btn = document.createElement("button");
  btn.classList.add("cart-item-remove", "btn", "btn-sm");
  btn.id = `delbtn${item.id}`;
  outerDiv.insertAdjacentElement("beforeend", btn);
  const counter = document.createElement("div");
  counter.id = "";
  counter.innerHTML = "<span id='cart-item-amount'>1</span><span> x</span>";
  outerDiv.innerHTML = `<img class="cart-img"
          src=${item.image} />
        <div class="">
          <h5>${item.title}</h5>
          <p>${item.price}$</p>
        </div>
      </div>
        <div>
          <button class="cart-item-remove btn btn-sm" id='delbtn${item.id}'>X</button>
        </div>
        
        `;
  outerDiv.insertAdjacentElement("afterbegin", counter);

  return outerDiv;
}

export default CreateCartElements;
