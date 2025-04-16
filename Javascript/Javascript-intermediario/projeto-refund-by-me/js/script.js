const items = [];
let quantityItems = 0;
let valueItems;

const inputTitle = document.getElementById("title");
const selectedCategory = document.getElementById("category");
const inputValue = document.getElementById("value-credit");
const form = document.querySelector("form");
const btnForm = document.getElementById("btn-form");
const expenses = document.getElementById("expenses");
const resultPrice = document.getElementById("result-price");
const ul = document.getElementById("items");

class Refund {
  constructor(title, category, value) {
    this.title = title;
    this.category = category;
    this.value = value;
  }

  add() {
    const newId = generateId();

    const newItem = {
      id: newId,
      title: this.title,
      category: this.category,
      value: parseFloat(formatValue(this.value)),
    };

    const currency = formatToCoin(parseFloat(formatValue(this.value)));

    items.push(newItem);
    createLi(this.title, this.category, currency, newId);
  }

  static remove(item, id) {
    item.remove();
    const index = items.findIndex((i) => i.id === parseInt(id));

    if (index > -1) {
      items.splice(index, 1);
    }
  }

  quantity() {
    quantityItems = items.length;
  }

  sum() {
    valueItems = 0;
    for (const item of items) {
      valueItems += item.value;
    }
  }
}

inputTitle.addEventListener("keypress", () => {
  btnForm.removeAttribute("disabled");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (selectedCategory.value === "") {
    alert("Por favor, selecione uma categoria");
    return;
  }

  if (inputValue.value === "") {
    alert("Por favor, insira um valor");
    return;
  }

  const { title, category, value } = {
    title: inputTitle.value,
    category: selectedCategory.value,
    value: inputValue.value,
  };

  const refund = new Refund(title, category, value);
  refund.add();
  refund.quantity();
  refund.sum();

  showExpenses(quantityItems);
  showResultPrice(valueItems);
  clear();
});

ul.addEventListener("click", (event) => {
  const removeBtn = event.target.closest(".remove");
  if (!removeBtn) return;

  const li = removeBtn.closest("li");
  const id = li.getAttribute("id");

  Refund.remove(li, id);
  updateExpenses();
  updateResultPrice();
});

function clear() {
  inputTitle.value = "";
  inputValue.value = "";
  selectedCategory.value = "";
}

function showExpenses(expense) {
  expenses.innerHTML = `${expense} Despesas`;
}

function showResultPrice(price) {
  resultPrice.innerHTML = `${formatToCoin(price)}`;
}

function updateExpenses() {
  quantityItems = items.length;
  expenses.innerHTML = `${quantityItems} Despesas`;
}

function updateResultPrice() {
  valueItems = 0;
  for (const item of items) {
    valueItems += item.value;
  }
  resultPrice.innerHTML = `${formatToCoin(valueItems)}`;
}

function formatValue(value) {
  return value.replace(",", ".");
}

function formatToCoin(value) {
  const coin = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return coin.replace("R$", "");
}

function generateId() {
  if (items.length === 0) return 0;
  const maxId = Math.max(...items.map((item) => item.id));
  return parseInt(maxId + 1);
}

function createLi(title, category, value, id) {
  let li = document.createElement("li");
  const img = imageRelatedCategory(category);
  const divColumn = createDivColumn(title, category);
  const divRow = createDivRow(value);

  li.setAttribute("id", id);
  li.setAttribute("class", "item flex row");
  li.appendChild(img);
  li.appendChild(divColumn);
  li.appendChild(divRow);

  ul.appendChild(li);
  return li;
}

function imageRelatedCategory(category) {
  let img;
  img = document.createElement("img");

  if (category.toLowerCase() === "hospedagem") {
    img.setAttribute("src", "assets/icon/hotel.svg");
  }
  if (category.toLowerCase() === "alimentacao") {
    img.setAttribute("src", "assets/icon/food.svg");
  }
  if (category.toLowerCase() === "transporte") {
    img.setAttribute("src", "assets/icon/taxi.svg");
  }
  if (category.toLowerCase() === "servicos") {
    img.setAttribute("src", "assets/icon/services.svg");
  }
  if (category.toLowerCase() === "outros") {
    img.setAttribute("src", "assets/icon/others.svg");
  }

  return img;
}

function createDivColumn(title, category) {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");

  div.setAttribute("class", "flex column");

  h3.setAttribute("class", "heading-md title");
  h3.innerHTML = title;

  p.setAttribute("class", "text-sm category");
  p.innerHTML = category;

  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function createDivRow(value) {
  let div = document.createElement("div");
  let pCoin = document.createElement("p");
  let pValue = document.createElement("p");

  div.setAttribute("class", "end flex row");

  pCoin.setAttribute("class", "text-sm coin");
  pCoin.innerHTML = `R$`;

  pValue.setAttribute("class", "subheading value");
  pValue.innerHTML = `${value}`;

  const btn = createBtnRemove();
  div.appendChild(pCoin);
  div.appendChild(pValue);
  div.appendChild(btn);

  return div;
}

function createBtnRemove() {
  let btn = document.createElement("button");
  btn.setAttribute("class", "remove");
  let img = document.createElement("img");
  img.setAttribute("src", "assets/icon/remove.svg");

  btn.appendChild(img);

  return btn;
}
