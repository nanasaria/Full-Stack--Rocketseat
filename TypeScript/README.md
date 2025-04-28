# 📚 TypeScript — Anotações e Conceitos

## Introdução

**JavaScript** é uma linguagem não tipada, ou seja, permite criar variáveis que podem receber conteúdos de tipos diferentes.

### O que é TypeScript?

- TypeScript adiciona tipagem estática ao JavaScript.
- Criado pela Microsoft.
- O código TypeScript é convertido em JavaScript, permitindo execução em qualquer ambiente onde o JS é suportado.

### Vantagens

- Feedback mais rápido de erros.
- Antecipação de problemas antes da execução.
- Código mais consistente.
- Facilidade no trabalho em equipe.
- Refatoração mais segura.
- Recurso de autocomplete.
- Pode ser adotado de forma gradual.

---

## 📌 Tipos Primitivos

```ts
let username: string;
let total: number;
let isLoading: boolean;
```

---

## 📌 Tipagem Explícita vs Inferência de Tipos

- **Explícita:** você declara o tipo.
- **Inferência:** o TypeScript deduz o tipo pelo valor inicial.

```ts
let name: string = "Julia"; // explícita
let age = 20; // inferência
```

---

## 📌 Tipo `any`

Aceita qualquer valor, perde os benefícios da tipagem estática.

```ts
let message: any;
message = "Texto";
message = 42;
message = true;
```

---

## 📌 Arrays

```ts
let names: string[] = ["Lady Gaga", "Britney Spears"];
let numbers: number[] = [1, 2, 3];
```

Inferência:

```ts
let products = ["Madonna", "Chappell Roan"];
```

---

## 📌 Funções

```ts
function sum(x: number, y: number): number {
  return x + y;
}

const showMessage = (name: string): string => {
  return "Olá " + name;
};
```

---

## 📌 Objetos

```ts
let user: { name: string; age: number; urlAvatar?: string } = {
  name: "Julia",
  age: 18,
};
```

Função com objeto:

```ts
function signIn({ email, password }: { email: string; password: string }) {
  return "Usuário " + email + " Conectado!";
}
```

---

## 📌 `null` vs `undefined`

- **undefined:** variável declarada sem valor atribuído.
- **null:** ausência de valor intencional.

---

## 📌 Union Types

Permite múltiplos tipos:

```ts
let response: string | null;
```

---

## 📌 Interfaces

Definem estrutura de objetos.

```ts
interface IProduct {
  id: number;
  name: string;
}

function newProduct(product: IProduct) {
  return "Produto: " + product.name;
}
```

Extensão de interface:

```ts
interface Person {
  id: number;
  name: string;
}

interface Teacher extends Person {
  subjects: string[];
}
```

---

## 📌 Type

Tipagem personalizada.

```ts
type Product = {
  id: number;
  name: string;
};
```

Union:

```ts
type SelectResponse = Product[] | null;
```

Intersecção:

```ts
type PersonSchool = { id: number; name: string };
type TeacherHistory = PersonSchool & { subjects: string[] };
```

---

## 📌 Type vs Interface

| Interface                                     | Type                                            |
| :-------------------------------------------- | :---------------------------------------------- |
| Extensível, permite sobrescrever              | Não permite sobrescrever                        |
| Implementada por classes                      | Ideal para funções, unions, intersections       |
| Permite Declaration Merging (não recomendado) | Utiliza tipos primitivos, avançados e complexos |

**Dica:**

- **Interface:** objetos e classes.
- **Type:** tipos avançados, unions e funções.

---

## 📌 Asserção de Tipos

Forçar um tipo para o TypeScript.

```ts
type UserResponse = { id: number; name: string; avatar: string };
let userResponse = {} as UserResponse;
```

---

## 📌 Restringindo Valores

```ts
type Size = "small" | "medium" | "large";
let size: Size;
size = "small";
```

---

## 📌 Enums

Enumera constantes.

```ts
enum Profile {
  Admin = 1,
  Client = 2,
  Seller = 3,
}

let profile: number = Profile.Admin;
```

---

## 📌 Generics

Tipagem flexível e reutilizável.

```ts
function useState<T extends number | string = string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}
```

**Convenções:**

- `T` → Type
- `K` → Key
- `V` → Value
- `E` → Element

---

## 📌 Utilitários TypeScript

### `Partial`

Deixa todas propriedades opcionais.

```ts
const updatedUser: Partial<User> = { name: "Justin Bieber" };
```

### `Pick`

Seleciona propriedades.

```ts
const book: Pick<Book, "title"> = { title: "TypeScript" };
```

### `Omit`

Remove propriedades.

```ts
const book: Omit<Book, "description"> = {
  title: "TypeScript",
  pages: 100,
  author: "Neil",
};
```

### `Record`

Mapeia chaves e valores.

```ts
const scores: Record<string, number> = { Henrique: 10 };
```

Com tipo limitado:

```ts
type Profile = "admin" | "user" | "guest";
const user2: Record<Profile, number> = { admin: 1, user: 2, guest: 3 };
```

### `typeof`

Reutiliza a tipagem de outro objeto.

```ts
const product2: typeof product1 = { id: 1, name: "Teclado" };
```

### `keyof`

Extrai as chaves de um objeto.

```ts
type Icon = keyof typeof icons;
const icon: Icon = "add";
```

---
