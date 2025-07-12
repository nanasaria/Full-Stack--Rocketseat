# JavaScript

## DOM - Document Object Model

### Obter o título do documento:

```js
document.title;
```

### Acessar elementos:

```js
const id = document.getElementById("id");
const grid = document.getElementsByClassName("grid");
const li = document.getElementsByTagName("li");

const id = document.querySelector("#id");        // Seleciona por id
const class = document.querySelector(".class");  // Seleciona por classe
const items = document.querySelectorAll("#items");
```

### Visualizar propriedades do objeto:

```js
console.dir(id);
```

### Manipulando conteúdo:

```js
id.textContent = "Primeiro item";
console.log(id.textContent); // Visível e oculto
```

### Outros seletores:

```js
const spanIntoList = document.querySelector("li span");
```

### Outras manipulações:

```js
spanIntoList.innerText = "Primeiro item";
spanIntoList.innerHTML = "<strong>Item</strong>";
```

---

## Alterando estilos:

```js
const input = document.querySelector("#nam");

input.classList.add("input-error");
input.classList.remove("input-error");
input.classList.toggle("input-error");

const button = document.querySelector("button");
button.style.backgroundColor = "red";
```

---

## Criando elementos:

```js
const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
const guestName = document.createElement("span");

guestName.textContent = "Maria Alice";
newGuest.append(guestName);

newGuest.classList.add("guest");
```

### Manipular atributos:

```js
const input = document.querySelector("input");

input.setAttribute("disabled", true);
input.setAttribute("type", "file");
input.removeAttribute("id");
```

---

## Eventos

```js
window.addEventListener("load", () => {});
```

### Capturar evento com dados:

```js
addEventListener("click", (event) => {
  console.log(event.target.textContent);
});
```

### Prevenir comportamento padrão:

```js
event.preventDefault();
```

### Exemplo: scroll com feedback

```js
ul.addEventListener("scroll", () => {
  if (ul.scrollTop > 300) {
    ul.scrollTo({ top: 0, behavior: "smooth" });
  }
});
```

---

## Eventos de formulário:

```js
const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

---

## Eventos em input:

```js
input.addEventListener("keydown", (event) => {
  console.log(event.key);
});

input.addEventListener("keypress", (event) => {
  console.log(event.key);
});

input.addEventListener("change", (event) => {
  console.log(event);
});
```

---

## Expressões Regulares:

```js
const regex = /\D+/g;
const value = input.value;
console.log(value.match(regex));
```

---

## Objetos em JavaScript:

```js
const user = {
  name: "Bárbara",
  surname: "Barbie",
  age: 19,
  method: function () {
    console.log("Olá, sou um método :)");
  },
};

user.method();
console.log(user["name"]);
```

### Contexto com `this`:

```js
const user = {
  name: "Bárbara",
  message: function () {
    console.log(`Olá, ${this.name}`);
  },
};
```

---

## Atualizar objetos:

```js
product.quantity = 90;
```

---

## Encadeamento Opcional:

```js
console.log(user?.address?.street);
```

---

## Operador de Coalescência Nula (??):

```js
console.log(content ?? "Conteúdo padrão");
```

---

## Funções Construtoras:

```js
function createProduct(name) {
  const product = {
    name,
    details() {
      console.log(`O nome do produto é ${this.name}`);
    },
  };
  return product;
}

const product1 = new createProduct("Teclado");
```

---

## Strings

```js
message.toUpperCase();
message.toLowerCase();
message.length;
message.replace(",", " ");
message.slice(0, 3);
message.slice(-6);
textWithSpace.trim();
```

### Ocultar números com `padStart()`:

```js
const maskedNumber = lastDigits.padStart(creditCard.length, "X");
```

---

## Trabalhando com Strings:

```js
let separate = text.split(",");
let joined = separate.join(" ");
message.indexOf("JS");
message.includes("JS");
```

---

## Arrays

```js
let fruits = ["Apple", "Orange", "Grape"];
fruits[2];

let phrase = "Katy Perry foi para a Lua";
phrase.split(" ");
Array.from(phrase);
```

### Adicionar/Remover:

```js
users.push("Caio");
users.unshift("Ana");
users.shift();
users.pop();
```

### Localizar e remover:

```js
fruits.indexOf("Apple");
fruits.splice(0, 2);
```

---

> **Obs:** Para o JavaScript, arrays também são objetos!

---

**Autor:** Nayara Nasaria Soares
