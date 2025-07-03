import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  /* 
  Métodos e propriedades privados 
  Se coloca o # na frente e só podem ser 
  acessados dentro da classe.
  E onde são chamados, se coloca também o
  # na frente.
  */
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = data;
    }

    this.#persist();
  }

  select(table) {
    return this.#database[table] ?? [];
  }
}
