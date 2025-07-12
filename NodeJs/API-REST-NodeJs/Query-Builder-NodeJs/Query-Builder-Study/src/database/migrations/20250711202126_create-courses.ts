import type { Knex } from "knex";

/* 
Função up é responsável por enviar alterações ou 
criações para o banco de dados. 
*/
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("courses", (table) => {
    table.increments("id").primary(),
      table.text("name").notNullable(),
      table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/* 
Função down é responsável por desfazer o que uma migration
fez. 
*/
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("courses");
}
