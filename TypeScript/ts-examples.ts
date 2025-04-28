/* ************************************************************************ */

function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(7, 3);

/* ************************************************************************ */

const showMessage = (name: string): string => {
  return "Olá" + name;
};

const message = showMessage("Harry");

/* ************************************************************************ */

function signIn({ email, password }: { email: string; password: string }) {
  return "Usuário" + email + "Conectado!";
}

signIn({
  email: "rogerio@gmail.com",
  password: "1234",
});

/* ************************************************************************ */

interface IProduct {
  id: number;
  name: string;
}

function newProduct(product: IProduct) {
  return "Produto: " + product.name;
}

newProduct({ id: 1, name: "Teclado" });

/* ************************************************************************ */

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

let newState = useState<string>();
newState.get();
newState.set("Sou uma string");

/* ************************************************************************ */

interface User {
  id: number;
  name: string;
  email: string;
}

const newUser: User = {
  id: 1,
  name: "Justin",
  email: "justinbieber@gmail.com",
};

const updatedUser: Partial<User> = {
  name: "Justin Bieber",
};

/* ************************************************************************ */

interface Book {
  title: string;
  pages: number;
  author: string;
}

const book: Pick<Book, "title"> = { title: "TypeScript" };
const book2: Pick<Book, "title" | "pages"> = {
  title: "TypeScript",
  pages: 150,
};

/* ************************************************************************ */

interface BookWithDescription {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book3: Omit<BookWithDescription, "description"> = {
  title: "TypeScript",
  pages: 100,
  author: "Neil",
};

/* ************************************************************************ */

const scores: Record<string, number> = {
  Henrique: 10,
};

type Profile = "admin" | "user" | "guest";

const user2: Record<Profile, number> = {
  admin: 1,
  user: 2,
  guest: 3,
};

interface User2 {
  name: string;
  email: string;
}

const users: Record<number, User2> = {
  1: { name: "Britney Spears", email: "britney@gmail.com" },
  2: { name: "Mariah Carey", email: "mariah@gmail.com" },
};

/* ************************************************************************ */
