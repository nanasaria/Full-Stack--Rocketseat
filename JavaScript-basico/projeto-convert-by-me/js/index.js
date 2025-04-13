const input = document.querySelector("input");
const button = document.querySelector("button");
const form = document.querySelector("form");
const options = document.querySelector("select");
const cardResult = document.querySelector(".result");
const currentQuote = document.querySelector(".current-quote");
const resultValue = document.querySelector(".result-real");

let result;
let price;

input.addEventListener("input", (event) => {
  enabledButton();
});

form.addEventListener("submit", (event) => {
  const value = input.value;
  const coin = options.value;

  event.preventDefault();
  price = currentPrice(coin);
  convertCoin(value, price.value);
  showResult(result);
  showPlaceholder(input.value);
});

function enabledButton() {
  button.removeAttribute("disabled");
}

function convertCoin(value, priceCoin) {
  if (inputIsNan(value)) {
    input.value = "";
    return alert("Você precisa inserir um número válido");
  }
  return (result = parseFloat(value) * priceCoin);
}

function currentPrice(coin) {
  if (coin === "dolar") {
    return {
      value: 5.86,
      coin: "US$",
    };
  }

  if (coin === "euro") {
    return {
      value: 6.66,
      coin: "€",
    };
  }

  if (coin === "libra") {
    return {
      value: 7.67,
      coin: "£",
    };
  }
}

function inputIsNan(value) {
  const verify = isNaN(value);
  return verify;
}

function changeHeightForm() {
  form.style.height = "570px";
}

function enableCardResult() {
  cardResult.style.display = "flex";
}

function formatResult(result) {
  return result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function showResult(result) {
  if (!inputIsNan(result)) {
    changeHeightForm();
    enableCardResult();
    currentQuote.innerText = `${price.coin} 1 = R$ ${price.value}`;
    resultValue.innerText = `${formatResult(result)}`;
  }
}

function showPlaceholder(value) {
  input.setAttribute("placeholder", value);
  input.value = "";
}
