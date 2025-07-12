# Módulo de Cálculo com ESModules

Este módulo demonstra diferentes formas de **exportar** e **importar** funções e classes em JavaScript usando **ESModules** (`import`/`export`).

---

## Estrutura do Arquivo

```bash
.
├── calc.js      # Módulo com funções e classe de cálculo
└── main.js      # Arquivo que importa e utiliza o módulo
```

---

## Importando e Utilizando

### Utilizando uma Classe

```js
import { Calc } from "./calc.js";

const calc = new Calc();

console.log("12 + 3 =", calc.sum(12, 3));
console.log("2 * 3 =", calc.multiply(2, 3));
```

---

### Importação com Alias

```js
import { sum as s, multiply as m } from "./calc.js";

console.log("12 + 3 =", s(12, 3));
console.log("2 * 3 =", m(2, 3));
```

---

### Importação com `default` e `named`

```js
import sum, { multiply } from "./calc.js";

console.log("12 + 3 =", sum(12, 3));
console.log("2 * 3 =", multiply(2, 3));
```

---

### Importação Comum

```js
import { sum, multiply } from "./calc.js";

console.log("12 + 3 =", sum(12, 3));
console.log("2 * 3 =", multiply(2, 3));
```

---

### Importar Tudo

```js
import * as calc from "./calc.js";

console.log("12 + 3 =", calc.sum(12, 3));
console.log("2 * 3 =", calc.multiply(2, 3));
```

---

## Exportando no `calc.js`

### Exportação `default`

```js
export default function sum(a, b) {
  return a + b;
}
```

### Exportação Nomeada

```js
export function multiply(a, b) {
  return a * b;
}
```

### Exportação Múltipla

```js
export { sum, multiply };
```

### Renomeando Exportações

```js
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export {
  sum as sumTwoNumbers,
  multiply as multiplyTwoNumbers
}
```

**Importação correspondente:**

```js
import { sumTwoNumbers, multiplyTwoNumbers } from "./calc.js";
```

---

## Exportando uma Classe

```js
export class Calc {
  sum(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}
```

---

**Autor:** Nayara Nasaria Soares
```
