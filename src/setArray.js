function setArray(state) {
  let elem = {};
  for (let i = 0; i < 3000; i++) {
    elem.id = i;
    i % 2 === 0 ? (elem.title = "Стул") : (elem.title = "Табуретка");
    elem.image =
      "https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg";
    elem.price = Math.trunc(Math.random(0, 100) * 1000);
    if (i % 2 == 0) elem.available = true;
    else elem.available = false;
    elem.descr = "Cупер стул";
    state[i] = {
      ...elem
    };
  }
}
export default setArray;